import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-form',
  imports: [FormsModule,CommonModule,JsonPipe],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {

  firstname?:string;
  lastname?:string;
  onSubmit(data :any){
    console.log((data.value).fname+" "+(data.value).lname);
  }
  // ngOnInit(){
  //   this.firstname="ABC";
  //   this.lastname="DEF"

  // }


 
}

 

 

