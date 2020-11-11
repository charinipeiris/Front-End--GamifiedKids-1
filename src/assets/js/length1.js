  //-------------Grade 1 -------------------
  
  //---------------------level 1-----------------------------
  
  //----------------length intro grade 1 level 1-----------------

  //Instruction audio
  $(document).ready(function(){
    $(document).on('click',"#click-1",function () {
    var audio = document.getElementById("click-audio-1");
    if (audio.paused) audio.play();
    else audio.pause();
});
});


  function testlength1(){
    document.f1.txt1.value="මම උසයි";
    document.f1.txt2.value="";
    var myAudio = new Audio('/assets/audio/tall.mp3');
    myAudio.play();
    }

    function testlength2(){
    document.f1.txt2.value="මම මිටියි";
    document.f1.txt1.value="";
    var myAudio = new Audio('/assets/audio/short.mp3');
    myAudio.play();
    }

    function testlength3(){
        document.f1.txt3.value="මම දිගයි";
        document.f1.txt4.value="";
        var myAudio = new Audio('/assets/audio/long.mp3');
        myAudio.play();
        }

         
    function testlength4(){
        document.f1.txt4.value="මම කොටයි";
        document.f1.txt3.value="";
        var myAudio = new Audio('/assets/audio/not_long.mp3');
        myAudio.play();
    }

             
    function testlength5(){
        document.f1.txt5.value="මම ලොකුයි";
        document.f1.txt6.value="";
        var myAudio = new Audio('/assets/audio/big.mp3');
        myAudio.play();
        }
             
    function testlength6(){
        document.f1.txt6.value="මම පොඩියි";
        document.f1.txt5.value="";
        var myAudio = new Audio('/assets/audio/small.mp3');
        myAudio.play();
        }

    
// -------game grade 1 level1----------------------------------


    //function to load next and previous pages Grade 1 Level 01 length game
    function testlgame(){
        var myAudio = new Audio('/assets/audio/lightweighted.m4a');
        myAudio.play();
        }

    //function to enable the "iwarai" button in Grade 1 Level 01 length game


  function enableSubmit_length(){
    var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (chk == 3){
         document.getElementById("submit").style.display="block";
         document.getElementById("arrow1").style.display="block";
          }
    else{
        document.getElementById("submit").style.display="none";
          }
          }

function testlgame(){
    document.f1.clip7.src="/assets/images/w.gif";
    document.getElementById("lkid1").style.pointerEvents ="none";
    document.getElementById("unmark1").checked = true; //kid gave wrong answer 
    enableSubmit_length();
    }
    
    function testlgame2(){
    document.f1.clip7.src="/assets/images/yay_bunny2.gif";
    document.getElementById("lkid2").style.pointerEvents ="none";
    document.getElementById("mark1").checked = true; //kid gave wrong answer 
    enableSubmit_length();
    }
    
    function testlgame3(){ 
    document.f1.clip8.src="/assets/images/yay_bunny2.gif";
    document.getElementById("tree2").style.pointerEvents ="none";
    document.getElementById("mark2").checked = true; //kid gave wrong answer 
    enableSubmit_length();
    }
    
    function testlgame4(){
    document.f1.clip8.src="/assets/images/w.gif";
    document.getElementById("tree1").style.pointerEvents ="none";
    document.getElementById("unmark2").checked = true; //kid gave wrong answer 
    enableSubmit_length();
    }
    
    function testlgame5(){
    document.f1.clip9.src="/assets/images/w.gif";
    document.getElementById("pen2").style.pointerEvents ="none";
    document.getElementById("unmark3").checked = true; //kid gave wrong answer 
    enableSubmit_length();
    }
    
    function testlgame6(){
    document.f1.clip9.src="/assets/images/yay_bunny2.gif";
    document.getElementById("pen1").style.pointerEvents ="none";
    document.getElementById("mark3").checked = true; //kid gave wrong answer 
    enableSubmit_length();
    }


//Audio of the three questions 
    $(document).ready(function(){
        $(document).on('click',"#question-length-1",function () {
        var audio = document.getElementById("quest_audio_length1");
        if (audio.paused) audio.play();
        else audio.pause();
    });
 });

 $(document).ready(function(){
    $(document).on('click',"#question-length-2",function () {
    var audio = document.getElementById("quest_audio_length2");
    if (audio.paused) audio.play();
    else audio.pause();
    });
});

$(document).ready(function(){
    $(document).on('click',"#question-length-3",function () {
    var audio = document.getElementById("quest_audio_length3");
    if (audio.paused) audio.play();
    else audio.pause();
    });
});




    //=========================Grade 1 Level 2===============

    //=====fucntion to laod next and previous pages level 2===========

