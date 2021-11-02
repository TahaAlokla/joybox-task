import { DetalisItemPageComponent } from './../detalis-item-page/detalis-item-page.component';
import { TaskServiceService } from './../../services/task-service.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-view-products-page',
  templateUrl: './view-products-page.component.html',
  styleUrls: ['./view-products-page.component.scss']
})
export class ViewProductsPageComponent implements OnInit {
  massageSuccessGetProduct:String=""
  massageErrorGetProduct:String =""
  cardProduct=[{
    title:String ,
    subject:String,
    id:String,
    created_at:Date()
  }]
  p: number = 1;
  collection: any[] = [1,5,10];
  constructor( private taskService :TaskServiceService , private router :Router) { }

  ngOnInit(): void {
    this.taskService.getProducts().subscribe(result =>{
      console.log(result);
      this.cardProduct = result.data;
      this,this.massageSuccessGetProduct = result.message


    },err=>{
      console.log(err);
      this.massageErrorGetProduct = err.message


    })
  }

  cardId(itemId:any){
    console.log('click card !',itemId);
    // this.taskService.redirectTocardDetails(itemId)
    // this.router.navigate(['card'],{queryParams:{id:itemId}})
    //
    // this.router.navigate(['card'])
    this.router.navigate(['/card'],{ queryParams:{id:itemId}})
  }



  }


