import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-inside-child',
  imports: [],
  templateUrl: './inside-child.component.html',
  styleUrl: './inside-child.component.css'
})
export class InsideChildComponent {

  @ Input() str?:string;
  ngOnChanges(){
      console.log("inside child Onchanges ");
      
    }
    ngOnInit(){
      console.log("inside child OnInit ");
      
    }
    ngDoCheck(){
      console.log("ngDoCheck called inside child....");
      
    }
    ngAfterContentInit(){
      console.log("ngAfterContentInit called inside child....");
      
    }
    ngAfterViewInit(){
      console.log("ngAfterViewInit  called in child");
      
    }
}