function showpages_length(page){
    var p1 = document.getElementById(page).getAttribute("id");
    if (p1=="page1-length"){	
        document.getElementById("page1-length").style.display='block';	
        document.getElementById("page2-length").style.display='none'; 	
        document.getElementById("page3-length").style.display='none'; 
        document.getElementById("page4-length").style.display='none'; 	
    }
    else if (p1=="page2-length"){
        document.getElementById("page1-length").style.display='none';	
        document.getElementById("page2-length").style.display='block'; 	
        document.getElementById("page3-length").style.display='none'; 
        document.getElementById("page4-length").style.display='none'; 
        }
   else if (p1=="page3-length"){
    document.getElementById("page1-length").style.display='none';	
    document.getElementById("page2-length").style.display='none'; 	
    document.getElementById("page3-length").style.display='block';
    document.getElementById("page4-length").style.display='none';  
   }	
   else if(p1=="page4-length"){
    document.getElementById("page1-length").style.display='none';	
    document.getElementById("page2-length").style.display='none'; 	
    document.getElementById("page4-length").style.display='block'; 
    document.getElementById("page3-length").style.display='none'; 
   }	
        

}

// function startgame_length(){
//     document.getElementById("startdiv").style.visibility= "hidden";
//     document.getElementById("time-back").style.display="block";
//     startStop();
// }


