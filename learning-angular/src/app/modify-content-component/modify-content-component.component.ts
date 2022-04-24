import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Content } from '../helper-files/content-interface';
import { MessageService } from '../services/message.service';
import { GamesService } from '../services/games.service';

export interface DialogData {
  newContent: Content;
  tempTags: string;
}


@Component({
  selector: 'app-modify-content-component',
  templateUrl: './modify-content-component.component.html',
  styleUrls: ['./modify-content-component.component.scss']
})
export class ModifyContentComponentComponent implements OnInit {
  @Output() newContentEvent = new EventEmitter<Content>();
  gameListForCheckingValidId: Content[] = [];
  @Input() newContent: Content = {
    title: "", description: '', creator: '', type: undefined
  };
  tempId: string = "";
  tempTags: string = '';
  errorMessage: string = '';

  constructor(public dialog: MatDialog, private gamesService: GamesService, private messageService: MessageService) { }

  ngOnInit(): void {
    this.gamesService.getGameList().subscribe(list => {
      this.gameListForCheckingValidId  = list;
    });
  }

  openDialog(): void {

    const dialogRef = this.dialog.open(DialogOverviewExampleDialog, {
      width: '300px',
      data: this.newContent,
    });

    dialogRef.afterClosed().subscribe((result: DialogData) => {
      console.log('The dialog was closed', result);

      this.newContent = result.newContent;
      this.tempTags = result.tempTags;
      this.addContentFromChild();
    });
  }

  addContentFromChild(): void {
    if (this.tempId === "") {
      this.newContent.tags = this.tempTags.split(';');
      this.gamesService.addContent(this.newContent).subscribe((newContentFromServer) => {
        this.messageService.add("Game successfully added to the server!");
        this.newContentEvent.emit(newContentFromServer);
      });

      this.newContent = {
        title: "", description: '', creator: '', type: undefined
      };
      this.tempId = "";
      this.tempTags = ""
    }
    else {
      this.newContent.id = parseInt(this.tempId);
      if (this.newContent.id !== undefined) {
        this.gamesService.getGameList().subscribe(list => {
          this.gameListForCheckingValidId = list;


          if (this.gameListForCheckingValidId.some(game => game.id === this.newContent.id)) {
            this.newContent.tags = this.tempTags.split(';');
            this.gamesService.updateContent(this.newContent).subscribe(() => {
              this.messageService.add("Game successfully updated on the server!");
              this.newContentEvent.emit(this.newContent);
            });

         
            this.newContent = {
              title: "", description: '', creator: '', type: undefined
            };
            this.tempId = "";
            this.tempTags = ""
 
          }

        });
      }

    }

  }
}


@Component({
  selector: 'dialog-overview-example-dialog',
  templateUrl: 'dialog-overview-example-dialog.html',
})
export class DialogOverviewExampleDialog {

  tempId: string = "";
  tempTags: string = '';
  constructor(
    public dialogRef: MatDialogRef<DialogOverviewExampleDialog>,
    @Inject(MAT_DIALOG_DATA) public data: Content,
  ) {
    this.tempId = data.id + "";
    if (data.tags) {
      this.tempTags = data.tags.join(";");
    }
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  sendDataUp(): void {
    this.data.tags = this.tempTags.split(';');
    this.dialogRef.close(this.data); 
  }
}