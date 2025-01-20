import { Component } from '@angular/core';
import { CommunicationComponent } from '../compAB.services';

@Component({
  selector: 'app-comp-a',
  imports: [],
  templateUrl: './comp-a.component.html',
  styleUrl: './comp-a.component.css'
})
export class CompAComponent {


  constructor(private communication:CommunicationComponent){}
  sending(){
    this.communication.sendMessage(" Hi......This Message from comp A");

  }

}
