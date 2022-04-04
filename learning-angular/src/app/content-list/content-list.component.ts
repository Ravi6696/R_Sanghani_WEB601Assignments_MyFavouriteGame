import { Component, OnInit, Input } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { GamesService } from '../services/games.service';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.css']
})
export class ContentListComponent implements OnInit {

  bunchOfGame: Content[];

  constructor(private GamesService: GamesService) {
    this.bunchOfGame = [];
    
   }
   ngOnInit(): void {
    this.getGameFromServer();
  }

  getGameFromServer(): void{
    this.GamesService.getContent().subscribe(gameArray => this.bunchOfGame = gameArray);
  }

  addGameToList(newGameFromChild: Content): void {
    this.GamesService.addContent(newGameFromChild).subscribe(newContentFromServer => {
      console.log("New content from server: ", newContentFromServer);
     
      this.bunchOfGame.push(newContentFromServer);
      this.bunchOfGame = [...this.bunchOfGame]; 

    });
  }
}
