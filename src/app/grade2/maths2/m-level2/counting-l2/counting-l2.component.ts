import { Component, OnInit, ViewChild } from '@angular/core';
import { GamesService } from "../../../../services/games.service";
import { EmotiondetectorComponent } from '../../../../emotiondetector/emotiondetector.component';

@Component({
  selector: 'app-counting-l2',
  templateUrl: './counting-l2.component.html',
  styleUrls: ['./counting-l2.component.css']
})
export class CountingL2Component implements OnInit {

  totalmarks: any;
  @ViewChild(EmotiondetectorComponent) child: EmotiondetectorComponent;
  constructor(private gamesService: GamesService) {
  }
  ngOnInit(){   
}

markstot_countingconcepts2(){
  this.child.endgame(); 
  var time = document.getElementById("display").innerHTML;
  document.getElementById("time-back").style.visibility = "hidden";
  var clicksarray = document.getElementById("clickarray").innerHTML ;


var total6 = 0;

let element1 = <HTMLInputElement> document.getElementById("mark01");  
let element2 = <HTMLInputElement> document.getElementById("mark02");  
let element3 = <HTMLInputElement> document.getElementById("mark03");  
let element4 = <HTMLInputElement> document.getElementById("mark04");  
let element5 = <HTMLInputElement> document.getElementById("mark05");  



if  (element1.checked ){
  total6 = total6 + 1;
 }

if (element2.checked)
    total6 = total6 + 1;

if (element3.checked)
    total6 = total6 + 1;

if (element4.checked)
    total6 = total6 + 1;

if (element5.checked)
    total6 = total6 + 1;



   let username = localStorage.getItem('uname');
    this.gamesService.submitGame({    
      completed_games : [
      {
      game_id : "m21",
      marks : total6,
      time_spent : time,
      emotions: this.child.emotions,
    max_idle_time :  clicksarray
      }
    ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});

var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
if (chk==5){
 

 if (total6 == 5){
var modal = document.getElementById("myModal");
modal.style.display = "block";
setTimeout(function(){
  document.getElementById('coin1').style.visibility = "visible";
  },1000);

setTimeout(function(){
  document.getElementById('coin2').style.visibility = "visible";
  },1500);

setTimeout(function(){
    document.getElementById('coin3').style.visibility = "visible";
    },1900)
setTimeout(function(){
    document.getElementById('coin5').style.visibility = "visible";
    },2000);
setTimeout(function(){
    document.getElementById('coin5').style.visibility = "visible";
      },2500);

    document.getElementById("perf-time").innerHTML = time;
}


else if (total6 == 4){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
  setTimeout(function(){
    document.getElementById('coin1').style.visibility = "visible";
    },1000);
  setTimeout(function(){
    document.getElementById('coin2').style.visibility = "visible";
    },1500);
    setTimeout(function(){
      document.getElementById('coin3').style.visibility = "visible";
      },1900);
    setTimeout(function(){
      document.getElementById('coin4').style.visibility = "visible";
      },2000);
      setTimeout(function(){
        document.getElementById('coin5').style.visibility = "visible";
        },2200);
        document.getElementById('coin5').style.opacity ="0.3";
      
          document.getElementById("perf-time").innerHTML = time;
  }
  else if (total6 == 3){
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
    setTimeout(function(){
      document.getElementById('coin1').style.visibility = "visible";
      },1000);
    
    setTimeout(function(){
      document.getElementById('coin2').style.visibility = "visible";
      },1500);
    
      setTimeout(function(){
        document.getElementById('coin3').style.visibility = "visible";
        },1900);
      setTimeout(function(){
        document.getElementById('coin4').style.visibility = "visible";
        },2000);
        document.getElementById('coin4').style.opacity ="0.3";
        setTimeout(function(){
          document.getElementById('coin5').style.visibility = "visible";
          },2500);
          document.getElementById('coin5').style.opacity ="0.3";
          
            document.getElementById("perf-time").innerHTML = time;
    }
    else if (total6 == 2){
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
      setTimeout(function(){
        document.getElementById('coin1').style.visibility = "visible";
        },1000);
      
      setTimeout(function(){
        document.getElementById('coin2').style.visibility = "visible";
        },1500);
      
        setTimeout(function(){
          document.getElementById('coin3').style.visibility = "visible";
          },1900);
          document.getElementById('coin3').style.opacity ="0.3";
        setTimeout(function(){
          document.getElementById('coin4').style.visibility = "visible";
          },2000);
          document.getElementById('coin4').style.opacity ="0.3";
          setTimeout(function(){
            document.getElementById('coin5').style.visibility = "visible";
            },2500);
            document.getElementById('coin5').style.opacity ="0.3";
            
              document.getElementById("perf-time").innerHTML = time;
      }
 
else if(total6 == 1){
var modal = document.getElementById("myModal");
modal.style.display = "block";
  setTimeout(function(){
    document.getElementById('coin1').style.visibility = "visible";
    },1000);
  
    setTimeout(function(){
    document.getElementById('coin2').style.visibility = "visible";
      },1500);
      document.getElementById('coin2').style.opacity ="0.3";

    setTimeout(function(){
      document.getElementById('coin3').style.visibility = "visible";
        },1900);
      document.getElementById('coin3').style.opacity ="0.3";
    setTimeout(function(){
        document.getElementById('coin4').style.visibility = "visible";
          },1900);
        document.getElementById('coin4').style.opacity ="0.3";
    setTimeout(function(){
        document.getElementById('coin5').style.visibility = "visible";
            },1900);
        document.getElementById('coin5').style.opacity ="0.3";
   
         document.getElementById("perf-time").innerHTML = time;
}
else if(total6 == 0){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
    setTimeout(function(){
      document.getElementById('sad_coin').style.visibility = "visible";
      },1000);
      document.getElementById("perf-time").innerHTML = time;
  }

}
else {
  document.getElementById('alert').style.visibility = "visible";
}

}

}
