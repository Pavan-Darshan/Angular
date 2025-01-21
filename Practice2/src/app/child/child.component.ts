import { Component, Input, OnChanges, OnInit, SimpleChange, SimpleChanges } from '@angular/core';
import { InsideChildComponent } from "./inside-child/inside-child.component";

@Component({
  selector: 'app-child',
  imports: [InsideChildComponent],
  templateUrl: './child.component.html',
  styleUrl: './child.component.css'
})
export class ChildComponent implements OnInit{


  @Input() childData?:string;



  ngOnChanges(changes : SimpleChanges){
      console.log("ngOnChanges called...."+this.childData+changes);
      
  }
  ngOnInit(){
    console.log("ngOnInit called...."+this.childData);
  }
  ngDoCheck(){
    console.log("ngDoCheck called....");
    
  }
  ngAfterContentInit(){
    console.log("ngAfterContentInit called");
    
  }
  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called");
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit  called");
    
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked  called");
    
  }
  ngOnDestroy(){
    console.log("ngOnDestroy is called....");
    
  }

}
