const bcrypt = require('bcrypt');
const userSchema = require('../models/user');
const jwt = require('jsonwebtoken');

class userManip{
    static signUp= function(request,response,next){
        bcrypt.hash(request.body.password,10,function(error,harshedPassword){
            if(error){
                response.json({
                     error
                })
            }
            var user = new userSchema({
                name: request.body.name,
                email: request.body.email,
                password: harshedPassword
            });
           try{
            user.save().then(user=>{
                return response.send({
                  status: 200,
                    user,
                    message: "Success"
                 })
             })
           }catch(error){
                return response.send(error).status(500);
           }

    })
}

    static login = function(request, response,next){
        var user = {
            email: request.body.email,
            password: request.body.password
        }
        userSchema.findOne({$or: [{email:request.body.email}]}).then(SUCCESS_USER=>{
            if(SUCCESS_USER){
                bcrypt.compare(request.body.password, SUCCESS_USER.password, function(error, result){
                    console.log(result);
                    console.log(error);
                       if(result){
                        var token = jwt.sign({name: user.name}, "$xfg%3./;",{expiresIn: "1h"});
                        response.json({
                           message:"Login Succesful",
                           token
                        });
                       }else{
                           response.send({
                               status: 500,
                               message: "Invalid Credentials"
                           })
                       }
                    //}
                    
                });
            }
        }).catch(error=>{
            response.setHeader("Network Error", true);
            response.json({
                message: "Something went wrong",
                error
            })
        });
    }
    }

module.exports = userManip