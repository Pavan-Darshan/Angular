import { Component } from '@angular/core';
import { Services } from '../app.services';


@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',

})
export class HeaderComponent {

  constructor(private service:Services){
    console.log("HeaderComponent constructor");
   
  }
  getProduct(){
    console.log(this.service.getProduct());
    
  }

}
