import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { task } from '../model/task';


@Component({
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrls: ['./create-task.component.css'],
  standalone:false,

})
export class CreateTaskComponent {

  @Input() editMode=false;
  @Output()
  CloseForm: EventEmitter<boolean> = new EventEmitter<boolean>();

  @Output() EventTaskData : EventEmitter<task> =new EventEmitter<task>();

  OnCloseForm(){
    this.CloseForm.emit(false);
  }

  onFormSubmit(data :NgForm){
      console.log(data.value);
      this.EventTaskData.emit(data.value);
      this.OnCloseForm();
      
  }
}
