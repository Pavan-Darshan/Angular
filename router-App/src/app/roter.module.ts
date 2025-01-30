import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { CoursesComponent } from "./courses/courses.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CourseDetailsComponent } from "./courses/course-details/course-details.component";
import { ContactComponent } from "./contact/contact.component";
import { LoginComponent } from "./login/login/login.component";
import { CheckoutComponent } from "./checkout/checkout/checkout.component";
import { AuthGuradService } from "./service/authguard.service";
import { CanActivate, CanActivateChild } from "./authGuard";



const routes :Routes =[
    // {path:'',component:HomeComponent},
    {path : '',redirectTo:'Home',pathMatch : 'full'},
    {path : 'Home',component:HomeComponent},
    {path : 'About',component:AboutComponent},
    {path : 'Contact',component:ContactComponent, canDeactivate:[(comp : ContactComponent)=>{ return comp.onExit()}]},
    {path : 'Course',component:CoursesComponent, resolve : {courses : AuthGuradService}},
    // {path : 'Course/Course/:id',component:CourseDetailsComponent},
    {path : 'Course',canActivateChild : [CanActivateChild],children:[
        {path : 'Course/:id',component:CourseDetailsComponent},
        {path : 'Checkout',component:CheckoutComponent, data : {name:"Angular",price:450}},
    ]},
    {path :'Login',component : LoginComponent},
    {path :'LogOut',component : LoginComponent},
    {path : '**',component:NotFoundComponent},
   
]

@NgModule({
    imports:[RouterModule.forRoot(routes,{enableTracing :true})],
    exports : [RouterModule]

})


export class RoutingModule{

}