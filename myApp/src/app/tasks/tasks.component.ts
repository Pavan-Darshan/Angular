import { Component, Input } from '@angular/core';
import { TaskComponent } from './task/task.component';
import { NewTaskComponent } from './new-task/new-task.component';
import { NewTaskData } from '../user/user.model';
import { TaskService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent,NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})
export class TasksComponent {
  @Input({required:true}) name?: string;
  @Input({required:true}) avatar?:string;

  @Input({required:true}) userId!:string;
  // private taskService= new TaskService();
  constructor(private taskService:TaskService){}

  isAddingTask=false;
  

get selectUsertask(){
  return this.taskService.getUserId(this.userId)
}

onStartAddTask(){
  this.isAddingTask=true;
}
onCloseAddTask(){
  this.isAddingTask=false;
}

}
