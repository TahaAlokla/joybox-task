import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'home-hajj';
  images = [
    {path: 'assets/sun.svg'},
    {path: 'assets/sun.svg'},
    {path: 'assets/sun.svg'},
    {path: 'assets/sun.svg'},
    {path: 'assets/sun.svg'},
    {path: 'assets/sun.svg'},

  ];
}
