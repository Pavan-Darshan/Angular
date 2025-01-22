import { Component } from '@angular/core';
import { HeaderComponent } from "./header/header.component";

import { Services } from './app.services';
import { NewCompComponent } from "./new-comp/new-comp.component";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  // providers:[{provide:Services,useClass:Services}],
  standalone:false
})
export class AppComponent {
  title = 'ServiceDemo';



}
