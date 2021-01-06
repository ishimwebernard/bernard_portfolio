const Joi = require('joi');


const userSignIn = Joi.object({
    _id: Joi.string(),
    name: Joi.string()
        .min(3)
        .max(30)
        .required(),

    password: Joi.string()
    .min(3).required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required()});

const userLogin = Joi.object({
    password: Joi.string()
    .min(3).required(),
email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
})

class JoiValidate{
    static validateForSignUp = async function(signupUser){
        try{
            await userSignIn.validateAsync(signupUser);
            return 'Success';
        }catch(error){
            return String(error.details[0].message);
        }
    }

    static validateForLogin = async function(loginUser){
        try{
            await userLogin.validateAsync(loginUser);
            return 'Success';
        }catch(error){
            return String(error.details[0].message);
        }
    }
}
module.exports = JoiValidate;