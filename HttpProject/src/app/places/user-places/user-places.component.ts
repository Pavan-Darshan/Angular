import { Component, DestroyRef, signal } from '@angular/core';

import { PlacesContainerComponent } from '../places-container/places-container.component';
import { PlacesComponent } from '../places.component';
import { Place } from '../place.model';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-places',
  standalone: true,
  templateUrl: './user-places.component.html',
  styleUrl: './user-places.component.css',
  imports: [PlacesContainerComponent, PlacesComponent,CommonModule],
})
export class UserPlacesComponent {


    places = signal<Place[] | undefined>(undefined);
  
    isFecthing =signal(false);
    error=signal('');
    // private httpClient = inject(HttpClient);
  
    constructor(private httpClient: HttpClient,private destroyRef:DestroyRef){}
    
  
  
    ngOnInit(){
  
      this.isFecthing.set(true);
        const subcription = this.httpClient.get<{places:Place[]}>('http://localhost:3000/user-places')
        // .pipe(
        //   map((resData)=>{ resData.places})
        // )
        .subscribe({
          next: (resData)=>{
            // this.places.set(places); 
            this.places.set(resData.places);
            
          },
          error :(error:Error)=>{
            // this.error.set(error.message);
            this.error.set("Something went wrong....Please try again later....");
            console.log(error);
            
  
          },
          complete :()=>{
            this.isFecthing.set(false);
          }
        });
        this.destroyRef.onDestroy(()=>{
          subcription.unsubscribe();
        })
    }
}
