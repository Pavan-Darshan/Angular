import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import {type  Details } from './task.model';
import { TaskService } from '../tasks.service';

@Component({
  selector: 'app-task',
  imports: [CardComponent,DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
    @Input({required:true}) userTask!: Details;
    
    private taskService=inject(TaskService);

    onCompleted(){
      this.taskService.removetask(this.userTask.id)
    }
   
    
}
