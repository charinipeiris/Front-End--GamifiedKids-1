
//=======================grade 1====================


function show(Page1) {
       var p1 = document.getElementById(Page1).getAttribute("id");
       console.log(p1);
       if (p1 == "Page1"){
              document.getElementById("Page1").style.display='block';
              document.getElementById("Page2").style.display='none'; 
              document.getElementById("Page3").style.display='none'; 
              document.getElementById("Page4").style.display='none'; 
       }
       else if (p1 == "Page2"){
              document.getElementById("Page1").style.display='none';
              document.getElementById("Page2").style.display='block'; 
              document.getElementById("Page3").style.display='none'; 
              document.getElementById("Page4").style.display='none'; 
       }
       else if (p1 == "Page3"){
              document.getElementById("Page1").style.display='none';
              document.getElementById("Page2").style.display='none'; 
              document.getElementById("Page3").style.display='block'; 
              document.getElementById("Page4").style.display='none'; 
       }
       else if (p1 == "Page4"){
              document.getElementById("Page1").style.display='none';
              document.getElementById("Page2").style.display='none'; 
              document.getElementById("Page3").style.display='none'; 
              document.getElementById("Page4").style.display='block'; 

       }
       else{

       }
     }

function play_intro(){
       var myAudio = new Audio('/assets/audio/intro_shapes.m4a');
       myAudio.play();
        }

function play_tri(){
       var myAudio = new Audio('/assets/audio/triangle_audio.m4a');
       myAudio.play();
                 }
function play_sq(){
       var myAudio = new Audio('/assets/audio/square_audio.m4a');
       myAudio.play();
        }
function play_rec(){
       var myAudio = new Audio('/assets/audio/rec_audio.m4a');
       myAudio.play();
         }
function play_c(){
        var myAudio = new Audio('/assets/audio/circle_audio.m4a');
        myAudio.play();
         }

// function popup_image() {
//        //  var image = $(this).attr('src','/assets/images/triangle.png');
//         w2popup.open({
//         title: 'Image',
//          body: '<div class=""><img src="/assets/images/yay_bunny.gif"></img></div>'
//                });
//            }


//Game - Circle

// $(document).ready(function(){
//        $(document).on('click',"#img2-1",function () {
//        var audio = document.getElementById("kids_say_yay");
//        if (audio.paused) audio.play();
//        else audio.pause();
//        $( "#popUp_right" ).show(); 
//               setTimeout(function() {
//               $( "#popUp_right" ).hide();
//                      }, 2000);
// });
// });
var total = 0;
function loadAnswer(imgid)
{

       var correct1 = "http://localhost:4200/assets/images/shape_sun.png";
       var correct2 = "http://localhost:4200/assets/images/shape_tree.png";
       var correct3 = "http://localhost:4200/assets/images/shape_tire.png";
       // console.log(imageLoading);
       if( ((document.getElementById("answer1")).src) == "http://localhost:4200/assets/images/trans.svg" ){
              (document.getElementById("answer1")).src = ((document.getElementById(imgid)).src);
              document.getElementById(imgid).style.pointerEvents = "none";
       }
       else if ( ((document.getElementById("answer2")).src) == "http://localhost:4200/assets/images/trans.svg")
       {
              (document.getElementById("answer2")).src = ((document.getElementById(imgid)).src);
              document.getElementById(imgid).style.pointerEvents = "none";

              var image1 = ((document.getElementById("answer1")).src);
              var image2 = ((document.getElementById("answer2")).src)
              if (image1 == correct1){
                     total = total + 1;
              }
              else if (image1 == correct2){
                     total = total + 1;
              }
              else if (image1 == correct3){
                     total= total + 1; 
              }
              else{
                     //no mark for first answer
              }

               if (image2 == correct1){
                     total = total + 1;
              }
              else if (image2 == correct2){
                     total = total + 1;
              }
              else if (image2 == correct3){
                     total= total + 1; 
              }
              else{
                     //no mark for second answer
              }
              document.getElementById("next1").style.visibility= "visible"; //to enable "NEXT" button
              marksArea.innerHTML = total;
              // document.getElementById(total).style.visibility="visible";
              for (i = 0; i < 9; i++) {
                    if( (document.getElementById(i).getAttribute("id")) == total){
                            document.getElementById(i).style.visibility="visible";
                    }
                    else{
                     document.getElementById(i).style.visibility="hidden";
                    }

                   }
       }
       else{

              // console.log("magula3");
              // document.getElementById("error").style.visibility= "visible";
       }


}



