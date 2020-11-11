//========================Grade 1 level 1===============================================

//========================== counting===========================

///------------------page transition counting game grade 1 level1


function showpages_count_intro(page){
    var p1 = document.getElementById(page).getAttribute("id");

    if (p1=="page1-count_intro"){
        document.getElementById("page1-count_intro").style.display='block';
        document.getElementById("page2-count_intro").style.display='none'; 
        
    }
    else if (p1=="page2-count_intro"){
        document.getElementById("page1-count_intro").style.display='none';
        document.getElementById("page2-count_intro").style.display='block'; 

    }   
  
}

//-----------counting intro(1-5) level 1 grade 1---------------

function testcountintro1(){
    document.f1.txt1.value="එක";
    document.f2.clip1.src="/assets/images/1.gif";
    var myAudio = new Audio('/assets/audio/a1.aac');
    myAudio.play();
}

function testcountintro2(){
    document.f1.txt1.value="දෙක";
    document.f2.clip1.src="/assets/images/2.gif";
    var myAudio = new Audio('/assets/audio/a2.aac');
    myAudio.play();
}

function testcountintro3(){
    document.f1.txt1.value="තුන";
    document.f2.clip1.src="/assets/images/3.gif";
    var myAudio = new Audio('/assets/audio/a3.aac');
    myAudio.play();
}

function testcountintro4(){
    document.f1.txt1.value="හතර";
    document.f2.clip1.src="/assets/images/4.gif";
    var myAudio = new Audio('/assets/audio/a4.aac');
    myAudio.play();
}

function testcountintro5(){
    document.f1.txt1.value="පහ";
    document.f2.clip1.src="/assets/images/5.gif";
    var myAudio = new Audio('/assets/audio/a5.aac');
    myAudio.play();
}
//---------------- counting game - garade 1 level 1--------------//

function testcounts1game(){
    document.f1.txt1.value="Wrong";
   // document.f1.clip2.src="/assets/images/blank.png";
    //document.f1.clip7.src="/assets/images/w.gif";
    document.getElementById("lkid1a").style.pointerEvents ="none";
    document.getElementById("unmark1").checked = true; //kid gave wrong answer 
    enableNext_count();
    }
    
    function testcounts1game2(){
    document.f1.txt1.value="Correct!!";
    //document.f1.clip1.src="/assets/images/blank.png"; 
    //document.f1.clip7.src="/assets/images/yay_bunny2.gif";
    document.getElementById("lkid2a").style.pointerEvents ="none";
    document.getElementById("mark1").checked = true; //kid gave wrong answer 
    enableNext_count();
    
    }
    
    function testcounts1game3(){ 
    document.f1.txt2.value="Correct!!";
    //document.f1.clip4.src="/assets/images/blank.png";
    //document.f1.clip8.src="/assets/images/yay_bunny2.gif";
    document.getElementById("tree2a").style.pointerEvents ="none";
    document.getElementById("mark2").checked = true; //kid gave wrong answer 
    enableNext_count();
    }
    
    function testcounts1game4(){
    document.f1.txt2.value="Wrong";
    //document.f1.clip3.src="/assets/images/blank.png"; 
   // document.f1.clip4. src="/assets/images/line1.gif";
    //document.f1.clip8.src="/assets/images/w.gif";
    document.getElementById("tree1a").style.pointerEvents ="none";
    document.getElementById("unmark2").checked = true; //kid gave wrong answer 
    enableNext_count();
    }
    
    function testcounts1game5(){
    document.f1.txt3.value="Wrong";
    //document.f1.clip6.src="/assets/images/blank.png";
    // document.f1.clip5. src="/assets/images/line1.gif";
   // document.f1.clip9.src="/assets/images/w.gif";
    document.getElementById("pen2a").style.pointerEvents ="none";
    document.getElementById("unmark3").checked = true; //kid gave wrong answer 
    enableNext_count();
    }
    
    function testcounts1game6(){
    document.f1.txt3.value="Correct!!";
    //document.f1.clip5.src="/assets/images/blank.png"; 
    //document.f1.clip6. src="/assets/images/wow.gif";
    //.f1.clip9.src="/assets/images/yay_bunny2.gif";
    document.getElementById("pen1a").style.pointerEvents ="none";
    document.getElementById("mark3").checked = true; //kid gave wrong answer 
    enableNext_count();
    }

    function testcounts1game7(){
        document.f2.txt1.value="Wrong";
        //document.f2.clip2.src="/assets/images/blank.png";
        //document.f2.clip71.src="/assets/images/w.gif";
        document.getElementById("lkid1ab").style.pointerEvents ="none";
        document.getElementById("unmark4").checked = true; //kid gave wrong answer 
        enableSubmit_count1();
        }
        
        function testcounts1game8(){
        document.f2.txt1.value="Correct!!";
        //document.f2.clip1.src="/assets/images/blank.png"; 
       // document.f2.clip71.src="/assets/images/yay_bunny2.gif";
        document.getElementById("lkid2ab").style.pointerEvents ="none";
        document.getElementById("mark4").checked = true; //kid gave wrong answer 
        enableSubmit_count1();
        }
        
        function testcounts1game9(){ 
        document.f2.txt2.value="Correct!!";
        //document.f2.clip4.src="/assets/images/blank.png";
       // document.f2.clip81.src="/assets/images/yay_bunny2.gif";
        document.getElementById("tree2ab").style.pointerEvents ="none";
        document.getElementById("mark5").checked = true; //kid gave wrong answer 
        enableSubmit_count1();
        }
        
        function testcounts1game10(){
        document.f2.txt2.value="Wrong";
       // document.f2.clip3.src="/assets/images/blank.png"; 
       // document.f1.clip4. src="/assets/images/line1.gif";
        //document.f1.clip81.src="/assets/images/w.gif";
        document.getElementById("tree1ab").style.pointerEvents ="none";
        document.getElementById("unmark5").checked = true; //kid gave wrong answer 
        enableSubmit_count1();
        }

        function enableNext_count(){
            var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
            if (chk == 3){
            document.getElementById("next").style.display="block";
            // document.getElementById("arrow1").style.display="block";
            
            }
            else{
            document.getElementById("next").style.display="none";
            }
            }

            function enableSubmit_count1(){
                var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
                console.log(chk);
                if (chk == 5){
                document.getElementById("submit").style.display="block";
                document.getElementById("arrow").style.display="block";
                
                }
                else{
                document.getElementById("submit").style.display="none";
                }
                }

