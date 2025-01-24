import { Component, OnInit, inject } from '@angular/core';
import { task } from './model/task';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs';
import { TaskService } from '../Service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
  standalone:false,

})
export class DashboardComponent implements OnInit{
  showCreateTaskForm: boolean = false;
  editMode=false;
 service:TaskService = inject(TaskService);

  allTasks:task[]=[];

  ngOnInit(){
    this.FetchData();
  }

  OpenCreateTaskForm(){
    this.showCreateTaskForm = true;
    this.editMode=false;
  }

  CloseCreateTaskForm(){
    this.showCreateTaskForm = false;
  }



  CreateTask(data:task){
   this.service.CreateTask(data);
   this.FetchData();
  }






  FetchData(){
    this.service.FetchData().subscribe((tasks)=>{
      this.allTasks = tasks;
    })
  }

 

  DeleteTask(id :string | undefined){
      this.service.DeleteTask(id);
      this.FetchData(); 
  }


  DeleteAllTasks(){
   this.service.DeleteAllTasks();
   this.FetchData();
}

OpenEditTaskForm(id : string){
  this.showCreateTaskForm=true;
  this.editMode=true;


}

}

