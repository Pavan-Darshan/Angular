import { Component, Inject, Optional, Self, SkipSelf } from '@angular/core';
import { Services } from '../app.services';

@Component({
  selector: 'app-new-comp',
  imports: [],
  templateUrl: './new-comp.component.html',
  styleUrl: './new-comp.component.css',
  // providers:[Services]
})
export class NewCompComponent {

constructor(@Optional()private service:Services){
  
}

getDetails(){
  console.log(this.service.getProduct());
  
}

}
