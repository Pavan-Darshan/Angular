import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-child-component',
  imports: [FormsModule],
  templateUrl: './child-component.component.html',
  styleUrl: './child-component.component.css'
})
export class ChildComponentComponent {
 
  newData?:string;
 @Input() parentData:any;
 @Output() send= new EventEmitter();

 trigger(){
  return this.send.emit(this.newData);
  
  
 }

}
