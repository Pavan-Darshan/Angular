import { EventEmitter, Injectable } from "@angular/core";
import { Subject } from "rxjs";


@Injectable({
    providedIn:'root'
})
export default class TaskService{

    // CreateTask :EventEmitter<string> = new EventEmitter<string> ();

    CreateTask =new Subject<string>();

    onCreateTask(val :string){

        this.CreateTask.next(val);
    }


}