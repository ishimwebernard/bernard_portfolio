import bcrypt from 'bcrypt';
import userSchema from '../models/user';
import jwt from 'jsonwebtoken';
import JOIValidator from '../helpers/joivalidator';

class userManip{
    static signUp= function(request,response){
        JOIValidator.validateForSignUp(request.body).then(error=>{
            if(error !== 'Success'){
                return response.status(400).send({
                    message: "Bad request",
                    error
                })
            }else{
                bcrypt.hash(request.body.password,10,function(error,harshedPassword){
                    let user = new userSchema({
                        name: request.body.name,
                        email: request.body.email,
                        password: harshedPassword
                    });
                    let token = jwt.sign({name: user.name}, "$xfg%3./;",{expiresIn: "1h"});
                    user.save().then((error)=>{
                        if(error !== undefined){
                            return response.status(201).send({
                                  token,
                                  message: "Success"
                               })
                        }
                        
                     })
        
            })
             } 
        })
  
       
}

    static login = function(request, response){
        let user = {
            email: request.body.email,
            password: request.body.password
        }
        userSchema.findOne({$or: [{email:request.body.email}]}).then(SUCCESS_USER=>{
            if(SUCCESS_USER){
                bcrypt.compare(request.body.password, SUCCESS_USER.password, function(error, result){
                       if(result){
                        let token = jwt.sign({name: user.name}, "$xfg%3./;",{expiresIn: "1h"});
                        return response.status(200).send({
                           message:"Login Succesful",
                           token
                        });
                       }else{
                          return response.status(401).json({
                               
                               message: "Invalid Credentials"
                           })
                       }
                    //}
                    
                });
            }
        })
    }
    }

module.exports = userManip