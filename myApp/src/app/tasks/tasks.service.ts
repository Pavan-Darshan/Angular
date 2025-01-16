import { Injectable } from "@angular/core";
import { NewTaskData } from "../user/user.model";

@Injectable({providedIn:'root'})
export class TaskService{
    private tasks = [
  {
    id: 't1',
    userId: 'u1',
    title: 'Master Angular',
    summary:
      'Learn all the basic and advanced features of Angular & how to apply them.',
    dueDate: '2025-12-31',
  },
  {
    id: 't2',
    userId: 'u3',
    title: 'Build first prototype',
    summary: 'Build a first prototype of the online shop website',
    dueDate: '2024-05-31',
  },
  {
    id: 't3',
    userId: 'u3',
    title: 'Prepare issue template',
    summary:
      'Prepare and describe an issue template which will help with project management',
    dueDate: '2024-06-15',
  },
];

constructor(){
  const tasks=localStorage.getItem('tasksData')
  if(tasks)
  {
    this.tasks=JSON.parse(tasks);
  }
}




getUserId(userId : string){
    return this.tasks.filter((task)=> userId === task.userId);
}

addTask(tasks:NewTaskData,userId:string){
    this.tasks.push({
     id:new Date().getTime().toString(),
     userId:userId,
     title:tasks.title,
     summary:tasks.summary,
     dueDate:tasks.date

    })
    this.saveTask();
}

removetask(id:string){
    this.tasks = this.tasks.filter((task)=> !(task.id === id));
    this.saveTask();
}

saveTask(){
  localStorage.setItem("tasksData",JSON.stringify(this.tasks));
}
}
