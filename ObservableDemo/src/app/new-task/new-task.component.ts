import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import TaskService from '../Service/app.service';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
newtask :string='';

taskService :TaskService =inject(TaskService);

OnCreateTask(){
 this.taskService.onCreateTask(this.newtask);
}

}
