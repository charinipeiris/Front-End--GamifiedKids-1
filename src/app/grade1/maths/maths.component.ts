import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-maths',
  templateUrl: './maths.component.html',
  styleUrls: ['./maths.component.css']
})
export class MathsComponent implements OnInit {
  GamesArray = [];
  levelGames1=[];
  levelGames2=[];
  btn1: number;
  btn2: number;
  mL1 : number;
  mL2 : number;
  constructor(private gameService: GamesService) { 
    this.btn1 = 0;
    this.btn2 = 0;
    this.levelGames1 =["M11","M12", "M13", "M14"];
    this.levelGames2 =["M21","M22", "M23", "M24", "M25"];

  }

  ngOnInit(): void {    
  var username = localStorage.getItem("uname");
  this.gameService.getGamesforNav(username).subscribe((data:any[]) => {
    this.GamesArray = data;
    // console.log(this.GamesArray)
    for (var i in this.GamesArray){
     for (var j in this.levelGames1) {
        // console.log(this.levelGames[j]); 
        if((this.levelGames1[j])==(this.GamesArray[i])) {
          // console.log(this.GamesArray[i]);
          this.btn1 = this.btn1+ 1
        }
      }
    }


    for (var i in this.GamesArray){
      for (var j in this.levelGames2) {
         // console.log(this.levelGames[j]); 
         if((this.levelGames2[j])==(this.GamesArray[i])) {
          //  console.log(this.GamesArray[i]);
           this.btn2 = this.btn2 + 1
         }
       }
     }

  }, (error) => {
    
  });


  var username = localStorage.getItem("uname");
  this.gameService.getStudentDetails(username).subscribe((data:any) => {
    this.mL1 = data.mL1;
    this.mL2 = data.mL2;
    if (this.mL1 == 0){
      if (this.btn1 == 4)

     {
          
          this.gameService.sendEmail({   
              level_completed : [
              {
              grade : "1 ශ්‍රේණිය",
              subject : "ගණිතය",
              games : ["M11","M12", "M13", "M14"],
              level : "1",
              column : "1"
              }
            ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});
        }
      
    }

console.log(this.btn2);
    if (this.mL2 == 0){
      if (this.btn2 == 5)

     {
          
          this.gameService.sendEmail({   
              level_completed : [
              {
              grade : "1 ශ්‍රේණිය",
              subject : "ගණිතය",
              games : ["M21","M22", "M23", "M24", "M25"],
              level : "2",
              column : "2"
              }
            ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});
        }
      
    }
  }, (error) => {});

  }
  

}
