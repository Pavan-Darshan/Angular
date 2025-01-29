import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router, RouterLink } from '@angular/router';

interface Course{
  id: number; 
  title: string; 
  price: number; 

  rating: number; 
  duration: number; 
  author: string;
}

@Component({
  selector: 'app-courses',
  
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.css',
  imports: [RouterLink,CommonModule]
 
})
export class CoursesComponent   {

  courses: Course[] = [
    { id: 1, title: 'Complete Modern JavaScript Course', price: 499,  rating: 4.5, duration: 18.2, author: 'Steve smith'},
    { id: 2, title: 'A complete Angular Course', price: 599,  rating: 4.9, duration: 20.8, author: 'Sarah King'},
    { id: 3, title: 'A Complete Node JS Bootcamp', price: 449,  rating: 3.7, duration: 16.6, author: 'Mark Vought'},
    { id: 4, title: 'A Complete React Developer Course', price: 599,  rating: 4.8, duration: 28.2, author: 'Sarah King'},
    { id: 5, title: 'ASP.NET Core with Web API', price: 649,  rating: 3.5, duration: 34.4, author: 'Steve smith'},
    { id: 6, title: 'Froentend Development with Vue.js', price: 329,  rating: 4.5, duration: 17.7, author: 'Steve smith'},
    { id: 7, title: 'A Complete Python Bootcamp', price: 469,  rating: 3.4, duration: 32.6, author: 'Mark Vought'},
    { id: 8, title: 'Machine Learning with Python', price: 1299, rating: 4.8, duration: 26.7, author: 'Sarah King'},
];


activeRouter : ActivatedRoute = inject(ActivatedRoute);
AllCourse :Course [];
searchData: string;
ngOnInit(){

  this.activeRouter.queryParamMap.subscribe((data)=>{
      this.searchData=data.get('serach');

      if(this.searchData === undefined || this.searchData === "" || this.searchData === null){
        this.AllCourse = this.courses;
      }
      else{
        this.AllCourse = this.courses.filter(x => x.title.toLocaleLowerCase().includes(this.searchData.toLocaleLowerCase()));
      }
  })

  // this.searchData = this.activeRouter.snapshot.queryParamMap.get('search');

 

}


}
