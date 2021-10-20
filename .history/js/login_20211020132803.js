$(document).ready(function(){
    $(".signin").click(function(){
        var email = $(".email").val();
        localStorage.setItem("email", email);
    });
});