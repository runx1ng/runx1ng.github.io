$(document).ready(function(){

    
    $(".create_button").click(function(){
        var message1 = $("#title").val();
        var message2 = $("#date").val();
        var message3 = $("#time1").val();
        var message4 = $("#time2").val();
    
        document.getElementsByClassName("callout-task")[0].display='none';
        if(message1 != ""){
            $("#text").append("<p></p>");
            // $("#text").append("<label for='mycheck'>"+"- "+message1+"</label>");
            // $("#text").append("<input type='checkbox' id='myCheck' onclick='myFunction()'>");
            $("#text").append("<a href='#'><div onclick='lineThrough()'>"+message1+"</div>"+"</a>")
            $("#text").append("<div>"+message3+" - "+message4+"</div>");
        }
    });
    
});