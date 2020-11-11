import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-m-level2',
  templateUrl: './m-level2.component.html',
  styleUrls: ['./m-level2.component.css']
})
export class MLevel2Component implements OnInit {
  GamesArray = [];
  btn1: number;
  btn2: number;
  btn3: number;
  btn4: number;
  btn5: number;
  btn6: number;
  nxtBtn : number;
  levelGames2=[];
  constructor(private gameService: GamesService) { 
    this.btn1 = 0;
    this.btn2 = 0;
    this.btn3 = 0;
    this.btn4 = 0;
    this.btn5 = 0;
    this.btn6 = 0;
    this.nxtBtn = 0;
    this.levelGames2 =["m21","m22", "m23", "m24", "m25", "m26"];
  }

  ngOnInit(): void {
    var username = localStorage.getItem("uname");
    this.gameService.getGamesforNav(username).subscribe((data:any[]) => {
      this.GamesArray = data;

        if (this.GamesArray.indexOf("m21") !== -1){
            this.btn1 = this.btn1 + 1
          }
        if (this.GamesArray.indexOf("m22") !== -1){
          this.btn2 = this.btn2 + 1
          }
        if (this.GamesArray.indexOf("m23") !== -1){
        this.btn3 = this.btn3 + 1
          }
        if (this.GamesArray.indexOf("m24") !== -1){
          this.btn4 = this.btn4 + 1
          }
        if (this.GamesArray.indexOf("m25") !== -1){
           this.btn5 = this.btn5 + 1
          }
        if (this.GamesArray.indexOf("m26") !== -1){
          this.btn6 = this.btn6 + 1
          }

          for (var i in this.GamesArray){
            for (var j in this.levelGames2) {
               // console.log(this.levelGames[j]); 
               if((this.levelGames2[j])==(this.GamesArray[i])) {
                //  console.log(this.GamesArray[i]);
                 this.nxtBtn = this.nxtBtn + 1;
               }
             }
           }

    }, (error) => {
      
    });
  }

}
