import { Component, OnInit } from '@angular/core';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-leaderboard',
  templateUrl: './leaderboard.component.html',
  styleUrls: ['./leaderboard.component.css']
})
export class LeaderboardComponent implements OnInit {
  config: any;
RanksArray = [];
  constructor(private gameService: GamesService) { 
    this.config = {
      itemsPerPage: 5,
      currentPage: 1,
      totalItems: this.RanksArray.length
    };
  }
  

  ngOnInit(): void {
    var grade = localStorage.getItem("grade");
    this.gameService.getranks(grade).subscribe((data:any[]) => {
      this.RanksArray = data;
    }, (error) => {
      
    });
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}

