$(document).ready(function(){

    $(".create").click(function(){
        openDialog();
    });

    $(".join").click(function(){
        openDialog2();
    });

    $(".close_button").click(function(){
        closeDialog();
    })

    $(".close_button2").click(function(){
        closeDialog2();
    })

    $(".close_guide_button").click(function(){
        closeBubble();
    });

    $(".next").click(function(){
        closeBubble();
        document.getElementById('fade1').style.display='block';
        document.getElementById('light4').style.display='block';
        $(".rabbit2").css("display", "block");
    });

    $(".next2").click(function(){
        closeBubble2();
        document.getElementById('fade1').style.display='block';
        document.getElementById('light5').style.display='block';
        $(".rabbit3").css("display", "block");
    });

    $(".next3").click(function(){
        closeBubble3();
        document.getElementById('fade1').style.display='block';
        document.getElementById('light6').style.display='block';
        $(".rabbit4").css("display", "block");
    });

    $(".next4").click(function(){
        closeBubble4();
        document.getElementById('fade1').style.display='block';
        document.getElementById('light7').style.display='block';
        $(".rabbit5").css("display", "block");
    });

    $(".close_guide_button2").click(function(){
        closeBubble2();
    });

    $(".close_guide_button3").click(function(){
        closeBubble3();
    });

    $(".close_guide_button4").click(function(){
        closeBubble4();
    });

    $(".end").click(function(){
        closeBubble5();
    });

    $(".back").click(function(){
        closeBubble2();
        openBubble();
    });

    $('.back2').click(function(){
        closeBubble3();
        openBubble2();
    });

    $('.back3').click(function(){
        closeBubble4();
        openBubble3();
    });

    $('.repeat').click(function(){
        closeBubble5();
        openBubble();
    });

    function openDialog(){
        document.getElementById('light').style.display='block';
        document.getElementById('fade').style.display='block';
    }

    function openDialog2(){
        document.getElementById('light2').style.display='block';
        document.getElementById('fade').style.display='block';
    }

    function closeDialog(){
        document.getElementById('light').style.display='none';
        document.getElementById('fade').style.display='none';
    }

    function closeDialog2(){
        document.getElementById('light2').style.display='none';
        document.getElementById('fade').style.display='none';
    }

    function openBubble(){
        document.getElementById('light3').style.display='block';
        document.getElementById('fade1').style.display='block';
        $(".rabbit").css("display", "block");
    }

    function openBubble2(){
        document.getElementById('light4').style.display='block';
        document.getElementById('fade1').style.display='block';
        $(".rabbit2").css("display", "block");
    }

    function openBubble3(){
        document.getElementById('light5').style.display='block';
        document.getElementById('fade1').style.display='block';
        $(".rabbit3").css("display", "block");
    }


    function closeBubble(){
        document.getElementById('light3').style.display='none';
        document.getElementById('fade1').style.display='none';
        $(".rabbit").css("display", "none");
    }

    function closeBubble2(){
        document.getElementById('light4').style.display='none';
        document.getElementById('fade1').style.display='none';
        $(".rabbit2").css("display", "none");
    }

    function closeBubble3(){
        document.getElementById('light5').style.display='none';
        document.getElementById('fade1').style.display='none';
        $(".rabbit3").css("display", "none");
    }

    function closeBubble4(){
        document.getElementById('light6').style.display='none';
        document.getElementById('fade1').style.display='none';
        $(".rabbit4").css("display", "none");
    }

    function closeBubble5(){
        document.getElementById('light7').style.display='none';
        document.getElementById('fade1').style.display='none';
        $(".rabbit5").css("display", "none");
    }

    //display chat
    var chatdisplay = 0
    $('.chat').click(function(){
        if (chatdisplay == 0) {
            document.getElementById('light10').style.display='block';
            var people = localStorage.getItem("amount");
            var roomID = localStorage.getItem("roomID");
            $(".room_size").html("Room Size: " + people);
            $(".room_id").html("Room ID: " + "0" + roomID);
            chatdisplay = 1;
        }else if(chatdisplay == 1){
            document.getElementById('light10').style.display='none';
            chatdisplay = 0;
        }
        
    });


    //get room type
    //set duration
    var time;
    $('.confirm_create').click(function(){
        time = $('#time').val();
        localStorage.setItem("time", time);
        var amount = $(".amount").val();
        localStorage.setItem("amount", amount);
        var roomId = Math.floor(100 + Math.random() * 900);
        localStorage.setItem("roomID", roomId);
    });

    $('.confirm_create').click(function(){
        var private =  $('.private').is(':checked');
        console.log(private);
        if(private){
            window.location = "main.html";
        }
    })

    //change duration
    $('.confirm').click(function(){
        time = $('#increasetime').val();
        localStorage.setItem("time", time);
        $(".selected_time").html(time);
        countDownTime = time;
        closeClock();
    });

    //get time
    if(localStorage.getItem("time") != null){
        var selected_time = localStorage.getItem("time");
        console.log(selected_time);
        $(".selected_time").html(selected_time);
    }

    //countdown function
    var countDownTime = localStorage.getItem("time");
    var interval = setInterval(function(){
        if(countDownTime == null){
            return;
        }
        var timer = countDownTime.split(':');
        var hours = parseInt(timer[0], 10);
        var minutes = parseInt(timer[1], 10);
        var seconds = parseInt(timer[2], 10);
        --seconds;
        minutes = (seconds < 0) ? --minutes : minutes;
        hours = (minutes < 0) ? --hours : hours;
        hours = (hours < 10)? '0' + hours : hours;
        minutes = (minutes < 0) ? 59 : minutes;
        minutes = (minutes < 10)? '0' + minutes : minutes;
        if(hours < 0) clearInterval(interval);
        seconds = (seconds < 0) ? 59 : seconds;
        seconds = (seconds < 10)? '0' + seconds : seconds;
        $(".selected_time").html(hours + ':' + minutes + ':' + seconds);
        countDownTime = hours + ":" + minutes + ":" + seconds;
        localStorage.setItem("time", countDownTime);
    }, 1000);

    //mic close
    var off = 0;
    $("#micro").click(function(){
        if(off == 0){
            $(this).attr("src", "Images/close_mic.png");
            $(this).css("width", "40px");
            $(this).css("margin-left", "20px");
            $(this).css("margin-right", "20px");
            $(this).addClass("micOff");
            off = 1;
        }else if(off == 1){
            $(this).attr("src", "Images/micro.png");
            $(this).css("width", "60px");
            $(this).css("margin", "10px");
            $(this).css("height", "60px");
            off = 0;
        }
        
    });

    //set camera
    var cam = 0;
    var newVideo;
    $(".camera").click(function(){
        if(cam == 0){
            document.getElementById('light8').style.display='block';
            document.getElementById('fade1').style.display='block';
            navigator.mediaDevices.getUserMedia({
                video: true
                })
                .then(stream => {
                window.localStream = stream;
                video.srcObject = stream;
                newVideo = stream;
                })
                .catch((err) => {
                console.log(err);
                });
            cam = 1;
        }else if(cam == 1){
            $("#video").attr("src", "Images/camera_close.png");
            localStream.getVideoTracks()[0].stop();
            video.src = '';
            video.srcObject = null;
            video2.srcObject = null;
            cam = 0;
            $("#videoElement2").removeClass("videoShadow");
        }
    });

    //close popup preview 
    function closePreview(){
        document.getElementById('light8').style.display='none';
        document.getElementById('fade1').style.display='none';
        cam = 0;
    }

    $(".close_guide_button5").click(function(){
        closePreview();
        $("#video").attr("src", "Images/camera_close.png");
        cam = 0;
    });

    //set new study duration time
    $(".clock").click(function(){
        document.getElementById('light9').style.display='block';
    });

    //close popup
    function closeClock(){
        document.getElementById('light9').style.display='none';
    }

    $(".close_guide_button6").click(function(){
        closeClock();
    });

    


    const video = document.querySelector('#videoElement');
  
    const captureVideoButton = document.querySelector('.camera');
    const stopVideoButton = document.querySelector('.close_guide_button5');
  
    //Capture Video
    // $(captureVideoButton).click(function(){
    //     navigator.mediaDevices.getUserMedia({
    //         video: true
    //         })
    //         .then(stream => {
    //         window.localStream = stream;
    //         video.srcObject = stream;
    //         })
    //         .catch((err) => {
    //         console.log(err);
    //         });
    // });
    // captureVideoButton.onclick = function() {
    //     navigator.mediaDevices.getUserMedia({
    //     video: true
    //     })
    //     .then(stream => {
    //     window.localStream = stream;
    //     video.srcObject = stream;
    //     })
    //     .catch((err) => {
    //     console.log(err);
    //     });
    // };
    
    stopVideoButton.onclick = function() {
        localStream.getVideoTracks()[0].stop();
        video.src = '';
    };

    // const video2 = document.querySelector('#videoElement2');
    var video2 = document.querySelector('#videoElement2');

    var constraints = { video: {width: 240,height: 180}};
    $(".turnOn").click(function(){
        closePreview();
        $("#video").attr("src", "Images/video.png");
        $(".camera").addClass("on");
        $(".camera").removeClass("camera");
        cam = 1;
        video2.srcObject = newVideo;
        video2.onloadedmetadata = function(e) {
            video2.play();
        };
        $("#videoElement2").addClass("videoShadow");

    //     navigator.mediaDevices.getUserMedia(constraints).then(function(mediaStream) {
    //     video2.srcObject = newVideo;
        
    //     // $("#videoElement2").css({"border-color": "grey", "border-width" : "1px", "border-style" : "solid"});
        // $("#videoElement2").addClass("videoShadow");
    // });

    });
    
    // $(window).unload(function(){
    //     localStorage.removeItem("time");
    // });

    window.onbeforeunload = function(e){
        localStorage.removeItem("time");
        localStorage.removeItem("roomID");
        localStorage.removeItem("amount");
    };

    //input message
    $("#message").on('keypress', function(e){
        if(e.which === 13){
            var inputMessage = $("#message").val();
            var dt = new Date();
            var seconds = dt.getSeconds();
            var minutes = dt.getSeconds();
            var hours = dt.getHours();
            if (seconds < 10) {
                seconds = '0' + seconds;
            }else if(minutes < 10){
                minutes = '0' + minutes;
            }else if (hours < 10) {
                hours = '0' + hours;
            }
            var time = hours + ":" + minutes + ":" + seconds;
            $(".textfield").append("<P>" + time + " Helen: " + inputMessage);
            e.preventDefault();
            e.currentTarget.value = "";
        }
    });

});