function loadAnswer2(imgid)
{

       var correct3 = "http://localhost:4200/assets/images/shape_triangle.png";
       var correct4 = "http://localhost:4200/assets/images/shape_triangle_1.png";

       // console.log(imageLoading);
       if( ((document.getElementById("answer3")).src) == "http://localhost:4200/assets/images/trans.svg" ){
              (document.getElementById("answer3")).src = ((document.getElementById(imgid)).src);
              document.getElementById(imgid).style.pointerEvents = "none";
       }
       else if ( ((document.getElementById("answer4")).src) == "http://localhost:4200/assets/images/trans.svg")
       {
              (document.getElementById("answer4")).src = ((document.getElementById(imgid)).src);
              document.getElementById(imgid).style.pointerEvents = "none";

              var image1 = ((document.getElementById("answer3")).src);
              var image2 = ((document.getElementById("answer4")).src)
              var sub_total = parseInt(document.getElementById("marksArea").innerHTML);
              if (image1 == correct3){
                     sub_total = sub_total + 1;
              }
              else if (image1 == correct4){
                     sub_total = sub_total + 1;
              }
              else{
                     //no mark for first answer
              }

               if (image2 == correct3){
                     sub_total = sub_total + 1;
              }
              else if (image2 == correct4){
                     sub_total = sub_total + 1;
              }
              else{
                     //no mark for second answer
              }

              document.getElementById("next2").style.visibility= "visible"; //to enable "NEXT" button
              marksArea.innerHTML = sub_total;
              // document.getElementById(sub_total).style.visibility="visible";
              for (i = 0; i < 9; i++) {
                     if( (document.getElementById(i).getAttribute("id")) == sub_total){
                             document.getElementById(i).style.visibility="visible";
                     }
                     else{
                      document.getElementById(i).style.visibility="hidden";
                     }
 
                    }
       }
       else{

              // console.log("magula3");
              // document.getElementById("error").style.visibility= "visible";
       }


}

function loadAnswer3(imgid)
{

       var correct5 = "http://localhost:4200/assets/images/shape_square.png";
       var correct6 = "http://localhost:4200/assets/images/shape_square_1.png";

       // console.log(imageLoading);
       if( ((document.getElementById("answer5")).src) == "http://localhost:4200/assets/images/trans.svg" ){
              (document.getElementById("answer5")).src = ((document.getElementById(imgid)).src);
              document.getElementById(imgid).style.pointerEvents = "none";
       }
       else if ( ((document.getElementById("answer6")).src) == "http://localhost:4200/assets/images/trans.svg")
       {
              (document.getElementById("answer6")).src = ((document.getElementById(imgid)).src);
              document.getElementById(imgid).style.pointerEvents = "none";

              var image1 = ((document.getElementById("answer5")).src);
              var image2 = ((document.getElementById("answer6")).src)
              var sub_total = parseInt(document.getElementById("marksArea").innerHTML);
              if (image1 == correct5){
                     sub_total = sub_total + 1;
              }
              else if (image1 == correct6){
                     sub_total = sub_total + 1;
              }
              else{
                     //no mark for first answer
              }

               if (image2 == correct5){
                     sub_total = sub_total + 1;
              }
              else if (image2 == correct6){
                     sub_total = sub_total + 1;
              }
              else{
                     //no mark for second answer
              }
              document.getElementById("next3").style.visibility= "visible"; //to enable "NEXT" button
              marksArea.innerHTML = sub_total;
              // document.getElementById(sub_total).style.visibility="visible";
              for (i = 0; i < 9; i++) {
                     if( (document.getElementById(i).getAttribute("id")) == sub_total){
                             document.getElementById(i).style.visibility="visible";
                     }
                     else{
                      document.getElementById(i).style.visibility="hidden";
                     }
 
                    }
       }
       else{

              // console.log("magula3");
              // document.getElementById("error").style.visibility= "visible";
       }


}