//========================Grade 1 level 2==================================

//=====================counting====================


//------------------level2 -counting game (grade 1)----------------------------

function testcountsgame(){
    document.f1.txt1.value="Wrong";
    document.f1.clip2.src="/assets/images/blank.png";
    document.f1.clip7.src="/assets/images/w.gif";
    document.getElementById("lkid1").style.pointerEvents ="none";
    document.getElementById("unmark1").checked = true; //kid gave wrong answer 
    enableSubmit_count();
    }
    
    function testcountsgame2(){
    document.f1.txt1.value="Correct!!";
    document.f1.clip1.src="/assets/images/blank.png"; 
    document.f1.clip7.src="/assets/images/yay_bunny2.gif";
    document.getElementById("lkid2").style.pointerEvents ="none";
    document.getElementById("mark1").checked = true; //kid gave wrong answer 
    enableSubmit_count();
    }
    
    function testcountsgame3(){ 
    document.f1.txt2.value="Correct!!";
    document.f1.clip4.src="/assets/images/blank.png";
    document.f1.clip8.src="/assets/images/yay_bunny2.gif";
    document.getElementById("tree2").style.pointerEvents ="none";
    document.getElementById("mark2").checked = true; //kid gave wrong answer 
    enableSubmit_count();
    }
    
    function testcountsgame4(){
    document.f1.txt2.value="Wrong";
    document.f1.clip3.src="/assets/images/blank.png"; 
   // document.f1.clip4. src="/assets/images/line1.gif";
    document.f1.clip8.src="/assets/images/w.gif";
    document.getElementById("tree1").style.pointerEvents ="none";
    document.getElementById("unmark2").checked = true; //kid gave wrong answer 
    enableSubmit_count();
    }
    
    function testcountsgame5(){
    document.f1.txt3.value="Wrong";
    document.f1.clip6.src="/assets/images/blank.png";
    // document.f1.clip5. src="/assets/images/line1.gif";
    document.f1.clip9.src="/assets/images/w.gif";
    document.getElementById("pen2").style.pointerEvents ="none";
    document.getElementById("unmark3").checked = true; //kid gave wrong answer 
    enableSubmit_count();
    }
    
    function testcountsgame6(){
    document.f1.txt3.value="Correct!!";
    document.f1.clip5.src="/assets/images/blank.png"; 
    //document.f1.clip6. src="/assets/images/wow.gif";
    document.f1.clip9.src="/assets/images/yay_bunny2.gif";
    document.getElementById("pen1").style.pointerEvents ="none";
    document.getElementById("mark3").checked = true; //kid gave wrong answer 
    enableSubmit_count();
    }

//=====================Addition==================================================


//fucntion to laod next and previous pages of grade 1 level 2 (Addition)---------

// function showpages_length(page){
//     var p1 = document.getElementById(page).getAttribute("id");

//     if (p1=="page1-addition2"){
//         document.getElementById("page1-addition2").style.display='block';
//         document.getElementById("page2-addition2").style.display='none'; 
//     }
//     else if (p1=="page2-addition2"){
//         document.getElementById("page1-addition2").style.display='none';
//         document.getElementById("page2-addition2").style.display='block'; 
//     } 
// }

//---------------addition level2 grade 1 (page transition) -----------

function showpages_addition2(page){
    var p1 = document.getElementById(page).getAttribute("id");

    if (p1=="page1-addition2"){
        document.getElementById("page1-addition2").style.display='block';
        document.getElementById("page2-addition2").style.display='none'; 
        document.getElementById("page3-addition2").style.display='none';
        document.getElementById("page4-addition2").style.display='none';
        document.getElementById("page5-addition2").style.display='none';    
    }
    else if (p1=="page2-addition2"){
        document.getElementById("page1-addition2").style.display='none';
        document.getElementById("page2-addition2").style.display='block'; 
        document.getElementById("page3-addition2").style.display='none';
        document.getElementById("page4-addition2").style.display='none'; 
        document.getElementById("page5-addition2").style.display='none';   
    } 
    else if (p1=="page3-addition2"){
        document.getElementById("page1-addition2").style.display='none';
        document.getElementById("page3-addition2").style.display='block'; 
        document.getElementById("page2-addition2").style.display='none'; 
        document.getElementById("page4-addition2").style.display='none';
        document.getElementById("page5-addition2").style.display='none';   
    } 
    else if (p1=="page4-addition2"){
        document.getElementById("page1-addition2").style.display='none';
        document.getElementById("page4-addition2").style.display='block'; 
        document.getElementById("page3-addition2").style.display='none';
        document.getElementById("page2-addition2").style.display='none';  
        document.getElementById("page5-addition2").style.display='none';  
    } 

    else if (p1=="page5-addition2"){
        document.getElementById("page1-addition2").style.display='none';
        document.getElementById("page5-addition2").style.display='block'; 
        document.getElementById("page3-addition2").style.display='none';
        document.getElementById("page2-addition2").style.display='none';  
        document.getElementById("page4-addition2").style.display='none';  
    } 


}


//--------------------------addition intro level 2 grade 1--------------


$(document).ready(function(){
    $(document).on('click',"#addition-intro",function () {
    var audio = document.getElementById("intro_audio");
    if (audio.paused) audio.play();
    else audio.pause();
});
});


function game1(){
document.f3.txt1.value="2";
}

function game2(){
    document.f3.txt2.value="3";
}

function game3(){
    document.f3.txt3.value="4";
}
function game4(){
    document.f3.txt4.value="5";
}

//---pg2------------
function game5(){
    document.f4.txt5.value="3";
}
function game6(){
    document.f4.txt6.value="4";
    }
    
function game7(){
        document.f4.txt7.value="5";
    }
    
function game8(){
        document.f4.txt8.value="6";
    }

//---pg3------------
function game9(){
        document.f5.txt9.value="4";
    }
    
