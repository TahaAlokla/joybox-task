import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable({
  providedIn: 'root'
})
export class TaskServiceService {
  private postUrl="http://58one54zero.joybox-me.com/api/store-blog-flutter-task";
  private getUrl="http://58one54zero.joybox-me.com/api/blogs-flutter-task"
  constructor( private http: HttpClient) { }


  SendForm(formData:FormData):Observable<any>{
    //  console.log(formData.getAll);
    // console.log("service arg :" , title , subject , photo , doc , video )
    return this.http.post(this.postUrl,
       formData )
  }

}
