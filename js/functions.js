function REVEALDOM(id,parentId){
    const k = document.getElementById(id);
    const parentView = document.getElementsByClassName("line");
    if(k.style.display == "block"){
        k.style.display = "none";
    }else{
        k.style.display = "block";
        parentView.style.display = "none";
    }
}