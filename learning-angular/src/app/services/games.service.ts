import { Injectable } from '@angular/core';
import { Content } from '../helper-files/content-interface';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GamesService {

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-type': 'application/json' })
  };
  
  constructor(private http: HttpClient) { }

  getContent(): Observable<Content[]> {
    console.log("Getting the list");
    return this.http.get<Content[]>("api/game");
  }
  addContent(newContentItem: Content): Observable<Content>{
    console.log("added the new content: ", newContentItem);
    return this.http.post<Content>("api/game", newContentItem, this.httpOptions);
  }
}
