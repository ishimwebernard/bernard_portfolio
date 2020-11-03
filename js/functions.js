function REVEALDOM(){
    var dc  = document.getElementById('mavigationBarMobile');
    if(dc.style.display == "block"){
        dc.style.display = "none";
    }else{
        dc.style.display = "block";
    }
}