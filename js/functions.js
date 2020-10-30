function REVEALDOM(){
    var myDoc = document.getElementById(`mavigationBarMobile`);
    if(myDoc.style.display == `none`){
        myDoc.style.display = `block`;
    }else{
        myDoc.style.display = `none`;
    }
}