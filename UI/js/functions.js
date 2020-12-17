

var cookies = document.cookie.split(';').map(cookie => cookie.split('='))
.reduce((accumulator, [key, value]) => ({
    ...accumulator,
    [key.trim()]: decodeURIComponent(value)
}), {});

userId = String(cookies.uid);
var userProfiles = document.getElementsByClassName('profilePicture');

initiateUserImage();


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
function revealMenu(){
    var dc  = document.getElementById('profileOption');
    if(dc.style.display == "flex"){
        dc.style.display = "none";
    }else{
        dc.style.display = "flex";
    }
}
function revealSettings(){
    var dc  = document.getElementById('settingsmenu');
    var filler = document.getElementById('filler');
    if(dc.style.display == "flex"){
        dc.style.display = "none";
        filler.style.display = "none";
    }else{
        dc.style.display = "flex";
        filler.style.display="block";
    }
    revealMenu()
}

function initiateUserImage(){
    var username = document.getElementById('username');
    console.log(username);
    firebase.storage().ref().child(String(userId)).getDownloadURL().then((url)=>{
        for(let profile of userProfiles){
            profile.style.backgroundImage = `url("${url}")`;
        }
    }).catch(error=>{
        alert('Error'+error);
    });
    firebase.firestore().collection('users').doc(userId).get().then((dataSnapshot)=>{
        console.log(dataSnapshot.data().firstName);
        username.innerText = dataSnapshot.data().firstName;
       
    })
}
var choosefile = document.getElementById("profilechooser").onchange = function(){
    var storageRef = firebase.storage().ref();
    var userStorageRef = storageRef.child(String(userId));

    const selectedFile = document.getElementById('profilechooser').files[0];
    document.getElementById("loader").style.display = "block";
    userStorageRef.put(selectedFile).then(function(snapshot) {        
        const fileDirectory = snapshot.ref.getDownloadURL().then(url=>{
            populateUserImages(url);
            document.getElementById("loader").style.display = "none";
        }).catch(error=>{
            alert(error);
            console.log(error);
        })
    }).catch(error=>{
        alert(String(error));
        console.log(error);
    });

};
function populateUserImages(url){
    for(let profile of userProfiles){
        profile.style.backgroundImage = `url("${url}")`;
    }
}
function logout(){
    firebase.auth().signOut().then(()=>{
        location.href = `../pages/blogpage.html`;
    }).catch(err=>{

    })
}






