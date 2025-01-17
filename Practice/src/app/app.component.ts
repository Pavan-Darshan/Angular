import { DatePipe, UpperCasePipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewPracComponent } from "./new-prac/new-prac.component";
import { CommonModule } from '@angular/common';
import { Section1Component } from "./section1/section1.component";
import { ttClassExport } from './ts-class.directive';
import { TwoWayBindingComponent } from "./two-way-binding/two-way-binding.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [FormsModule, UpperCasePipe, DatePipe, NewPracComponent, CommonModule, Section1Component,
     ttClassExport, TwoWayBindingComponent]
})
export class AppComponent {
    disable=true;
      title="Angular Property Binding Example"

      data="employee";
      data1={
        name:'pavan'
      }
      dateCurrent :Date=new Date();
      countInc(event:any){
        console.log(event.value);
        

      }
}
