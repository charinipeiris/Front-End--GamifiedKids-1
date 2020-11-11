
function show_sinhalaL1(Page1, Page2) {
    document.getElementById(Page1).style.display='block';
    document.getElementById(Page2).style.display='none'; 
  }
  
  function test1_sinhala()
  {
  document.f1.clip1.src="/assets/images/child_running.PNG";
  document.f1.brown.src="/assets/images/trans.svg";
  document.f1.red.src="/assets/images/child_crying.PNG";
  document.f1.rw1.src="/assets/images/yay_bunny2.gif";
  document.getElementById("crychild").style.pointerEvents = "none";
  document.getElementById("mark1").checked = true; //kid gave right answer 
  
  }
  function test2_sinhala()
  {
  document.f1.clip1.src="/assets/images/child_crying.PNG";
  document.f1.red.src="/assets/images/trans.svg";
  document.f1.brown.src="/assets/images/child_running.PNG";
  document.f1.rw1.src="/assets/images/w.gif";
  document.getElementById("runchild").style.pointerEvents = "none";
  document.getElementById("unmark1").checked = true; //kid gave wrong answer 
  }
  
  function test3_sinhala()
  {
  document.f1.clip2.src="/assets/images/mother-cooking.PNG";
  document.f1.rect.src="/assets/images/trans.svg";
  document.f1.sqr.src="/assets/images/mother-scolding.PNG";
  document.f1.rw2.src="/assets/images/yay_bunny2.gif";
  document.getElementById("blamemother").style.pointerEvents = "none";
  document.getElementById("mark2").checked = true; //kid gave right answer 
  
  }
  function test4_sinhala()
  {
  document.f1.clip2.src="/assets/images/mother-scolding.PNG";
  document.f1.sqr.src="/assets/images/trans.svg";
  document.f1.rect.src="/assets/images/mother-cooking.PNG";
  document.f1.rw2.src="/assets/images/w.gif";
  document.getElementById("cookmother").style.pointerEvents = "none";
  document.getElementById("unmark2").checked = true; //kid gave wrong answer 
  }
  
  function test5_sinhala()
  {
  document.f1.clip3.src="/assets/images/sun.PNG";
  document.f1.leaf1.src="/assets/images/trans.svg";
  document.f1.leaf2.src="/assets/images/moon.PNG";
  document.f1.rw3.src="/assets/images/w.gif";
  document.getElementById("moon").style.pointerEvents = "none";
  document.getElementById("unmark3").checked = true; //kid gave wrong answer 
  
  }
  function test6_sinhala()
  {
  document.f1.clip3.src="/assets/images/moon.PNG";
  document.f1.leaf2.src="/assets/images/trans.svg";
  document.f1.leaf1.src="/assets/images/sun.PNG";
  document.f1.rw3.src="/assets/images/yay_bunny2.gif";
  document.getElementById("sun").style.pointerEvents = "none";  
  document.getElementById("mark3").checked = true; //kid gave right answer 
  }
  
  
  $(document).ready(function(){
    $(document).on('click',"#question-sinhala",function () {
    var audio = document.getElementById("quest_audio");
    if (audio.paused) audio.play();
    else audio.pause();
  });
  });
  
  
  