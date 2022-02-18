import { Component, OnInit } from '@angular/core';
import {ContentList} from "../helper-files/content-list";

@Component({
  selector: 'app-content-card',
  templateUrl: './content-card.component.html',
  styleUrls: ['./content-card.component.scss']
})
export class ContentCardComponent implements OnInit {
 
  myList: ContentList;
   
  constructor() { 
    
    this.myList = new ContentList();
    console.log("my list contains these items: ", this.myList.items);

    this.myList.addItem({
      id: 0,
      title: "Candy Crush Saga",
      description: "Best mobile game",
      creator: "King",
      imgURL: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnYxQv4D0_4IcM1c4Kc0DRiv5poxXnH-pXg&usqp=CAU"
    });
    this.myList.addItem({
      id: 1,
      title: "age of empires",
      description: "Best action game",
      creator: "Big Huge Games",
      imgURL: "https://cdn.akamai.steamstatic.com/steam/apps/1017900/capsule_616x353.jpg?t=1605737984",
      type: "Action game"
    });
    this.myList.addItem({
      id: 2,
      title: "pokémon go",
      description: "Reality mobile game",
      creator: "Nintendo · Niantic ",
      imgURL: "https://images.nintendolife.com/43d2b1ef0c7fc/pokemon-go.900x.jpg",
      type: "Reality game"
    });

    console.log("my list contains these items: ", this.myList.items);


    console.log("The length of the array is:  ", this.myList.numberOfItems());

    console.log("THe html output is: ", this.myList.getHtml(0));

  }

  ngOnInit(): void {
  }

}