function loadAnswer4(imgid)
{

       var correct7 = "http://localhost:4200/assets/images/shape_rect.png";
       var correct8 = "http://localhost:4200/assets/images/shape_rect1.png";

       // console.log(imageLoading);
       if( ((document.getElementById("answer7")).src) == "http://localhost:4200/assets/images/trans.svg" ){
              (document.getElementById("answer7")).src = ((document.getElementById(imgid)).src);
              document.getElementById(imgid).style.pointerEvents = "none";
       }
       else if ( ((document.getElementById("answer8")).src) == "http://localhost:4200/assets/images/trans.svg")
       {
              (document.getElementById("answer8")).src = ((document.getElementById(imgid)).src);
              document.getElementById(imgid).style.pointerEvents = "none";

              var image1 = ((document.getElementById("answer7")).src);
              var image2 = ((document.getElementById("answer8")).src)
              var sub_total = parseInt(document.getElementById("marksArea").innerHTML);
              if (image1 == correct7){
                     sub_total = sub_total + 1;
              }
              else if (image1 == correct8){
                     sub_total = sub_total + 1;
              }
              else{
                     //no mark for first answer
              }

               if (image2 == correct7){
                     sub_total = sub_total + 1;
              }
              else if (image2 == correct8){
                     sub_total = sub_total + 1;
              }
              else{
                     //no mark for second answer
              }
              document.getElementById("final_button").style.visibility= "visible";
              marksArea.innerHTML = sub_total;
              // document.getElementById(sub_total).style.visibility="visible";
              for (i = 0; i < 9; i++) {
                     if( (document.getElementById(i).getAttribute("id")) == sub_total){
                             document.getElementById(i).style.visibility="visible";
                     }
                     else{
                      document.getElementById(i).style.visibility="hidden";
                     }
 
                    }
       }
       else{

              // console.log("magula3");
              // document.getElementById("error").style.visibility= "visible";
       }


}





$(document).ready(function(){
       $(document).on('click',"#question-circle",function () {
       var audio = document.getElementById("quest_audio1");
       if (audio.paused) audio.play();
       else audio.pause();
   });
});

$(document).ready(function(){
       $(document).on('click',"#question-triangle",function () {
       var audio = document.getElementById("quest_audio2");
       if (audio.paused) audio.play();
       else audio.pause();
   });
});

$(document).ready(function(){
       $(document).on('click',"#question-square",function () {
       var audio = document.getElementById("quest_audio3");
       if (audio.paused) audio.play();
       else audio.pause();
   });
});

$(document).ready(function(){
       $(document).on('click',"#question-rect",function () {
       var audio = document.getElementById("quest_audio4");
       if (audio.paused) audio.play();
       else audio.pause();
   });
});





//  $(document).ready(function(){
//        var box = document.getElementById('Page2');
//        var hari = isInViewport(box);
//        if (hari == true){
//               play_content1();
//        }
// });
              


//   $(document).ready(function(){
//        var box = document.getElementById('Page3');
//        var hari = isInViewport(box);
//        if (hari == true){
//               play_content2();
//        }  else{
//               play_content1();
//        }
//   });

  function isInViewport(element) {
       var rect = element.getBoundingClientRect();
       return (
           rect.top >= 0 &&
           rect.left >= 0 &&
           rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
           rect.right <= (window.innerWidth || document.documentElement.clientWidth)
       );
   }

// ----------------------------------------------------
//function for the stopwatch which tracks time spent on the game
function startgame_shape(){
document.getElementById("startdiv").style.visibility= "hidden";
startStop();
var last, diff;
var timeArray =[];

$( "#Page2" ).click(function( event)  {
       if ( last ) {
              diff = event.timeStamp - last;
              diff1 = (diff/1000).toFixed(2)
              timeArray.push(diff1);
       } 
       last = event.timeStamp;
       let max = parseFloat(timeArray[0]);
       document.getElementById("clickarray").innerHTML = max

       for (let i = 1; i < timeArray.length; i++) {
              let value = parseFloat(timeArray[i]);
              if (value > max){
                     max = value;
                     document.getElementById("clickarray").innerHTML = max
                     }
                         
              }
   });

}

function startgame_shape2(){
       document.getElementById("startdiv").style.visibility= "hidden";
       startStop();
       var last, diff;
       var timeArray =[];
       
       $( "#body_shapes2" ).click(function( event)  {
              if ( last ) {
                     diff = event.timeStamp - last;
                     diff1 = (diff/1000).toFixed(2)
                     timeArray.push(diff1);
              } 
              last = event.timeStamp;
              let max = parseFloat(timeArray[0]);
              document.getElementById("clickarray").innerHTML = max
       
              for (let i = 1; i < timeArray.length; i++) {
                     let value = parseFloat(timeArray[i]);
                     if (value > max){
                            max = value;
                            document.getElementById("clickarray").innerHTML = max
                            }
                                
                     }
          });
       
       }

       //for G2 L1 addition
       function startgame_shape3(){
              document.getElementById("startdiv").style.visibility= "hidden";
              startStop();
              var last, diff;
              var timeArray =[];
              
              $( "#page2-ad" ).click(function( event)  {
                     if ( last ) {
                            diff = event.timeStamp - last;
                            diff1 = (diff/1000).toFixed(2)
                            timeArray.push(diff1);
                     } 
                     last = event.timeStamp;
                     let max = parseFloat(timeArray[0]);
                     document.getElementById("clickarray").innerHTML = max
              
                     for (let i = 1; i < timeArray.length; i++) {
                            let value = parseFloat(timeArray[i]);
                            if (value > max){
                                   max = value;
                                   document.getElementById("clickarray").innerHTML = max
                                   }
                                       
                            }
                 });
              
              }

