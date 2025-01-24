import { Component, DestroyRef, signal } from '@angular/core';

import { Place } from '../place.model';
import { PlacesComponent } from '../places.component';
import { PlacesContainerComponent } from '../places-container/places-container.component';
import { HttpClient } from '@angular/common/http';
import { map, single } from 'rxjs';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-available-places',
  standalone: true,
  templateUrl: './available-places.component.html',
  styleUrl: './available-places.component.css',
  imports: [PlacesComponent, PlacesContainerComponent,CommonModule],
})
export class AvailablePlacesComponent {
  places = signal<Place[] | undefined>(undefined);

  isFecthing =signal(false);
  error=signal('');
  // private httpClient = inject(HttpClient);

  constructor(private httpClient: HttpClient,private destroyRef:DestroyRef){}
  


  ngOnInit(){

    this.isFecthing.set(true);
      const subcription = this.httpClient.get<{places:Place[]}>('http://localhost:3000/places')
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

  onSelectPlace(selectedPlace: Place){
    this.httpClient.put('http://localhost:3000/user-places',{
      placeId : selectedPlace.id
    })
    .subscribe({
      next : (resData)=>{
        console.log(resData);
        
      }
    })
  }
}
