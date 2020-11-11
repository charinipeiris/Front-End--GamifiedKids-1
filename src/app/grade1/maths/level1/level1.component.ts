import { Component, OnInit } from '@angular/core';
import { GamesService } from 'src/app/services/games.service';

@Component({
  selector: 'app-level1',
  templateUrl: './level1.component.html',
  styleUrls: ['./level1.component.css']
})
export class Level1Component implements OnInit {
  GamesArray = [];
  btn1: number;
  btn2: number;
  btn3: number;
  btn4: number;
  nxtBtn : number;
  levelGames1 = [];
  constructor(private gameService: GamesService) { 
    this.btn1 = 0;
    this.btn2 = 0;
    this.btn3 = 0;
    this.btn4 = 0;
    this.nxtBtn = 0;
    this.levelGames1 =["M11","M12", "M13", "M14"];

  }

  ngOnInit(): void {
    var username = localStorage.getItem("uname");
    this.gameService.getGamesforNav(username).subscribe((data:any[]) => {
      this.GamesArray = data;

        if (this.GamesArray.indexOf("M11") !== -1){
            this.btn1 = this.btn1 + 1
          }
        if (this.GamesArray.indexOf("M12") !== -1){
          this.btn2 = this.btn2 + 1
          }
        if (this.GamesArray.indexOf("M13") !== -1){
        this.btn3 = this.btn3 + 1
          }
        if (this.GamesArray.indexOf("M14") !== -1){
          this.btn4 = this.btn4 + 1
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

    }, (error) => {
      
    });
  }


}
