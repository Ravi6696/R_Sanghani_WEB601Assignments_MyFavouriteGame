import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type':
    'application/json' })
  };
  
  constructor(private messageService: MessageService, private http: HttpClient) { }

  addContent(newContent: Content): Observable<Content>{
    this.messageService.add("Going to add game to the server!");
    return this.http.post<Content>("api/game", newContent, this.httpOptions);
  }

  updateContent(oldContent: Content): Observable<any>{
    return this.http.put("api/game", oldContent, this.httpOptions);
    }

  getGameList(): Observable<Content[]> {
    this.messageService.add("Content array loaded!");
    return this.http.get<Content[]>("api/game");
  }

  getSingleGame(id: number): Observable<Content> {

    return this.http.get<Content>("api/game/" + id);

  }
}

