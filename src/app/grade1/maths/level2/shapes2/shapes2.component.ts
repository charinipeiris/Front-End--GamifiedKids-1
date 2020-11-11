import { Component, OnInit, ViewChild } from '@angular/core';
import { GamesService } from "../../../../services/games.service";
import { EmotiondetectorComponent } from '../../../../emotiondetector/emotiondetector.component';

@Component({
  selector: 'app-shapes2',
  templateUrl: './shapes2.component.html',
  styleUrls: ['./shapes2.component.css']
})
export class Shapes2Component implements OnInit {

  @ViewChild(EmotiondetectorComponent) child: EmotiondetectorComponent;

  constructor(private gamesService: GamesService) { }

  ngOnInit(): void {
  }



markstot(){

  var time = document.getElementById("display").innerHTML;
  document.getElementById("time-back").style.visibility = "hidden";

  var total = parseInt(document.getElementById("marksArea").innerHTML)
  var clicksarray = document.getElementById("clickarray").innerHTML ;
  // console.log(clicksarray);
  var finaltotal = 0;

    if (total == 8){

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
        },2200);
        document.getElementById("perf-time").innerHTML = time;
        finaltotal = finaltotal + 4;
    console.log(finaltotal);
  
  }
  else if (total == 7){
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
          },2200);

          document.getElementById("perf-time").innerHTML = time;

          finaltotal = finaltotal + 4;
          console.log(finaltotal);
  }
  
  else if(total == 6){
  var modal = document.getElementById("myModal");
  modal.style.display = "block";
    setTimeout(function(){
      document.getElementById('coin1').style.visibility = "visible";
      },1000);
    
      setTimeout(function(){
        document.getElementById('coin2').style.visibility = "visible";
        },1000);
      
     setTimeout(function(){
          document.getElementById('coin3').style.visibility = "visible";
          },1000);

     setTimeout(function(){
         document.getElementById('coin4').style.visibility = "visible";
            },1000);
     document.getElementById('coin4').style.opacity ="0.3";
     document.getElementById("perf-time").innerHTML = time;
     finaltotal = finaltotal + 3;
     console.log(finaltotal);
      
    
  }
  else if(total == 5){
    var modal = document.getElementById("myModal");
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
      setTimeout(function(){
        document.getElementById('coin1').style.visibility = "visible";
        },1000);
      
        setTimeout(function(){
          document.getElementById('coin2').style.visibility = "visible";
          },1000);
        
       setTimeout(function(){
            document.getElementById('coin3').style.visibility = "visible";
            },1000);
  
       setTimeout(function(){
           document.getElementById('coin4').style.visibility = "visible";
              },1000);
       document.getElementById('coin4').style.opacity ="0.3";
       document.getElementById("perf-time").innerHTML = time;
       finaltotal = finaltotal + 3;
       console.log(finaltotal);
    }
  
    else if (total==4) {
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
        setTimeout(function(){
          document.getElementById('coin1').style.visibility = "visible";
          },1000);
        
          setTimeout(function(){
            document.getElementById('coin2').style.visibility = "visible";
            },1000);
          
         setTimeout(function(){
              document.getElementById('coin3').style.visibility = "visible";
              },1000);
        document.getElementById('coin3').style.opacity ="0.3";
    
         setTimeout(function(){
             document.getElementById('coin4').style.visibility = "visible";
                },1000);
         document.getElementById('coin4').style.opacity ="0.3";
         document.getElementById("perf-time").innerHTML = time;

         finaltotal = finaltotal + 2;
         console.log(finaltotal);
    }
  
    else if (total == 3){
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
        setTimeout(function(){
          document.getElementById('coin1').style.visibility = "visible";
          },1000);
        
          setTimeout(function(){
            document.getElementById('coin2').style.visibility = "visible";
            },1000);
          
         setTimeout(function(){
              document.getElementById('coin3').style.visibility = "visible";
              },1000);
        document.getElementById('coin3').style.opacity ="0.3";
    
         setTimeout(function(){
             document.getElementById('coin4').style.visibility = "visible";
                },1000);
         document.getElementById('coin4').style.opacity ="0.3";
         document.getElementById("perf-time").innerHTML = time;

         finaltotal = finaltotal + 2;
         console.log(finaltotal);
    }

    else if (total == 2){
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
        setTimeout(function(){
          document.getElementById('coin1').style.visibility = "visible";
          },1000);
        
          setTimeout(function(){
            document.getElementById('coin2').style.visibility = "visible";
            },1000);
            document.getElementById('coin2').style.opacity ="0.3";
          
         setTimeout(function(){
              document.getElementById('coin3').style.visibility = "visible";
              },1000);
        document.getElementById('coin3').style.opacity ="0.3";
    
         setTimeout(function(){
             document.getElementById('coin4').style.visibility = "visible";
                },1000);
         document.getElementById('coin4').style.opacity ="0.3";
         document.getElementById("perf-time").innerHTML = time;

         finaltotal = finaltotal + 1;
         console.log(finaltotal);
    }
   
    else if (total ==1){
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
        setTimeout(function(){
          document.getElementById('coin1').style.visibility = "visible";
          },1000);
        
          setTimeout(function(){
            document.getElementById('coin2').style.visibility = "visible";
            },1000);
            document.getElementById('coin2').style.opacity ="0.3";
          
         setTimeout(function(){
              document.getElementById('coin3').style.visibility = "visible";
              },1000);
        document.getElementById('coin3').style.opacity ="0.3";
    
         setTimeout(function(){
             document.getElementById('coin4').style.visibility = "visible";
                },1000);
         document.getElementById('coin4').style.opacity ="0.3";
         document.getElementById("perf-time").innerHTML = time;

         finaltotal = finaltotal + 1;
         console.log(finaltotal);
      
    }
    else if(total == 0){
      var modal = document.getElementById("myModal");
      modal.style.display = "block";
        setTimeout(function(){
          document.getElementById('sad_coin').style.visibility = "visible";
          },1000);
          document.getElementById("perf-time").innerHTML = time;

          console.log(finaltotal);
    }
    else{
      
    }

     let username = localStorage.getItem('uname');
    this.gamesService.submitGame({    
      completed_games : [
      {
      game_id : "M25",
      marks : finaltotal,
      time_spent : time,
      emotions: this.child.emotions,
      max_idle_time :  clicksarray
      }
    ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});

    this.child.endgame(); 
  
  
  }
  
}
