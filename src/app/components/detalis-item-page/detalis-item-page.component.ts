import { DialogElementsComponent } from './../dialog-elements/dialog-elements.component';
import { TaskServiceService } from './../../services/task-service.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-detalis-item-page',
  templateUrl: './detalis-item-page.component.html',
  styleUrls: ['./detalis-item-page.component.scss']
})
export class DetalisItemPageComponent implements OnInit {
  IdQueryParam = ''
  SuccessMasg = ""
  ErrorMasg: [] = []
  responseObj = {
    title: String,
    subject: String,
    medias: [{
      id: String,
      flutter_task_id: String,
      // media url
      media: String,
      type: String
    }]
  }

  constructor(private taskservice: TaskServiceService, private route: ActivatedRoute, public dialog: MatDialog) { }


  openDialog(medtype: any, medurl: any) {
    this.dialog.open(DialogElementsComponent, {
      // width: '330px',
      // height: '400px',
      data: {
        mediaType: medtype,
        mediaUrl: medurl
      }
    });
  }
  ngOnInit(): void {
    this.route.queryParams
      .subscribe(params => {
        console.log(params);
        this.IdQueryParam = params.id

        this.taskservice.getItemCard(this.IdQueryParam).subscribe(result => {
          console.log(result);
          this.responseObj = result.data
          this.SuccessMasg = result.message
          this.ErrorMasg = result.errors


        }, err => {
          console.log(err);
          this.ErrorMasg = err.errors
        })

      })

    // this.router.route
    // this.taskservice.
  }

}
// import { MAT_DIALOG_DATA } from '@angular/material/dialog';