function game10(){
        document.f5.txt10.value="5";
    }

function game11(){
        document.f5.txt11.value="6";
    }
function game12(){
        document.f5.txt12.value="7";
    }

//---pg4------------
function game13(){
        document.f6.txt13.value="5";
    }
function game14(){
        document.f6.txt14.value="6";
    }
function game15(){
        document.f6.txt15.value="7";
    }
    function game16(){
        document.f6.txt16.value="8";
    }

    
//---pg5-----------
    function game17(){
        document.f7.txt17.value="6";
    }
    function game18(){
        document.f7.txt18.value="7";
    }
   function game19(){
        document.f7.txt19.value="8";
    }
    function game20(){
        document.f7.txt20.value="9";
    }

//-------------addition level 2 - grade  1 game --------------


      function test1_addto()
      {
      document.f1.clip1.src="/assets/images/q7.JPG";
      document.f1.brown.src="/assets/images/trans.svg";
      document.f1.red.src="/assets/images/q5.JPG";
      document.f1.green.src="/assets/images/q8.JPG";
  
      document.f1.rw1.src="/assets/images/yay_bunny2.gif";
      document.getElementById("q5").style.pointerEvents = "none";
      document.getElementById("q8").style.pointerEvents = "none";
      document.getElementById("mark1").checked = true; //kid gave right answer 
      
      enableSubmit_count();
      }
      function test2_addto()
      {
      document.f1.clip1.src="/assets/images/q5.JPG";
      document.f1.red.src="/assets/images/trans.svg";
      document.f1.brown.src="/assets/images/q7.JPG";
      document.f1.green.src="/assets/images/q8.JPG";
     
      document.f1.rw1.src="/assets/images/w.gif";
      document.getElementById("q7").style.pointerEvents = "none";
      document.getElementById("q8").style.pointerEvents = "none";
      document.getElementById("unmark1").checked = true; //kid gave wrong answer 
      enableSubmit_count();
      }
  
      function test3_addto()
      {
      document.f1.clip1.src="/assets/images/q8.JPG";
      document.f1.green.src="/assets/images/trans.svg";
      document.f1.brown.src="/assets/images/q7.JPG";
      document.f1.red.src="/assets/images/q5.JPG";
  
      document.f1.rw1.src="/assets/images/w.gif";
      document.getElementById("q5").style.pointerEvents = "none";
      document.getElementById("q7").style.pointerEvents = "none";
      document.getElementById("unmark1").checked = true; //kid gave wrong answer 
      enableSubmit_count();
      }
      
      function test4_addto()
      {
      document.f1.clip2.src="/assets/images/q6.JPG";
      document.f1.rect.src="/assets/images/trans.svg";
      document.f1.sqr.src="/assets/images/q5.JPG";
      document.f1.cir.src="/assets/images/q3.JPG";
  
      document.f1.rw2.src="/assets/images/w.gif";
      document.getElementById("qq5").style.pointerEvents = "none";
      document.getElementById("q3").style.pointerEvents = "none";
      document.getElementById("unmark2").checked = true; //kid gave right answer 
      enableSubmit_count();
      
      }
      function test5_addto()
      {
      document.f1.clip2.src="/assets/images/q5.JPG";
      document.f1.sqr.src="/assets/images/trans.svg";
      document.f1.rect.src="/assets/images/q6.JPG";
      document.f1.cir.src="/assets/images/q3.JPG";
  
      document.f1.rw2.src="/assets/images/yay_bunny2.gif";
      document.getElementById("q6").style.pointerEvents = "none";
      document.getElementById("q3").style.pointerEvents = "none";
      document.getElementById("mark2").checked = true; //kid gave wrong answer 
      enableSubmit_count();
      }
  
      function test6_addto()
      {
      document.f1.clip2.src="/assets/images/q3.JPG";
      document.f1.cir.src="/assets/images/trans.svg";
      document.f1.sqr.src="/assets/images/q6.JPG";
      document.f1.rect.src="/assets/images/q5.JPG";
  
      document.f1.rw2.src="/assets/images/w.gif";
      document.getElementById("qq5").style.pointerEvents = "none";
      document.getElementById("q6").style.pointerEvents = "none";
      document.getElementById("unmark2").checked = true; //kid gave wrong answer 
      enableSubmit_count();
      }
      
      function test7_addto()
      {
      document.f1.clip3.src="/assets/images/q3.JPG";
      document.f1.leaf1.src="/assets/images/trans.svg";
      document.f1.leaf2.src="/assets/images/q4.JPG";
      document.f1.leaf3.src="/assets/images/q6.JPG";
  
      document.f1.rw3.src="/assets/images/w.gif";
      document.getElementById("q4").style.pointerEvents = "none";
      document.getElementById("qq6").style.pointerEvents = "none";
      document.getElementById("unmark3").checked = true; //kid gave wrong answer 
      enableSubmit_count();
      
      }
      function test8_addto()
      {
      document.f1.clip3.src="/assets/images/q4.JPG";
      document.f1.leaf2.src="/assets/images/trans.svg";
      document.f1.leaf1.src="/assets/images/q3.JPG";
      document.f1.leaf3.src="/assets/images/q6.JPG";
  
      document.f1.rw3.src="/assets/images/yay_bunny2.gif";
      document.getElementById("qq3").style.pointerEvents = "none";  
      document.getElementById("qq6").style.pointerEvents = "none"; 
      document.getElementById("mark3").checked = true; //kid gave right answer 
      enableSubmit_count();
      }
  
      function test9_addto()
      {
      document.f1.clip3.src="/assets/images/q6.JPG";
      document.f1.leaf3.src="/assets/images/trans.svg";
      document.f1.leaf1.src="/assets/images/q3.JPG";
      document.f1.leaf2.src="/assets/images/q4.JPG";
  
      document.f1.rw3.src="/assets/images/w.gif";
      document.getElementById("qq3").style.pointerEvents = "none";
      document.getElementById("q4").style.pointerEvents = "none";
      document.getElementById("unmark3").checked = true; //kid gave wrong answer 
      enableSubmit_count();
      
      }

      function enableSubmit_count(){
        var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
        if (chk == 3){
        document.getElementById("submit").style.display="block";
        // document.getElementById("arrow1").style.display="block";
        
        }
        else{
        document.getElementById("submit").style.display="none";
        }
        }


