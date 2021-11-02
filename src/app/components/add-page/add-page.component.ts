import { TaskServiceService } from './../../services/task-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-page',
  templateUrl: './add-page.component.html',
  styleUrls: ['./add-page.component.scss']
})
export class AddPageComponent implements OnInit {
  isSuccessful: boolean = false
  errorMasgBackend: string[] = []
  massageSuccessfully:string=''
  isSignUpFailed: boolean = false
  doc: any;
  video: any;
  photo: any;
  FilenamePhotoSelected: any
  FilenameDocSelected: any
  FilenamevideoSelected: any

  form: any = {
    title: null,
    subject: null
  }
  constructor(private TaskService: TaskServiceService) { }

  ngOnInit(): void {
  }


  photoSelected(event: any) {
    const selectedFile = <File>event.target.files[0]
    this.photo = selectedFile
    this.FilenamePhotoSelected = <string>selectedFile.name
    // console.log("selectedFile  : ", selectedFile);
    //  this.photo.push(selectedFile)
  }

  // doc file

  DocSelected(event: any) {
    const selectedFile = <File>event.target.files[0]
    this.doc = selectedFile
    this.FilenameDocSelected = <string>selectedFile.name
    // console.log("selectedFile  : ", selectedFile);
    //  this.photo.push(selectedFile)
  }



  videoSelected(event: any) {
    const selectedFile = <File>event.target.files[0]
    this.video = selectedFile
    this.FilenamevideoSelected = <string>selectedFile.name
    // console.log("selectedFile  : ", selectedFile);
    // if send array of videos
    //  this.photo.push(selectedFile)
  }

  onSubmit(f:any) {
    // console.log(f);

    const formData = new FormData()
    const {
      title,
      subject,
    } = this.form;


    formData.append("title", title)
    formData.append("subject", subject);
    formData.append("photo", this.photo);
    formData.append("doc", this.doc);
    formData.append("video", this.video);
    // don't print formData Anything
    //  console.log(formData);

    this.TaskService.SendForm(formData).subscribe(result => {
      // console.log(title, subject, formData);
      console.log(result);
      // result.message
      this.massageSuccessfully=result.message
      // massage notification initial value
      setTimeout(() => {
        this.massageSuccessfully="",
        this.errorMasgBackend =[]
      }, 5000);
      this.isSuccessful = true;
      this.isSignUpFailed = false;
      // initial values input after send success| rset form
      f.reset()
      // for clear massage file name input 
      this.resetValue()

    }, err => {
      // console.log(err);
      this.errorMasgBackend = err.error.errors;
      this.isSignUpFailed = true;
    })

  }

  resetValue(){

    this.FilenamevideoSelected = "";
    this.FilenamePhotoSelected="";
    this.FilenameDocSelected="";


  }

}
