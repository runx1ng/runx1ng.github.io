$(document).ready(function(){

    $(".create_button").click(function(){
        var message1 = $("#title").val();
        var message2 = $("#date").val();
        var message3 = $("#time1").val();
        var message4 = $("#time2").val();
    
        document.getElementsByClassName("callout-task")[0].display='none';
        if(message1 != ""){
            console.log(123);
            $("#text").append("<p>"+message1+message2+message3+message4+"</p>");
        }
    });
    
});