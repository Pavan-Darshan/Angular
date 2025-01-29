import { Component, inject } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { CoursesComponent } from '../courses.component';

interface Course{
  id: number; 
  title: string; 
  price: number; 
  rating: number; 
  duration: number; 
  author: string;
}

@Component({
  selector: 'app-course-details',
  imports: [RouterLink],
  templateUrl: './course-details.component.html',
  styleUrl: './course-details.component.css',
})
export class CourseDetailsComponent {

  activeRouter : ActivatedRoute = inject(ActivatedRoute);

  coursesComp :CoursesComponent =inject(CoursesComponent);
  CourseId?: number;
  selectCourse?: Course;

  paramObs;

  ngOnInit(){

    // this.CourseId = + this.activeRouter.snapshot.paramMap.get('id');

    this.paramObs=this.activeRouter.params.subscribe((data)=>{this.CourseId = +data['id'];
    this.selectCourse = this.coursesComp.courses.find(val => val.id=== this.CourseId);});
  }


  ngOnDestroy()
  {
      this.paramObs.unsubscribe();
  }

}
