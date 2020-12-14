
function checkInput(){
    var inputName = document.getElementById("name");
    var inputPhone = document.getElementById("phonenumber");
    var inputEmail = document.getElementById("email");
    var inputMessage = document.getElementById("message");
    var button = document.querySelector("#submit");
    var reqEx = /\S+@\S+\.\S+/;

    if(inputName.value.trim() != "" && reqEx.test(inputEmail.value) && inputPhone.value !== "" && inputMessage.value !== ""){
        button.style.background = "#D70046";
        button.disabled = false;
    }else{
        button.style.background = "#515151";
        button.disabled = true;
    }
    console.log( `Input recorder`);
}


function REVEALDOM(){
    var myDoc = document.getElementById(`mavigationBarMobile`);
    if(myDoc.style.display == `none`){
        myDoc.style.display = `block`;
    }else{
        myDoc.style.display = `none`;
    }
}
