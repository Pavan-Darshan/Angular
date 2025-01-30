import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IDeactivatedComponent } from '../authGuard';

@Component({
  selector: 'app-contact',
  imports: [CommonModule,FormsModule],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements IDeactivatedComponent {

  firstName :string="";
  lastName :string = '';
  country :string = "usa";
  message : string = "";

  isSubmitted : Boolean =false;


  onSubmit(){
    this.isSubmitted=true;
  }

  onExit(){
    if((this.firstName || this.lastName || this.message) && !this.isSubmitted){
      return confirm("Do you want to navigate away without submit?")
    }
    else{
      return true;
    }
  }
}
