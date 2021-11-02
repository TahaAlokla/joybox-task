import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA} from '@angular/material/dialog';

@Component({
  selector: 'app-dialog-elements',
  templateUrl: './dialog-elements.component.html',
  styleUrls: ['./dialog-elements.component.scss']
})
export class DialogElementsComponent  {

  constructor(@Inject(MAT_DIALOG_DATA) public data: { mediaType: string,mediaUrl:String}) { }



}


