var i=0;
var v = ["./Images/video.png","./Images/video_close.png"];
var rb = ["./Images/r_head.png","./Images/r.png"];
function changeImage() {
    document.getElementById("video").src= v[i];
    if (i==0) {
        i=1
    }
    else{
        i=0
    }
}
function rabbit() {
    document.getElementById("rb").src= rb[i];
    if (i==0) {
        i=1
    }
    else{
        i=0
    }
}
function mobileDisplay() {
    document.getElementsByClassName("callout-mobile")[0].style.display = "block";
    
}

function qrDisplay() {
    document.getElementsByClassName("callout-QR")[0].style.display = "block";
    
}

function accept() {
    
    document.getElementsByClassName("callout-QR")[0].style.display = "none";
    document.getElementsByClassName("callout-code")[0].style.display = "block";
    document.getElementById("mobile").src="./Images/mobile_lock.jpg";
    
}

function inviteDisplay() {
    document.getElementsByClassName("callout-invite")[0].style.display = "block";
    
}

function partnerDisplay() {
    document.getElementsByClassName("partner")[0].style.display = "block";
    document.getElementsByClassName("callout-invite")[0].style.display = "none";
    document.getElementById("invite").src="./Images/Two.png";
}

function lockInternet(){
    document.getElementsByClassName("button")[0].parentElement.parentElement.style.display='none';
    document.getElementById("internet").src="./Images/internet_lock.jpg";
}

function taskDisplay() {
    document.getElementsByClassName("callout-task")[0].style.display = "block";
    
}


// Reference
// 1. https://www.w3schools.com/js/default.asp

