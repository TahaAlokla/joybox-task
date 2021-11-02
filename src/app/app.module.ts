import { MaterialModule } from './material/material.module';

import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import {MatDatepickerModule} from '@angular/material/datepicker';
// import { MatCarouselModule } from 'ng-mat-carousel';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HomeComponent } from './components/home/home.component';
import { AddPageComponent } from './components/add-page/add-page.component';
import { Page404Component } from './components/page404/page404.component';
import { DetalisItemPageComponent } from './components/detalis-item-page/detalis-item-page.component';
import { ViewProductsPageComponent } from './components/view-products-page/view-products-page.component';
import { HttpClientModule } from '@angular/common/http';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddPageComponent,
    Page404Component,
    DetalisItemPageComponent,
    ViewProductsPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    // MatCarouselModule,
    NgxPaginationModule,
    IvyCarouselModule,
   MaterialModule

    // AngularFontAwesomeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
