import { CommonModule } from '@angular/common';
import { Component, ElementRef, ViewChild } from '@angular/core';
import { filter, from, fromEvent, map, Observable, of, tap } from 'rxjs';
import { NewTaskComponent } from "./new-task/new-task.component";
import { ShowTaskComponent } from "./show-task/show-task.component";
import { SubjectComponent } from "./subject/subject.component";


@Component({
  selector: 'app-root',
  imports: [CommonModule, NewTaskComponent, ShowTaskComponent, SubjectComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'ObservableDemo';

  array:any[]=[];
  
  array1=[4,5,7,8,46,1,24];

  createBtnObs;


  @ViewChild('btn')
  createBtn :ElementRef;

  // myObservable = new Observable((observable)=>{

  //   setTimeout(()=>{ observable.next(25)},1000)
  //   setTimeout(()=>{ observable.next(5)},2000)
  //   // setTimeout(()=>{ observable.complete()},3000)
  //   // setTimeout(()=>{ observable.error(new Error())},3000)
  //   setTimeout(()=>{ observable.next(72)},4000)
  //   setTimeout(()=>{ observable.next(14)},5000)
  // });
  
  // myObservable=of(this.array1,20,50,60);   

  
  myObservable = from([1,2,3,4,5,6]);
  
  transformObs=this.myObservable.pipe( map((val)=> val * 10), filter((val)=> val > 30))

  // getData(){

  //   this.myObservable.subscribe(
  //     (observer : any)=>{
  //         this.array.push(observer);
  //     },
  //     (error :Error)=>{
  //       alert("Something went wrong...");
  //     },
  //     ()=>{
  //       alert("Data is streamed")
  //     }
  //   )
  // }

  getData(){

    this.transformObs.subscribe(
      {
        next: (observer:any)=>{
            this.array.push(observer);
            console.log(observer);
            
        },
        error(err){
            alert(err.msg);
        },
        // complete() {
        //   alert("Completed");
        // },
      }
  )
  }

  // buttonClicked(){
  //   let count=0;
  //   this.createBtnObs=fromEvent(this.createBtn.nativeElement,'click')
  //                 .subscribe(
  //                   (data)=>{
  //                       console.log(data);
  //                       this.show( ++count);
                       
                        
  //                   }
  //                 )
      
  // }

  ngAfterViewInit(){
      // this.buttonClicked()
  }

  // show(count){
  //   let div= document.createElement('div');
  //   div.innerText = "Item : "+ count;
  //   div.setAttribute('class','divClass')
   
    
  //   document.getElementById("divId").appendChild(div);
  // }


}
