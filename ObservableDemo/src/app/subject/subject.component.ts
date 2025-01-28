import { Component } from '@angular/core';
import { AsyncSubject, BehaviorSubject, Observable, ReplaySubject, Subject } from 'rxjs';
import { ajax } from 'rxjs/ajax';

@Component({
  selector: 'app-subject',
  imports: [],
  templateUrl: './subject.component.html',
  styleUrl: './subject.component.css'
})
export class SubjectComponent {

  ngOnInit(){
    // let obs = new Observable((obserever)=>{obserever.next(Math.random())})
  
  //   const sub=new Subject();

   

  // sub.subscribe(
  //   (data)=>{console.log(data);})

  //   sub.subscribe(
  //     (data)=>{console.log(data);})

  //     sub.next(Math.random());


  // subject with dummy data------------------

  //   const subject = new Subject();
  // const data = ajax('https://randomuser.me/api/');

  // subject.subscribe((val)=>{console.log(val);})
  // subject.subscribe((val)=>{console.log(val);})
  // subject.subscribe((val)=>{console.log(val);})

  // data.subscribe(subject);



  //behaviourSubject

  // const sub=new BehaviorSubject<number>(100);

  const sub =new ReplaySubject();

   

  sub.subscribe((data)=>{console.log(data);}) 

  sub.subscribe((data)=>{console.log(data);})

  sub.next(Math.random());

  sub.subscribe((data)=>{console.log(data);}) //random value


// AsyncSubject------------------>

const AsynSub = new AsyncSubject();

      AsynSub.next(100);
      AsynSub.next(200);
      AsynSub.next(300);
     


      AsynSub.subscribe((val)=>console.log("sub 1 "+val))
      AsynSub.next(400);

      AsynSub.subscribe((val)=>console.log("sub 2 "+val))

      AsynSub.complete();
  }
}
