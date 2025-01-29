import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { CoursesComponent } from "./courses/courses.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CourseDetailsComponent } from "./courses/course-details/course-details.component";
import { ContactComponent } from "./contact/contact.component";



const routes :Routes =[
    // {path:'',component:HomeComponent},
    {path : '',redirectTo:'Home',pathMatch : 'full'},
    {path : 'Home',component:HomeComponent},
    {path : 'About',component:AboutComponent},
    {path : 'Contact',component:ContactComponent},
    {path : 'Course',component:CoursesComponent},
    // {path : 'Course/Course/:id',component:CourseDetailsComponent},
    {path : 'Course',children:[
        {path : 'Course/:id',component:CourseDetailsComponent}
    ]},
    {path : '**',component:NotFoundComponent}
]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports : [RouterModule]

})


export class RoutingModule{

}