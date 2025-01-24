import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  standalone:false,
  
})
export class AppComponent {
  title = 'HTTP-Demo';

  constructor(public http:HttpClient){}

}
