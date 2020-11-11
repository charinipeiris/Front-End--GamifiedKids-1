import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-achievements',
  templateUrl: './achievements.component.html',
  styleUrls: ['./achievements.component.css']
})
export class AchievementsComponent implements OnInit {

  GamesArray = []; 
  config: any;
// x
  

  constructor(private gameService: GamesService) {
          //Create dummy data
    // for (var i = 0; i < this.collection.count; i++) {
    //     this.collection.data.push(
    //       {
    //         id: i + 1,
    //         value: "items number " + (i + 1)
    //       }
    //     );
    //   }
  
      this.config = {
        itemsPerPage: 3,
        currentPage: 1,
        totalItems: this.GamesArray.length
      };
    }
  


  ngOnInit(): void {
    var uname = localStorage.getItem("uname");
    this.gameService.getComletedGames(uname).subscribe((data:any[]) => {
      this.GamesArray = data;
    }, (error) => {
      
    });

  }

  pageChanged(event){
    this.config.currentPage = event;
  }


}