function startgame_length(){
    document.getElementById("startdiv").style.visibility= "hidden";
    document.getElementById("time-back").style.display="block";
    startStop();
    var last, diff;
    var timeArray =[];
    
    $( "#page2-lengths" ).click(function( event)  {
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
                        //  console.log(max);
                         }
                             
                  }

       });

       $( "#page3-lengths").click(function( event)  {
        
        if ( last ) {
               diff = event.timeStamp - last;
               diff1 = (diff/1000).toFixed(2)
               timeArray.push(diff1);
        }
        last = event.timeStamp;
         let max = document.getElementById("clickarray").innerHTML
        document.getElementById("clickarray").innerHTML = max
 
        for (let i = 1; i < timeArray.length; i++) {
               let value = parseFloat(timeArray[i]);
               if (value > max){
                      max = value;
                      document.getElementById("clickarray").innerHTML = max
                    //   console.log(max)
                      }
                          
               }
    });
    
    }

    //For G1 L2 length
    function startgame_length1(){
        document.getElementById("startdiv").style.visibility= "hidden";
        document.getElementById("time-back").style.display="block";
        startStop();
        var last, diff;
        var timeArray =[];
        
        $( "#page3-length" ).click(function( event)  {
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
                            //  console.log(max);
                             }
                                 
                      }
    
           });
    
           $( "#page4-length").click(function( event)  {
            
            if ( last ) {
                   diff = event.timeStamp - last;
                   diff1 = (diff/1000).toFixed(2)
                   timeArray.push(diff1);
            }
            last = event.timeStamp;
             let max = document.getElementById("clickarray").innerHTML
            document.getElementById("clickarray").innerHTML = max
     
            for (let i = 1; i < timeArray.length; i++) {
                   let value = parseFloat(timeArray[i]);
                   if (value > max){
                          max = value;
                          document.getElementById("clickarray").innerHTML = max
                        //   console.log(max)
                          }
                              
                   }
        });
        
        }

    //-----------Length intro - Level2 - grade 1 -------------------------------

    function testweight1(){
        document.f1.txt7.value="මම බරින් වැඩියි";
        document.f1.txt8.value="";
        var myAudio = new Audio('/assets/audio/heavyweighted.m4a');
        myAudio.play();
        }
             
    function testweight2(){
        document.f1.txt8.value="මම බරින් අඩුයි";
        document.f1.txt7.value="";
        var myAudio = new Audio('/assets/audio/lightweighted.m4a');
        myAudio.play();
        }

    function testweight3(){
        document.f2.txt9.value="මගේ වතුර ප්‍රමාණය අඩුයි";
        document.f2.txt10.value="";
        var myAudio = new Audio('/assets/audio/less-volume.m4a');
        myAudio.play();
        }
                 
    function testweight4(){
        document.f2.txt10.value="මගේ වතුර ප්‍රමාණය වැඩියි";
        document.f2.txt9.value="";
        var myAudio = new Audio('/assets/audio/more-volume.m4a');
        myAudio.play();
        }

        //-----------length game grade 1 level 2------------------

      
        function test1_len()
        {
        document.f3.rw1.src="/assets/images/yay_bunny2.gif";
        document.getElementById("a2").style.pointerEvents = "none";
        document.getElementById("a1").style.pointerEvents = "none";
        document.getElementById("mark1").checked = true; //kid gave right answer 
        enableNext_lengthG1L2();


        }
        function test2_len()
        {
        document.f3.rw1.src="/assets/images/w.gif";
        document.getElementById("a5").style.pointerEvents = "none";
        document.getElementById("a2").style.pointerEvents = "none";
        document.getElementById("unmark1").checked = true; //kid gave wrong answer 
        enableNext_lengthG1L2();
    
        }
    
        function test3_len()
        {
        document.f3.rw1.src="/assets/images/w.gif";
        document.getElementById("a1").style.pointerEvents = "none";
        document.getElementById("a5").style.pointerEvents = "none";
        document.getElementById("unmark1").checked = true; //kid gave wrong answer 
        enableNext_lengthG1L2();

        }
        
        function test4_len()
        {
        document.f3.rw2.src="/assets/images/w.gif";
        document.getElementById("b2").style.pointerEvents = "none";
        document.getElementById("b5").style.pointerEvents = "none";
        document.getElementById("unmark2").checked = true; //kid gave right answer 
        enableNext_lengthG1L2();
    
        
        }
        function test5_len()
        {
    
        document.f3.rw2.src="/assets/images/yay_bunny2.gif";
        document.getElementById("b1").style.pointerEvents = "none";
        document.getElementById("b5").style.pointerEvents = "none";
        document.getElementById("mark2").checked = true; //kid gave wrong answer 
        enableNext_lengthG1L2();
        }
    
        function test6_len()
        {
        document.f3.rw2.src="/assets/images/w.gif";
        document.getElementById("b1").style.pointerEvents = "none";
        document.getElementById("b2").style.pointerEvents = "none";
        document.getElementById("unmark2").checked = true; //kid gave wrong answer 
        enableNext_lengthG1L2()();
        }
        
        function test7_len()
        {
        document.f4.rw1.src="/assets/images/yay_bunny2.gif";
        document.getElementById("a2x").style.pointerEvents = "none";
        document.getElementById("a1x").style.pointerEvents = "none";
        document.getElementById("mark3").checked = true; //kid gave right answer 
        enableSubmit_lengthG1L2();


        }
        function test8_len()
        {
        document.f4.rw1.src="/assets/images/w.gif";
        document.getElementById("a5x").style.pointerEvents = "none";
        document.getElementById("a2x").style.pointerEvents = "none";
        document.getElementById("unmark3").checked = true; //kid gave wrong answer 
        enableSubmit_lengthG1L2();
    
        }
    
        function test9_len()
        {
        document.f4.rw1.src="/assets/images/w.gif";
        document.getElementById("a1x").style.pointerEvents = "none";
        document.getElementById("a5x").style.pointerEvents = "none";
        document.getElementById("unmark3").checked = true; //kid gave wrong answer 
        enableSubmit_lengthG1L2();
        }
        
        function test10_len()
        {
        document.f4.rw2.src="/assets/images/w.gif";
        document.getElementById("b2x").style.pointerEvents = "none";
        document.getElementById("b5x").style.pointerEvents = "none";
        document.getElementById("unmark4").checked = true; //kid gave right answer 
        enableSubmit_lengthG1L2();
        
        }
        function test11_len()
        {
    
        document.f4.rw2.src="/assets/images/yay_bunny2.gif";
        document.getElementById("b1x").style.pointerEvents = "none";
        document.getElementById("b5x").style.pointerEvents = "none";
        document.getElementById("mark4").checked = true; //kid gave wrong answer 
        enableSubmit_lengthG1L2();
        }
    
        function test12_len()
        {
        document.f4.rw2.src="/assets/images/w.gif";
        document.getElementById("b1x").style.pointerEvents = "none";
        document.getElementById("b2x").style.pointerEvents = "none";
        document.getElementById("unmark4").checked = true; //kid gave wrong answer 
        enableSubmit_lengthG1L2();
        }

        function enableNext_lengthG1L2(){
            var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
            if (chk == 2){
                 document.getElementById("next-length").style.display="block";
                  }
            else{
                document.getElementById("next-length").style.display="none";
                  }
                  }

function enableSubmit_lengthG1L2(){
    var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
    console.log(chk);
    if (chk == 4){
         document.getElementById("final_button").style.display="block";
         document.getElementById("arrow1").style.display="block";
        }
    else{
        document.getElementById("final_button").style.display="none";
         }
        }

//Audio of the four questions 
$(document).ready(function(){
    $(document).on('click',"#question-big",function () {
    var audio = document.getElementById("quest_audio_big");
    if (audio.paused) audio.play();
    else audio.pause();
    });
});

