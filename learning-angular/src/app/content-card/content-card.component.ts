import { Component, Input, OnInit } from '@angular/core';
import { Content } from '../helper-files/content-interface';

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
  @Input() games?: Content;

  constructor() {
    
    this.games = { id: 0, title: '', description: '', creator: '', imgURL: '' };
  }
  ngOnInit(): void {
  }

  imageClicked(): void {
    console.log("ID: ", this.games?.id, ", Title: ", this.games?.title);
  }

}