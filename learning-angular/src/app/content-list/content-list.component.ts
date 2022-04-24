import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent implements OnInit {

  bunchOfGame: Content[];

  constructor(private GamesService: GamesService) {
    this.bunchOfGame = [];
    
   }
   ngOnInit(): void {
    this.GamesService.getGameList().subscribe(list => {
      this.bunchOfGame = list;
    });
  }

  

  addContentToList(newContentItem: Content): void {


    this.GamesService.getGameList().subscribe(list => {
      this.bunchOfGame = list;
    });
  }
}