$(document).ready(function(){
    $(document).on('click',"#question-big-2",function () {
    var audio = document.getElementById("quest_audio_big_2");
    if (audio.paused) audio.play();
    else audio.pause();
    });
});

$(document).ready(function(){
    $(document).on('click',"#question-big-3",function () {
    var audio = document.getElementById("quest_audio_big_3");
    if (audio.paused) audio.play();
    else audio.pause();
    });
});

$(document).ready(function(){
    $(document).on('click',"#question-big-4",function () {
    var audio = document.getElementById("quest_audio_big_4");
    if (audio.paused) audio.play();
    else audio.pause();
    });
});


//===============================Grade 2 - Level 1================================

//Audio of the question 1
$(document).ready(function(){
    $(document).on('click',"#question-length-g2l1",function () {
    var audio = document.getElementById("quest_audio_g2l1");
    if (audio.paused) audio.play();
    else audio.pause();
    });
});

//Audio of the question 2
$(document).ready(function(){
    $(document).on('click',"#question-length-g2l1-2",function () {
    var audio = document.getElementById("quest_audio_g2l1_2");
    if (audio.paused) audio.play();
    else audio.pause();
    });
});


function showpages_lengths(page){
    var p1 = document.getElementById(page).getAttribute("id");
    if (p1=="page1-lengths"){	
        document.getElementById("page1-lengths").style.display='block';	
        document.getElementById("page2-lengths").style.display='none'; 	
        document.getElementById("page3-lengths").style.display='none'; 
     
    }
    else if (p1=="page2-lengths"){
        document.getElementById("page1-lengths").style.display='none';	
        document.getElementById("page2-lengths").style.display='block'; 	
        document.getElementById("page3-lengths").style.display='none'; 
      
        }
   else if (p1=="page3-lengths"){
    document.getElementById("page1-lengths").style.display='none';	
    document.getElementById("page2-lengths").style.display='none'; 	
    document.getElementById("page3-lengths").style.display='block';
  
   }	
 
}

function test1_len2()
{
document.f1.clip1.src="/assets/images/q4.JPG";
document.f1.brown.src="/assets/images/trans.svg";
document.f1.red.src="/assets/images/q5.JPG";
document.f1.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("a10").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; //kid gave right answer 
enableNext_lengthG1L2();


}
function test2_len2()
{
document.f1.clip1.src="/assets/images/q5.JPG";
document.f1.red.src="/assets/images/trans.svg";
document.f1.brown.src="/assets/images/q4.JPG";
document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("a5").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave wrong answer 
enableNext_lengthG1L2();
}

function test3_len2()
{
document.f1.clip2.src="/assets/images/q5.JPG";
document.f1.rect.src="/assets/images/trans.svg";
document.f1.sqr.src="/assets/images/q6.JPG";
document.f1.rw2.src="/assets/images/yay_bunny2.gif";
document.getElementById("b5").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; //kid gave right answer 
enableNext_lengthG1L2();


}
function test4_len2()
{
document.f1.clip2.src="/assets/images/q6.JPG";
document.f1.sqr.src="/assets/images/trans.svg";
document.f1.rect.src="/assets/images/q5.JPG";
document.f1.rw2.src="/assets/images/w.gif";
document.getElementById("b2").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave wrong answer 
enableNext_lengthG1L2();

}
   
function test5_len2()
{
document.f2.clip1.src="/assets/images/q6.JPG";
document.f2.brown.src="/assets/images/trans.svg";
document.f2.red.src="/assets/images/q7.JPG";
document.f2.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("a109").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; //kid gave right answer 
enableSubmit_lengthG1L2();

}
function test6_len2()
{
document.f2.clip1.src="/assets/images/q7.JPG";
document.f2.red.src="/assets/images/trans.svg";
document.f2.brown.src="/assets/images/q6.JPG";
document.f2.rw1.src="/assets/images/w.gif";
document.getElementById("a59").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave wrong answer 
enableSubmit_lengthG1L2();
}

function test7_len2()
{
document.f2.clip2.src="/assets/images/q5.JPG";
document.f2.rect.src="/assets/images/trans.svg";
document.f2.sqr.src="/assets/images/q4.JPG";
document.f2.rw2.src="/assets/images/w.gif";
document.getElementById("b59").style.pointerEvents = "none";
document.getElementById("unmark4").checked = true; //kid gave right answer 
enableSubmit_lengthG1L2();
}

