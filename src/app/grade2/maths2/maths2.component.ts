import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-maths2',
  templateUrl: './maths2.component.html',
  styleUrls: ['./maths2.component.css']
})
export class Maths2Component implements OnInit {
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
    this.levelGames1 =["m11","m12", "m13", "m14", "m15", "m16"];
    this.levelGames2 =["m21","m22", "m23", "m24", "m25", "m26"];
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
      if (this.btn1 == 6)

     {
          
          this.gameService.sendEmail({   
              level_completed : [
              {
              grade : "2 ශ්‍රේණිය",
              subject : "ගණිතය",
              games : ["m11","m12", "m13", "m14", "m15", "m16"],
              level : "1",
              column : "1"
              }
            ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});
        }
      
    }


    if (this.mL2 == 0){
      if (this.btn2 == 6)

     {
          
          this.gameService.sendEmail({   
              level_completed : [
              {
              grade : "2 ශ්‍රේණිය",
              subject : "ගණිතය",
              games : ["m21","m22", "m23", "m24", "m25", "m26"],
              level : "2",
              column : "2"
              }
            ]},username).subscribe(res=>{console.log("success")}, err=>{console.log("error")});
        }
      
    }
  }, (error) => {});
    
  }

}
