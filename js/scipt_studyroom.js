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