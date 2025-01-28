import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import TaskService from '../Service/app.service';

@Component({
  selector: 'app-show-task',
  imports: [CommonModule],
  templateUrl: './show-task.component.html',
  styleUrl: './show-task.component.css'
})
export class ShowTaskComponent {

  tasks : string[] =['task1','task2','task3'];

  taskService:TaskService=inject(TaskService);

  ngOnInit(){
    this.taskService.CreateTask.subscribe(
      (val)=>{
        this.tasks.push(val);
      }
    )
  }

}