//for G2 L1 substraction
function startgame_shape4(){
       document.getElementById("startdiv").style.visibility= "hidden";
       startStop();
       var last, diff;
       var timeArray =[];
       
       $( "#page2-sub" ).click(function( event)  {
              if ( last ) {
                     diff = event.timeStamp - last;
                     diff1 = (diff/1000).toFixed(2)
                     timeArray.push(diff1);
              } 
              last = event.timeStamp;
              let max = parseFloat(timeArray[0]);
              document.getElementById("clickarray").innerHTML = max
       
              for (let i = 1; i < timeArray.length; i++) {
                     let value = parseFloat(timeArray[i]);
                     if (value > max){
                            max = value;
                            document.getElementById("clickarray").innerHTML = max
                            }
                                
                     }
          });
       
       }
//for G2 L2 shapes
       function startgame_shape5(){
              document.getElementById("startdiv").style.visibility= "hidden";
              startStop();
              var last, diff;
              var timeArray =[];
              
              $( "#PageMouse" ).click(function( event)  {
                     if ( last ) {
                            diff = event.timeStamp - last;
                            diff1 = (diff/1000).toFixed(2)
                            timeArray.push(diff1);
                     } 
                     last = event.timeStamp;
                     let max = parseFloat(timeArray[0]);
                     document.getElementById("clickarray").innerHTML = max
              
                     for (let i = 1; i < timeArray.length; i++) {
                            let value = parseFloat(timeArray[i]);
                            if (value > max){
                                   max = value;
                                   document.getElementById("clickarray").innerHTML = max
                                   }
                                       
                            }
                 });
              
              }


function startgame(){
       document.getElementById("startdiv").style.visibility= "hidden";
       startStop();
}



//Define vars to hold time values
let seconds = 0;
let minutes = 0;
let hours = 0;

//Define vars to hold "display" value
let displaySeconds = 0;
let displayMinutes = 0;
let displayHours = 0;

//Define var to hold setInterval() function
let interval = null;

//Define var to hold stopwatch status
let status = "stopped";

// //Stopwatch function (logic to determine when to increment next value, etc.)
function stopWatch(){

    seconds++;

    //Logic to determine when to increment next value
    if(seconds / 60 === 1){
        seconds = 0;
        minutes++;

        if(minutes / 60 === 1){
            minutes = 0;
            hours++;
        }

    }

    //If seconds/minutes/hours are only one digit, add a leading 0 to the value
    if(seconds < 10){
        displaySeconds = "0" + seconds.toString();
    }
    else{
        displaySeconds = seconds;
    }

    if(minutes < 10){
        displayMinutes = "0" + minutes.toString();
    }
    else{
        displayMinutes = minutes;
    }

    if(hours < 10){
        displayHours = "0" + hours.toString();
    }
    else{
        displayHours = hours;
    }

    //Display updated time values to user
    document.getElementById("display").innerHTML = displayHours + ":" + displayMinutes + ":" + displaySeconds;

}



function startStop(){

    if(status === "stopped"){

        //Start the stopwatch (by calling the setInterval() function)
        interval = window.setInterval(stopWatch, 1000);
        document.getElementById("startStop").innerHTML = "Stop";
        status = "started";

    }
    else{

        window.clearInterval(interval);
        document.getElementById("startStop").innerHTML = "Start";
        status = "stopped";

    }

}

//Function to reset the stopwatch
function reset(){

    window.clearInterval(interval);
    seconds = 0;
    minutes = 0;
    hours = 0;
    document.getElementById("display").innerHTML = "00:00:00";
    document.getElementById("startStop").innerHTML = "Start";

}

$(document).ready(function(){
       $(document).on('click',"#question-shapes1",function () {
       var audio = document.getElementById("quest_audio_shapes");
       if (audio.paused) audio.play();
       else audio.pause();
   });
});
