import { Component } from '@angular/core';
import { ChildComponent } from "./child/child.component";
import { CommonModule } from '@angular/common';
import { FormComponent } from "./form/form.component";
import { ProductServices } from './product.services';
import { Product } from './product';

@Component({
  selector: 'app-root',
  imports: [ CommonModule, FormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  data:string="Dummy data";
  
send(values:HTMLInputElement){
  this.data=values.value;
}
setBool=true;
destroy(){
    this.setBool=false;
}


// services------------------------------------->

 product?:Product[];
services;
constructor( ){
      this.services=new ProductServices();
}

getProducts(){
  this.product = this.services.getProduct();
  console.log(this.services.getProduct());
  }
}
