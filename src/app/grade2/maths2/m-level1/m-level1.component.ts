import { Component, OnInit } from '@angular/core';
import { faSleigh } from '@fortawesome/free-solid-svg-icons';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-m-level1',
  templateUrl: './m-level1.component.html',
  styleUrls: ['./m-level1.component.css']
})
export class MLevel1Component implements OnInit {
  GamesArray = [];
  btn1: number;
  btn2: number;
  btn3: number;
  btn4: number;
  btn5: number;
  btn6: number;
  nxtBtn : number;
  levelGames1=[];
  constructor(private gameService: GamesService) {
    this.btn1 = 0;
    this.btn2 = 0;
    this.btn3 = 0;
    this.btn4 = 0;
    this.btn5 = 0;
    this.btn6 = 0;
    this.nxtBtn = 0;
    this.levelGames1 =["m11","m12", "m13", "m14", "m15", "m16"];
    
   }
 
  ngOnInit(): void {
    var username = localStorage.getItem("uname");
    this.gameService.getGamesforNav(username).subscribe((data:any[]) => {
      this.GamesArray = data;

        if (this.GamesArray.indexOf("m11") !== -1){
            this.btn1 = this.btn1 + 1
          }
        if (this.GamesArray.indexOf("m12") !== -1){
          this.btn2 = this.btn2 + 1
          }
        if (this.GamesArray.indexOf("m13") !== -1){
        this.btn3 = this.btn3 + 1
          }
        if (this.GamesArray.indexOf("m14") !== -1){
          this.btn4 = this.btn4 + 1
          }
        if (this.GamesArray.indexOf("m15") !== -1){
           this.btn5 = this.btn5 + 1
          }
        if (this.GamesArray.indexOf("m16") !== -1){
          this.btn6 = this.btn6 + 1
          }


          for (var i in this.GamesArray){
            for (var j in this.levelGames1) {
               // console.log(this.levelGames[j]); 
               if((this.levelGames1[j])==(this.GamesArray[i])) {
                //  console.log(this.GamesArray[i]);
                 this.nxtBtn = this.nxtBtn + 1;
               }
             }
           }
          //  console.log(this.nxtBtn);
    }, (error) => {
      
    });
  }

  



}


