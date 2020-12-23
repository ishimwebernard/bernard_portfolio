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
       try{

        userSchema.findOne({$or: [{email:request.body.email}]}).then(SUCCESS_USER=>{
            if(SUCCESS_USER){
                bcrypt.compare(request.body.password, SUCCESS_USER.password, function(error, result){
                    if(error){
                        response.setHeader("Error", true);
                        return response.json({
                            message:"Incorrecct Password or the user is deleted",
                            
                        });
                    }else if(result){
                        var token = jwt.sign({name: user.name}, "$xfg%3./;",{expiresIn: "1h"});
                        response.setHeader("Error", false);
                        return response.json({
                            status: 200,
                            message:"Login Succesful",
                            token
                        });
                    }
                    
                })
            }
        })
       }catch(error){
            return response.send(error).status(500);
       }
    }
}
module.exports = userManip