//Question Addition
        $(document).ready(function(){
            $(document).on('click',"#question-addition-gif",function () {
            var audio = document.getElementById("quest_addition");
            if (audio.paused) audio.play();
            else audio.pause();
        });
     });

//------------------level1 -counting game (grade 2)
function show_countL1(pg1_count) {
    var p1 = document.getElementById(pg1_count).getAttribute("id");
    console.log(p1);
    if (p1 == "pg1_count"){
           document.getElementById("pg1_count").style.display='block';
           document.getElementById("pg2_count").style.display='none';
    }
    else if (p1 == "pg2_count"){
           document.getElementById("pg1_count").style.display='none';
           document.getElementById("pg2_count").style.display='block';  
    }
      }

//---------------------------substraction grade 2 page transitionlevel 1--------------------------------


function showpages_sub(page){
    var p1 = document.getElementById(page).getAttribute("id");
    if (p1=="page1-sub"){	
        document.getElementById("page1-sub").style.display='block';	
        document.getElementById("page2-sub").style.display='none'; 	
    }
    else if (p1=="page2-sub"){
        document.getElementById("page1-sub").style.display='none';	
        document.getElementById("page2-sub").style.display='block'; 	 
        }
}	


//---------------------------addition grade 2 page transition level 1--------------------------------


function showpages_ad(page){
    var p1 = document.getElementById(page).getAttribute("id");
    if (p1=="page1-ad"){	
        document.getElementById("page1-ad").style.display='block';	
        document.getElementById("page2-ad").style.display='none'; 	
    }
    else if (p1=="page2-ad"){
        document.getElementById("page1-ad").style.display='none';	
        document.getElementById("page2-ad").style.display='block'; 	 
        }
}	


//============================Grade 2===============================================================================================

//-----------adddition grade 2 intro  level 1----------------------

//-------------addition game level 1 grade 2

function testoadd3()
{
document.f1.t3.value=25;
// document.f1.clip11.src="/assets/images/blank.gif";
// document.f1.clip10.src="/assets/images/blank.gif";
document.f1.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("n1").style.pointerEvents = "none";
document.getElementById("n3").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; //kid gave right answer 
}
function testoadd4()
{
document.f1.t3.value=26;
document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("n1").style.pointerEvents = "none";
document.getElementById("n2").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave right answer 
}

