$(document).ready(function(){

    $(".main_button").click(function(){
        localStorage.setItem("guide", 0);
        window.location.href="index.html";
    });
});
