import { Component, OnInit } from '@angular/core';
import { CommunicationComponent } from '../compAB.services';

@Component({
  selector: 'app-comp-b',
  imports: [],
  templateUrl: './comp-b.component.html',
  styleUrl: './comp-b.component.css'
})
export class CompBComponent implements OnInit{

  receiving?:string;
constructor(private communication:CommunicationComponent){
  
}
  ngOnInit(): void {
   this.communication.messageEvent.subscribe((msg)=>{
       this.receiving=msg
   })
  }



}
