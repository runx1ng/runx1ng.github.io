$(document).ready(function(){
    $(".signin").click(function(){
        console.log(123);
        var email = $(".email").val();
        localStorage.setItem("email", email);
    });
});