import { Component, OnInit, ViewChild } from '@angular/core';
import { GamesService } from "../../../../services/games.service";
import { EmotiondetectorComponent } from '../../../../emotiondetector/emotiondetector.component';

@Component({
  selector: 'app-length2',
  templateUrl: './length2.component.html',
  styleUrls: ['./length2.component.css']
})
export class Length2Component implements OnInit {
  totalmarks: any;

  @ViewChild(EmotiondetectorComponent) child: EmotiondetectorComponent;
  constructor(private gamesService: GamesService) {
  }
  ngOnInit(){   
}


markstot_l22(){
  var time = document.getElementById("display").innerHTML;
  console.log(time);
  document.getElementById("time-back").style.visibility = "hidden";
  var clicksarray = document.getElementById("clickarray").innerHTML ;
  var total1 = 0;

  
let element1 = <HTMLInputElement> document.getElementById("mark1");  
let element2 = <HTMLInputElement> document.getElementById("mark2");  
let element3 = <HTMLInputElement> document.getElementById("mark3");  
let element4 = <HTMLInputElement> document.getElementById("mark4"); 

  
if (element1.checked ){
  total1 = total1 + 1;
 }

if (element2.checked)
    total1 = total1 + 1;

if (element3.checked)
    total1 = total1 + 1;

if (element4.checked)
    total1 = total1 + 1;



    let username = localStorage.getItem('uname');
    this.gamesService.submitGame({    
      completed_games : [
      {
      game_id : "M22",
      marks : total1,
      time_spent : time,
      emotions: this.child.emotions,
      max_idle_time :  clicksarray
      }
    ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});


var chk = document.querySelectorAll('input[type="checkbox"]:checked').length;
if (chk==4){
 


  if (total1 == 4){
    var modal = document.getElementById("myModal");
    var subbtn = document.getElementById("final_button");
    modal.style.display = "block";
    subbtn.style.display = "none";
    setTimeout(function(){
      document.getElementById('coin1').style.visibility = "visible";
      },1000);
    
    setTimeout(function(){
      document.getElementById('coin2').style.visibility = "visible";
      },1500);
    
    setTimeout(function(){
        document.getElementById('coin3').style.visibility = "visible";
        },2000);
    
    setTimeout(function(){
          document.getElementById('coin4').style.visibility = "visible";
          },2000);

          document.getElementById("perf-time").innerHTML = time;
    }
    

  if (total1 == 3){
var modal = document.getElementById("myModal");
var subbtn = document.getElementById("final_button");
modal.style.display = "block";
subbtn.style.display = "none";
setTimeout(function(){
  document.getElementById('coin1').style.visibility = "visible";
  },1000);

setTimeout(function(){
  document.getElementById('coin2').style.visibility = "visible";
  },1500);

setTimeout(function(){
    document.getElementById('coin3').style.visibility = "visible";
    },2000);

setTimeout(function(){
    document.getElementById('coin4').style.visibility = "visible";
          },2000);
    document.getElementById('coin4').style.opacity ="0.3";
    document.getElementById("perf-time").innerHTML = time;


}
else if (total1 == 2){
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
    document.getElementById("perf-time").innerHTML = time;

}

else if(total1 == 1){
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
              },2000);
        document.getElementById('coin4').style.opacity ="0.3";
        document.getElementById("perf-time").innerHTML = time;
  
    
  
}
else if(total1 == 0){
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


this.child.endgame(); 
}

}
