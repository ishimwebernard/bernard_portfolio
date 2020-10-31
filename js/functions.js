function REVEALDOM(){
    var dc = document.getElementById(`mavigationBarMobile`);
    if(dc.style.display == "none"){
        dc.style.display = "block";
    }else{
        dc.style.display = "none";
    }
}