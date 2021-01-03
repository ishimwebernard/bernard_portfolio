class userValidator{
    static checkForSignUp = function(_TEST_USER){
       let retval = 'false';
              // eslint-disable-next-line no-prototype-builtins
       if((_TEST_USER.hasOwnProperty('name')) && (_TEST_USER.hasOwnProperty('email')) && (_TEST_USER.hasOwnProperty('password'))){
            retval = 'true';
       }
       return retval;
    }
}
module.exports = userValidator;