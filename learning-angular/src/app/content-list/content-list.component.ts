import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  bunchOfGames: Content[];
  gallery_id!: number;
  singleItem:Content[] = [];
  constructor(private GamesService: GamesService) {
    this.bunchOfGames = [];
    
   }
  
  ngOnInit(): void {
    this.GamesService.getContentObs().subscribe(gamesArray => this.bunchOfGames = gamesArray);
    this.GamesService.getContentGames(2).subscribe(favouritegames => {
      this.singleItem = favouritegames;
    });
  }
}