function testoadd6()
{
document.f1.t3.value=27;
document.f1.rw1.src="/assets/images/w.gif";
// document.f1.clip11.src="/assets/images/blank.gif";
// document.f1.clip10.src="/assets/images/blank.gif";
document.getElementById("n2").style.pointerEvents = "none";
document.getElementById("n3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave right answer 
}

//-------------addition02---------

function testoadd32()
{
document.f2.t6.value=23;
document.f2.rw2.src="/assets/images/w.gif";
// document.f2.clip11.src="/assets/images/blank.gif";
// document.f2.clip10.src="/assets/images/blank.gif";
document.getElementById("n5").style.pointerEvents = "none";
document.getElementById("n6").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave right answer 
enableSubmit_count();
}

function testoadd52()
{
document.f2.t6.value=25;
document.f2.rw2.src="/assets/images/yay_bunny2.gif";
// document.f2.clip11.src="/assets/images/blank.gif";
// document.f2.clip10.src="/assets/images/blank.gif";
document.getElementById("n6").style.pointerEvents = "none";
document.getElementById("n4").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; //kid gave right answer 
enableSubmit_count();
}
function testoadd62()
{
document.f2.t6.value=28;
document.f2.rw2.src="/assets/images/w.gif";
// document.f2.clip11.src="/assets/images/blank.gif";
// document.f2.clip10.src="/assets/images/blank.gif";
document.getElementById("n5").style.pointerEvents = "none";
document.getElementById("n4").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave right answer 
enableSubmit_count();
}

//-------------addition03--------

function testoadd723()
{
document.f3.t9.value=29;
document.f3.rw3.src="/assets/images/yay_bunny2.gif";
// document.f3.clip11.src="/assets/images/blank.gif";
// document.f3.clip10.src="/assets/images/blank.gif";
document.getElementById("n8").style.pointerEvents = "none";
document.getElementById("n9").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; //kid gave right answer 
enableSubmit_count();
}

function testoadd923()
{
document.f3.t9.value=19;
document.f3.rw3.src="/assets/images/w.gif";
// document.f3.clip11.src="/assets/images/blank.gif";
// document.f3.clip10.src="/assets/images/blank.gif";
document.getElementById("n7").style.pointerEvents = "none";
document.getElementById("n9").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave right answer 
enableSubmit_count();
}
function testoadd1023()
{
document.f3.t9.value=23;
document.f3.rw3.src="/assets/images/w.gif";
// document.f3.clip11.src="/assets/images/blank.gif";
// document.f3.clip10.src="/assets/images/blank.gif";
document.getElementById("n8").style.pointerEvents = "none";
document.getElementById("n7").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave right answer 
enableSubmit_count();
}
//-------------------substraction game level1 grade 2----------------

//-------------------substraction 01---------

function tes_2sub3()
{
document.f1.t3.value=5;
// document.f1.clip11.src="/assets/images/blank.gif";
// document.f1.clip10.src="/assets/images/blank.gif";
document.f1.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("n1").style.pointerEvents = "none";
document.getElementById("n3").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; //kid gave right answer 
enableSubmit_count();
}
function tes_2sub4()
{
document.f1.t3.value=31;
document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("n1").style.pointerEvents = "none";
document.getElementById("n2").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave right answer 
enableSubmit_count();
}

function tes_2sub6()
{
document.f1.t3.value=19;
document.f1.rw1.src="/assets/images/w.gif";
// document.f1.clip11.src="/assets/images/blank.gif";
// document.f1.clip10.src="/assets/images/blank.gif";
document.getElementById("n2").style.pointerEvents = "none";
document.getElementById("n3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave right answer 
enableSubmit_count();
}

//-------------substraction 02---------

function tes_2sub32()
{
document.f2.t6.value=12;
document.f2.rw2.src="/assets/images/w.gif";
// document.f2.clip11.src="/assets/images/blank.gif";
// document.f2.clip10.src="/assets/images/blank.gif";
document.getElementById("n5").style.pointerEvents = "none";
document.getElementById("n6").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave right answer 
enableSubmit_count();
}

function tes_2sub52()
{
document.f2.t6.value=2;
document.f2.rw2.src="/assets/images/yay_bunny2.gif";
// document.f2.clip11.src="/assets/images/blank.gif";
// document.f2.clip10.src="/assets/images/blank.gif";
document.getElementById("n6").style.pointerEvents = "none";
document.getElementById("n4").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; //kid gave right answer 
enableSubmit_count();
}
function tes_2sub62()
{
document.f2.t6.value=18;
document.f2.rw2.src="/assets/images/w.gif";
// document.f2.clip11.src="/assets/images/blank.gif";
// document.f2.clip10.src="/assets/images/blank.gif";
document.getElementById("n5").style.pointerEvents = "none";
document.getElementById("n4").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave right answer 
enableSubmit_count();
}

//-------------substraction 03--------

function tes_2sub723()
{
document.f3.t9.value=11;
document.f3.rw3.src="/assets/images/yay_bunny2.gif";
// document.f3.clip11.src="/assets/images/blank.gif";
// document.f3.clip10.src="/assets/images/blank.gif";
document.getElementById("n8").style.pointerEvents = "none";
document.getElementById("n9").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; //kid gave right answer 
enableSubmit_count();
}

function tes_2sub923()
{
document.f3.t9.value=33;
document.f3.rw3.src="/assets/images/w.gif";
// document.f3.clip11.src="/assets/images/blank.gif";
// document.f3.clip10.src="/assets/images/blank.gif";
document.getElementById("n7").style.pointerEvents = "none";
document.getElementById("n9").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave right answer 
enableSubmit_count();
}
function tes_2sub1023()
{
document.f3.t9.value=21;
document.f3.rw3.src="/assets/images/w.gif";
// document.f3.clip11.src="/assets/images/blank.gif";
// document.f3.clip10.src="/assets/images/blank.gif";
document.getElementById("n8").style.pointerEvents = "none";
document.getElementById("n7").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave right answer 
enableSubmit_count();
}

//============================level 02============================

//-------------------addition game leve2 grade 2----------------

//-------------------addition01---------

//Audio of the question
$(document).ready(function(){
    $(document).on('click',"#question-add",function () {
    var audio = document.getElementById("quest_audio_add");
    if (audio.paused) audio.play();
    else audio.pause();
    });
});

function tesadd3()
{
document.f1.t3.value=69;
// document.f1.clip11.src="/assets/images/blank.gif";
// document.f1.clip10.src="/assets/images/blank.gif";
document.f1.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("n1").style.pointerEvents = "none";
document.getElementById("n3").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; //kid gave right answer 
enableSubmit_count();
}
function tesadd4()
{
document.f1.t3.value=67;
document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("n1").style.pointerEvents = "none";
document.getElementById("n2").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave right answer 
enableSubmit_count();
}

function tesadd6()
{
document.f1.t3.value=73;
document.f1.rw1.src="/assets/images/w.gif";
// document.f1.clip11.src="/assets/images/blank.gif";
// document.f1.clip10.src="/assets/images/blank.gif";
document.getElementById("n2").style.pointerEvents = "none";
document.getElementById("n3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave right answer 
enableSubmit_count();
}

//-------------addition02---------

function tesadd32()
{
document.f2.t6.value=73;
document.f2.rw2.src="/assets/images/w.gif";
// document.f2.clip11.src="/assets/images/blank.gif";
// document.f2.clip10.src="/assets/images/blank.gif";
document.getElementById("n5").style.pointerEvents = "none";
document.getElementById("n6").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave right answer 
enableSubmit_count();
}

function tesadd52()
{
document.f2.t6.value=84;
document.f2.rw2.src="/assets/images/yay_bunny2.gif";
// document.f2.clip11.src="/assets/images/blank.gif";
// document.f2.clip10.src="/assets/images/blank.gif";
document.getElementById("n6").style.pointerEvents = "none";
document.getElementById("n4").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; //kid gave right answer 
enableSubmit_count();
}
function tesadd62()
{
document.f2.t6.value=52;
document.f2.rw2.src="/assets/images/w.gif";
// document.f2.clip11.src="/assets/images/blank.gif";
// document.f2.clip10.src="/assets/images/blank.gif";
document.getElementById("n5").style.pointerEvents = "none";
document.getElementById("n4").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave right answer 
enableSubmit_count();
}

//-------------addition03--------

function testadd723()
{
document.f3.t9.value=73;
document.f3.rw3.src="/assets/images/yay_bunny2.gif";
// document.f3.clip11.src="/assets/images/blank.gif";
// document.f3.clip10.src="/assets/images/blank.gif";
document.getElementById("n8").style.pointerEvents = "none";
document.getElementById("n9").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; //kid gave right answer 
enableSubmit_count();
}

function testadd923()
{
document.f3.t9.value=83;
document.f3.rw3.src="/assets/images/w.gif";
// document.f3.clip11.src="/assets/images/blank.gif";
// document.f3.clip10.src="/assets/images/blank.gif";
document.getElementById("n7").style.pointerEvents = "none";
document.getElementById("n9").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave right answer 
enableSubmit_count();
}
function testadd1023()
{
document.f3.t9.value=53;
document.f3.rw3.src="/assets/images/w.gif";
// document.f3.clip11.src="/assets/images/blank.gif";
// document.f3.clip10.src="/assets/images/blank.gif";
document.getElementById("n8").style.pointerEvents = "none";
document.getElementById("n7").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave right answer 
enableSubmit_count();
}



//-------------------substraction game level2 grade 2----------------

//Audio of the question
$(document).ready(function(){
    $(document).on('click',"#question-sub",function () {
    var audio = document.getElementById("quest_audio_sub");
    if (audio.paused) audio.play();
    else audio.pause();
    });
});

//-------------------substraction 01---------

function tes_sub3()
{
document.f1.t3.value=11;
// document.f1.clip11.src="/assets/images/blank.gif";
// document.f1.clip10.src="/assets/images/blank.gif";
document.f1.rw1.src="/assets/images/yay_bunny2.gif";
document.getElementById("n1").style.pointerEvents = "none";
document.getElementById("n3").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; //kid gave right answer 
enableSubmit_count();
}
function tes_sub4()
{
document.f1.t3.value=10;
document.f1.rw1.src="/assets/images/w.gif";
document.getElementById("n1").style.pointerEvents = "none";
document.getElementById("n2").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave right answer 
enableSubmit_count();
}

function tes_sub6()
{
document.f1.t3.value=9;
document.f1.rw1.src="/assets/images/w.gif";
// document.f1.clip11.src="/assets/images/blank.gif";
// document.f1.clip10.src="/assets/images/blank.gif";
document.getElementById("n2").style.pointerEvents = "none";
document.getElementById("n3").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave right answer 
enableSubmit_count();
}

//-------------substraction 02---------

function tes_sub32()
{
document.f2.t6.value=11;
document.f2.rw2.src="/assets/images/w.gif";
// document.f2.clip11.src="/assets/images/blank.gif";
// document.f2.clip10.src="/assets/images/blank.gif";
document.getElementById("n5").style.pointerEvents = "none";
document.getElementById("n6").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave right answer 
enableSubmit_count();
}

function tes_sub52()
{
document.f2.t6.value=12;
document.f2.rw2.src="/assets/images/yay_bunny2.gif";
// document.f2.clip11.src="/assets/images/blank.gif";
// document.f2.clip10.src="/assets/images/blank.gif";
document.getElementById("n6").style.pointerEvents = "none";
document.getElementById("n4").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; //kid gave right answer 
enableSubmit_count();
}
function tes_sub62()
{
document.f2.t6.value=15;
document.f2.rw2.src="/assets/images/w.gif";
// document.f2.clip11.src="/assets/images/blank.gif";
// document.f2.clip10.src="/assets/images/blank.gif";
document.getElementById("n5").style.pointerEvents = "none";
document.getElementById("n4").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave right answer 
enableSubmit_count();
}

//-------------substraction 03--------

function tes_sub723()
{
document.f3.t9.value=24;
document.f3.rw3.src="/assets/images/yay_bunny2.gif";
// document.f3.clip11.src="/assets/images/blank.gif";
// document.f3.clip10.src="/assets/images/blank.gif";
document.getElementById("n8").style.pointerEvents = "none";
document.getElementById("n9").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; //kid gave right answer 
enableSubmit_count();
}

function tes_sub923()
{
document.f3.t9.value=22;
document.f3.rw3.src="/assets/images/w.gif";
// document.f3.clip11.src="/assets/images/blank.gif";
// document.f3.clip10.src="/assets/images/blank.gif";
document.getElementById("n7").style.pointerEvents = "none";
document.getElementById("n9").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave right answer 
enableSubmit_count();
}
function tes_sub1023()
{
document.f3.t9.value=88;
document.f3.rw3.src="/assets/images/w.gif";
// document.f3.clip11.src="/assets/images/blank.gif";
// document.f3.clip10.src="/assets/images/blank.gif";
document.getElementById("n8").style.pointerEvents = "none";
document.getElementById("n7").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave right answer 
enableSubmit_count();
}


//------------------level1 - counting game (grade 2)----------------------------------------------------------------
function show_countL1(pg1_count) {
    var p1 = document.getElementById(pg1_count).getAttribute("id");
    console.log(p1);
    if (p1 == "pg1_count"){
           document.getElementById("pg1_count").style.display='block';
           document.getElementById("pg2_count").style.display='none';
           document.getElementById("pg3_count").style.display='none';
    }
    else if (p1 == "pg2_count"){
           document.getElementById("pg1_count").style.display='none';
           document.getElementById("pg2_count").style.display='block'; 
           document.getElementById("pg3_count").style.display='none'; 
    }
    else if (p1 == "pg3_count"){
        document.getElementById("pg1_count").style.display='none';
        document.getElementById("pg2_count").style.display='none'; 
        document.getElementById("pg3_count").style.display='block'; 
 }
}

function showNxt(pg1_count) {
    var p1 = document.getElementById(pg1_count).getAttribute("id");
    console.log(p1);
    if (p1 == "pg1_count"){
           document.getElementById("pg1_count").style.display='block';
           document.getElementById("pg2_count").style.display='none'; 
           document.getElementById("pg3_count").style.display='none'; 
    }

    if (p1 == "pg2_count"){
        document.getElementById("pg1_count").style.display='none';
        document.getElementById("pg2_count").style.display='block'; 
        document.getElementById("pg3_count").style.display='none'; 
    }

    if (p1 == "pg3_count"){
        document.getElementById("pg1_count").style.display='none';
        document.getElementById("pg2_count").style.display='none'; 
        document.getElementById("pg3_count").style.display='block'; 
    }
}

// function startgame_counting(){
//     document.getElementById("startdiv").style.visibility= "hidden";
//     document.getElementById("time-back").style.display="block";
//     startStop();
// }

function startgame_counting(){
    document.getElementById("startdiv").style.visibility= "hidden";
    document.getElementById("time-back").style.display="block";
    startStop();

    var last, diff;
    var timeArray =[];
    
    $( "#pg2_count" ).click(function( event)  {
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

       $( "#pg3_count" ).click(function( event)  {
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
}








// Game
//Page 2

function testcount1()
{
document.f1.text1.value="Correct!!";
document.f1.clip07.src="/assets/images/yay_bunny2.gif";
document.getElementById("60").style.pointerEvents = "none";
document.getElementById("mark1").checked = true; //kid gave right answer 
enableNext_count();
}

function testcount2()
{
document.f1.text1.value="Wrong";
document.f1.clip07.src="/assets/images/w.gif";
document.getElementById("50").style.pointerEvents = "none";
document.getElementById("unmark1").checked = true; //kid gave right answer 
enableNext_count();
}


function testcount3()
{
document.f1.text2.value="Correct!!";
document.f1.clip08.src="/assets/images/yay_bunny2.gif";
document.getElementById("33").style.pointerEvents = "none";
document.getElementById("mark2").checked = true; //kid gave right answer 
enableNext_count();
}

function testcount4()
{
document.f1.text2.value="Wrong";
document.f1.clip08.src="/assets/images/w.gif";
document.getElementById("32").style.pointerEvents = "none";
document.getElementById("unmark2").checked = true; //kid gave right answer 
enableNext_count();
}

function testcount6()
{
document.f1.text3.value="Correct!!";
document.f1.clip09.src="/assets/images/yay_bunny2.gif";
document.getElementById("71").style.pointerEvents = "none";
document.getElementById("mark3").checked = true; //kid gave right answer 
enableNext_count();
}

function testcount5()
{
document.f1.text3.value="Wrong";
document.f1.clip09.src="/assets/images/w.gif";
document.getElementById("61").style.pointerEvents = "none";
document.getElementById("unmark3").checked = true; //kid gave right answer 
enableNext_count();
}


//Page 3

function testcount7()
{
document.f2.text4.value="Correct!!";
document.f2.clip10.src="/assets/images/yay_bunny2.gif";
document.getElementById("97").style.pointerEvents = "none";
document.getElementById("mark4").checked = true; //kid gave right answer 
enableSubmit_countG2L1();
}

function testcount8()
{
document.f2.text4.value="Wrong";
document.f2.clip10.src="/assets/images/w.gif";
document.getElementById("87").style.pointerEvents = "none";
document.getElementById("unmark4").checked = true; //kid gave right answer 
enableSubmit_countG2L1();
}


function testcount9()
{
document.f2.text5.value="Correct!!";
document.f2.clip11.src="/assets/images/yay_bunny2.gif";
document.getElementById("78").style.pointerEvents = "none";
document.getElementById("mark5").checked = true; //kid gave right answer 
enableSubmit_countG2L1();
}

function testcount10()
{
document.f2.text5.value="Wrong";
document.f2.clip11.src="/assets/images/w.gif";
document.getElementById("68").style.pointerEvents = "none";
document.getElementById("unmark5").checked = true; //kid gave right answer 
enableSubmit_countG2L1();
}

function testcount12()
{
document.f2.text6.value="Correct!!";
document.f2.clip12.src="/assets/images/yay_bunny2.gif";
document.getElementById("95").style.pointerEvents = "none";
document.getElementById("mark6").checked = true; //kid gave right answer 
enableSubmit_countG2L1();
}

function testcount11()
{
document.f2.text6.value="Wrong";
document.f2.clip12.src="/assets/images/w.gif";
document.getElementById("85").style.pointerEvents = "none";
document.getElementById("unmark6").checked = true; //kid gave right answer 
enableSubmit_countG2L1();
}


function enableSubmit_countG2L1(){
    var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
    console.log(chk);
    if (chk == 6){
    document.getElementById("submit").style.display="block";
    // document.getElementById("arrow").style.display="block";
    
    }
    else{
    document.getElementById("submit").style.display="none";
    }
    }
//------------------level2 - counting game (grade 2)----------------------------------------------------------------

function showNxt(pg1_count) {
    var p1 = document.getElementById(pg1_count).getAttribute("id");
    console.log(p1);
    if (p1 == "pg1_count"){
           document.getElementById("pg1_count").style.display='block';
           document.getElementById("pg2_count").style.display='none'; 
           document.getElementById("pg3_count").style.display='none'; 
    }

    if (p1 == "pg2_count"){
        document.getElementById("pg1_count").style.display='none';
        document.getElementById("pg2_count").style.display='block'; 
        document.getElementById("pg3_count").style.display='none'; 
    }

    if (p1 == "pg3_count"){
        document.getElementById("pg1_count").style.display='none';
        document.getElementById("pg2_count").style.display='none'; 
        document.getElementById("pg3_count").style.display='block'; 
    }
}


// Game
//Page 1

function testcountL2_1()
{
document.f1.text1.value="Wrong";
document.f1.clip07.src="/assets/images/w.gif";
document.getElementById("35").style.pointerEvents = "none";
document.getElementById("36").style.pointerEvents = "none";
document.getElementById("37").style.pointerEvents = "none";
document.getElementById("unmark01").checked = true; //kid gave wrong answer 
enableNext_countG2L2();
}

function testcountL2_2()
{
document.f1.text1.value="Correct!!";
document.f1.clip07.src="/assets/images/yay_bunny2.gif";
document.getElementById("34").style.pointerEvents = "none";
document.getElementById("36").style.pointerEvents = "none";
document.getElementById("37").style.pointerEvents = "none";
document.getElementById("mark01").checked = true; //kid gave right answer 
enableNext_countG2L2();
}

function testcountL2_3()
{
document.f1.text1.value="Wrong";
document.f1.clip07.src="/assets/images/w.gif";
document.getElementById("34").style.pointerEvents = "none";
document.getElementById("35").style.pointerEvents = "none";
document.getElementById("37").style.pointerEvents = "none";
document.getElementById("unmark01").checked = true; //kid gave wrong answer 
enableNext_countG2L2();
}

function testcountL2_4()
{
document.f1.text1.value="Wrong";
document.f1.clip07.src="/assets/images/w.gif";
document.getElementById("34").style.pointerEvents = "none";
document.getElementById("35").style.pointerEvents = "none";
document.getElementById("36").style.pointerEvents = "none";
document.getElementById("unmark01").checked = true; //kid gave wrong answer 
enableNext_countG2L2();
}


function testcountL2_5()
{
document.f1.text2.value="Wrong";
document.f1.clip08.src="/assets/images/w.gif";
document.getElementById("39").style.pointerEvents = "none";
document.getElementById("40").style.pointerEvents = "none";
document.getElementById("41").style.pointerEvents = "none";
document.getElementById("unmark02").checked = true; //kid gave right answer 
enableNext_countG2L2();
}

function testcountL2_6()
{
document.f1.text2.value="Wrong";
document.f1.clip08.src="/assets/images/w.gif";
document.getElementById("38").style.pointerEvents = "none";
document.getElementById("40").style.pointerEvents = "none";
document.getElementById("41").style.pointerEvents = "none";
document.getElementById("unmark02").checked = true; //kid gave right answer 
enableNext_countG2L2();
}

function testcountL2_7()
{
document.f1.text2.value="Correct!!";
document.f1.clip08.src="/assets/images/yay_bunny2.gif";
document.getElementById("38").style.pointerEvents = "none";
document.getElementById("39").style.pointerEvents = "none";
document.getElementById("41").style.pointerEvents = "none";
document.getElementById("mark02").checked = true; //kid gave right answer 
enableNext_countG2L2();
}

function testcountL2_8()
{
document.f1.text2.value="Wrong";
document.f1.clip08.src="/assets/images/w.gif";
document.getElementById("38").style.pointerEvents = "none";
document.getElementById("39").style.pointerEvents = "none";
document.getElementById("40").style.pointerEvents = "none";
document.getElementById("unmark02").checked = true; //kid gave right answer 
enableNext_countG2L2();
}


//Page 3

function testcountL2_9()
{
document.f2.text4.value="Correct!!";
document.f2.clip10.src="/assets/images/yay_bunny2.gif";
document.getElementById("17").style.pointerEvents = "none";
document.getElementById("18").style.pointerEvents = "none";
document.getElementById("15").style.pointerEvents = "none";
document.getElementById("mark03").checked = true; //kid gave right answer 
enableSubmit_count1();
}

function testcountL2_10()
{
document.f2.text4.value="Wrong";
document.f2.clip10.src="/assets/images/w.gif";
document.getElementById("16").style.pointerEvents = "none";
document.getElementById("18").style.pointerEvents = "none";
document.getElementById("15").style.pointerEvents = "none";
document.getElementById("unmark03").checked = true; //kid gave right answer 
enableSubmit_count1();
}
function testcountL2_11()
{
document.f2.text4.value="Wrong";
document.f2.clip10.src="/assets/images/w.gif";
document.getElementById("16").style.pointerEvents = "none";
document.getElementById("18").style.pointerEvents = "none";
document.getElementById("15").style.pointerEvents = "none";
document.getElementById("unmark03").checked = true; //kid gave right answer 
enableSubmit_count1();
}


function testcountL2_12()
{
document.f2.text4.value="Wrong";
document.f2.clip10.src="/assets/images/w.gif";
document.getElementById("16").style.pointerEvents = "none";
document.getElementById("17").style.pointerEvents = "none";
document.getElementById("15").style.pointerEvents = "none";
document.getElementById("unmark03").checked = true; //kid gave right answer 
enableSubmit_count1();
}

function testcountL2_13()
{
document.f2.text5.value="Wrong";
document.f2.clip11.src="/assets/images/w.gif";
document.getElementById("25").style.pointerEvents = "none";
document.getElementById("35").style.pointerEvents = "none";
document.getElementById("30").style.pointerEvents = "none";
document.getElementById("unmark04").checked = true; //kid gave right answer 
enableSubmit_count1();
}

function testcountL2_14()
{
document.f2.text5.value="Wrong";
document.f2.clip11.src="/assets/images/w.gif";
document.getElementById("20").style.pointerEvents = "none";
document.getElementById("35").style.pointerEvents = "none";
document.getElementById("30").style.pointerEvents = "none";
document.getElementById("unmark04").checked = true; //kid gave right answer 
enableSubmit_count1();
}

function testcountL2_15()
{
document.f2.text5.value="Wrong";
document.f2.clip11.src="/assets/images/w.gif";
document.getElementById("20").style.pointerEvents = "none";
document.getElementById("25").style.pointerEvents = "none";
document.getElementById("30").style.pointerEvents = "none";
document.getElementById("unmark04").checked = true; //kid gave right answer 
enableSubmit_count1();
}

function testcountL2_16()
{
document.f2.text5.value="Correct!!";
document.f2.clip11.src="/assets/images/yay_bunny2.gif";
document.getElementById("20").style.pointerEvents = "none";
document.getElementById("25").style.pointerEvents = "none";
document.getElementById("35").style.pointerEvents = "none";
document.getElementById("mark04").checked = true; //kid gave right answer 
enableSubmit_count1();
}

function testcountL2_17()
{
document.f2.text6.value="Wrong";
document.f2.clip12.src="/assets/images/w.gif";
document.getElementById("80").style.pointerEvents = "none";
document.getElementById("70").style.pointerEvents = "none";
document.getElementById("100").style.pointerEvents = "none";
document.getElementById("unmark05").checked = true; //kid gave right answer 
enableSubmit_count1();
}

function testcountL2_18()
{
document.f2.text6.value="Correct!!";
document.f2.clip12.src="/assets/images/yay_bunny2.gif";
document.getElementById("90").style.pointerEvents = "none";
document.getElementById("70").style.pointerEvents = "none";
document.getElementById("100").style.pointerEvents = "none";
document.getElementById("mark05").checked = true; //kid gave right answer 
enableSubmit_count1();
}

function testcountL2_19()
{
document.f2.text6.value="Wrong";
document.f2.clip12.src="/assets/images/w.gif";
document.getElementById("90").style.pointerEvents = "none";
document.getElementById("80").style.pointerEvents = "none";
document.getElementById("100").style.pointerEvents = "none";
document.getElementById("unmark05").checked = true; //kid gave right answer 
enableSubmit_count1();
}

function testcountL2_20()
{
document.f2.text6.value="Wrong";
document.f2.clip12.src="/assets/images/w.gif";
document.getElementById("90").style.pointerEvents = "none";
document.getElementById("80").style.pointerEvents = "none";
document.getElementById("70").style.pointerEvents = "none";
document.getElementById("unmark05").checked = true; //kid gave right answer 
enableSubmit_count1();
}
function enableNext_countG2L2(){
    var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
    if (chk == 2){
    document.getElementById("next").style.display="block";
    // document.getElementById("arrow1").style.display="block";
    
    }
    else{
    document.getElementById("next").style.display="none";
    }
    }