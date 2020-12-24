const Joi = require('joi');

class VALIDATION{
static async validatePost(request,response){
  const schema = Joi.object({
    title: Joi.string(),
    
    description: Joi.string(),

    imagesource: Joi.string(),

   
});
schema.validate(request.body);
schema.validate({});
try {
    const value = await schema.validateAsync({ username: 'abc', birth_year: 1994 });
}
catch (err) {
  response.json({
    status: 400,
    message: "Some fields are empty"
  })
 }
}

}
module.exports = VALIDATION;