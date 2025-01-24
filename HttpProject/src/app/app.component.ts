import { Component } from '@angular/core';
import { UserPlacesComponent } from './places/user-places/user-places.component';
import { AvailablePlacesComponent } from './places/available-places/available-places.component';
import { HttpClient, HttpStatusCode } from '@angular/common/http';
import { map } from 'rxjs';

@Component({
  selector: 'app-root',
  imports: [AvailablePlacesComponent, UserPlacesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'HttpProject';

  URL: string = "http://localhost:3000/user-places";

  constructor(private http: HttpClient) {
  }

  getResponse(){
     this.http.get(this.URL)
  
     .subscribe(
      (resp)=>{
        console.log(resp);
  
      },
      (error :Error)=>{
            console.log("Error...");
            console.log(error);
            
            
      },
      ()=>{
        console.log("Completed....");
        

      }
  )
  }
}