function test8_len2(){
document.f2.clip2.src="/assets/images/q4.JPG";
document.f2.sqr.src="/assets/images/trans.svg";
document.f2.rect.src="/assets/images/q5.JPG";
document.f2.rw2.src="/assets/images/yay_bunny2.gif";
document.getElementById("b29").style.pointerEvents = "none";
document.getElementById("mark4").checked = true; //kid gave wrong answer 
enableSubmit_lengthG1L2();

}

//--------------------grade 2 level 2 length----------------------/

//Audio of the question
$(document).ready(function(){
    $(document).on('click',"#question-volume",function () {
    var audio = document.getElementById("quest_audio_volume");
    if (audio.paused) audio.play();
    else audio.pause();
    });
});


function test1_len2x()
{
document.f1.clip1.src="/assets/images/q4.JPG";
document.f1.r4.src="/assets/images/trans.svg";
document.f1.r5.src="/assets/images/q5.JPG";
document.f1.r3.src="/assets/images/q3.JPG";

document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("r5").style.pointerEvents = "none";
document.getElementById("r3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave right answer 
enableSubmit_length();

}
function test2_len2x()
{
document.f1.clip1.src="/assets/images/q5.JPG";
document.f1.r5.src="/assets/images/trans.svg";
document.f1.r4.src="/assets/images/q4.JPG";
document.f1.r3.src="/assets/images/q3.JPG";

document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("r4").style.pointerEvents = "none";
document.getElementById("r3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave wrong answer 
enableSubmit_length();
}

function test3_len2x()
{
document.f1.clip1.src="/assets/images/q3.JPG";
document.f1.r3.src="/assets/images/trans.svg";
document.f1.r4.src="/assets/images/q4.JPG";
document.f1.r5.src="/assets/images/q5.JPG";

document.f1.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("r5").style.pointerEvents = "none";
document.getElementById("r4").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; //kid gave right answer 
enableSubmit_length();
}
//-------

function test4_len2x()
{
document.f1.clip2.src="/assets/images/q5.JPG";
document.f1.r51.src="/assets/images/trans.svg";
document.f1.r61.src="/assets/images/q6.JPG";
document.f1.r71.src="/assets/images/q7.JPG";

document.f1.rw2.src="/assets/images/yay_bunny2.gif";
document.getElementById("r61").style.pointerEvents = "none";
document.getElementById("r71").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; //kid gave wrong answer 
enableSubmit_length();

}
   
function test5_len2x()
{
document.f1.clip2.src="/assets/images/q6.JPG";
document.f1.r61.src="/assets/images/trans.svg";
document.f1.r51.src="/assets/images/q5.JPG";
document.f1.r71.src="/assets/images/q7.JPG";

document.f1.rw2.src="/assets/images/w.gif";
document.getElementById("r51").style.pointerEvents = "none";
document.getElementById("r71").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave right answer 
enableSubmit_length();

}
function test6_len2x()
{
document.f1.clip2.src="/assets/images/q7.JPG";
document.f1.r71.src="/assets/images/trans.svg";
document.f1.r61.src="/assets/images/q6.JPG";
document.f1.r51.src="/assets/images/q5.JPG";

document.f1.rw2.src="/assets/images/w.gif";
document.getElementById("r61").style.pointerEvents = "none";
document.getElementById("r51").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave wrong answer 
enableSubmit_length();
}
//-------------------------

function test7_len2x()
{
document.f1.clip3.src="/assets/images/q11.JPG";
document.f1.r112.src="/assets/images/trans.svg";
document.f1.r82.src="/assets/images/q8.JPG";
document.f1.r122.src="/assets/images/q12.JPG";

document.f1.rw3.src="/assets/images/w.gif";
document.getElementById("r82").style.pointerEvents = "none";
document.getElementById("r122").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave right answer 
enableSubmit_length();
}


function test8_len2x()
{
document.f1.clip3.src="/assets/images/q8.JPG";
document.f1.r82.src="/assets/images/trans.svg";
document.f1.r112.src="/assets/images/q11.JPG";
document.f1.r122.src="/assets/images/q12.JPG";

document.f1.rw3.src="/assets/images/w.gif";
document.getElementById("r112").style.pointerEvents = "none";
document.getElementById("r122").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave right answer 
enableSubmit_length();
}


function test9_len2x()
{
document.f1.clip3.src="/assets/images/q12.JPG";
document.f1.r122.src="/assets/images/trans.svg";
document.f1.r82.src="/assets/images/q8.JPG";
document.f1.r112.src="/assets/images/q11.JPG";

document.f1.rw3.src="/assets/images/yay_bunny2.gif";
document.getElementById("r112").style.pointerEvents = "none";
document.getElementById("r82").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; //kid gave right answer 
enableSubmit_length();

}