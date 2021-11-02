import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
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
  private getItemUrl="http://58one54zero.joybox-me.com/api/blog-flutter-task"
  constructor( private http: HttpClient , private router:Router) { }


  SendForm(formData:FormData):Observable<any>{
    //  console.log(formData.getAll);
    // console.log("service arg :" , title , subject , photo , doc , video )
    return this.http.post(this.postUrl,
       formData )
  }

  getProducts():Observable<any>{
    return this.http.get(this.getUrl)
  }
  getItemCard(cardId:any):Observable<any>{

    // this.router.navigate(['/products'], { queryParams: { id: itemId } });
    // this.router.navigate(['product'])
    console.log(this.getItemUrl+`/?id=${cardId}`)


    return this.http.get(this.getItemUrl+`/?id=${cardId}`)

  }

}
