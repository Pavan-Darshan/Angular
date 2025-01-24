import { inject, Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { task } from "./dashboard/model/task";
import { map } from "rxjs";

@Injectable({
    providedIn:'root'
})
export class TaskService{

      http:HttpClient = inject(HttpClient);

     CreateTask(data:task){
        const header = new HttpHeaders({'my-header' : 'Project-header'});
        this.http.post<{name:string}>
        ('https://httpclientproject-b7136-default-rtdb.firebaseio.com/task.json',data,{headers:header})
        .subscribe(
          (response)=>{
            console.log(response);
          }
        )
        
      }
      

      FetchData(){
          return this.http.get<{[key :string]:task}>('https://httpclientproject-b7136-default-rtdb.firebaseio.com/task.json')
          .pipe(map((response)=>{
      
            let tasks = [];
      
            for(let key in response){
              if(response.hasOwnProperty(key))
              {
                 tasks.push({...response[key],id:key})
              }
            }
            return tasks;
          }))
          
        }

        DeleteTask(id :string | undefined){

            this.http.delete('https://httpclientproject-b7136-default-rtdb.firebaseio.com/task/'+id+'.json')
            .subscribe(()=>{
                
            })
        }

        DeleteAllTasks(){
            this.http.delete('https://httpclientproject-b7136-default-rtdb.firebaseio.com/task.json')
            .subscribe(()=>{
                
            })
        }


}