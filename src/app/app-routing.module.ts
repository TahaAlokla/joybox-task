import { DetalisItemPageComponent } from './components/detalis-item-page/detalis-item-page.component';
import { HomeComponent } from './components/home/home.component';
import { ViewProductsPageComponent } from './components/view-products-page/view-products-page.component';
import { Page404Component } from './components/page404/page404.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {path:'add-task', component:AddPageComponent},
  {path:"view-products", component:ViewProductsPageComponent},
  {path:"product/:id" , component:DetalisItemPageComponent},
  {path:"**", component:Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
