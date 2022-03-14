import { Injectable } from '@angular/core';
import { GAMES } from '../helper-files/contentDb';
import { Content } from '../helper-files/content-interface';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  constructor() { }

  getContent(): Content[] { 
    return GAMES;
  }

  getContentObs(): Observable<Content[]> { 
    return of(GAMES);
  }

  getContentGames(id:Number): Observable<Content[]> {
    const gamesF = GAMES.filter(game => {
      return game.id === Number(id);
    });
    return of(gamesF);
  } 
}
