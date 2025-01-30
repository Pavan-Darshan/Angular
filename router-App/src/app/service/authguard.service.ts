import { inject, Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, CanDeactivate, GuardResult, MaybeAsync, RedirectCommand, Resolve, Router, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { AuthServices } from "./auth.service";
import { ContactComponent } from "../contact/contact.component";
import { IDeactivatedComponent } from "../authGuard";
import { CoursesComponent } from "../courses/courses.component";

interface Course{
    id: number; 
    title: string; 
    price: number; 
  
    rating: number; 
    duration: number; 
    author: string;
  }


@Injectable({
    providedIn:'root'
})
export class AuthGuradService implements CanActivate,CanActivateChild, CanDeactivate<IDeactivatedComponent>, Resolve<Course[]> {
   
    
    authservice :AuthServices =inject(AuthServices);
    router :Router = inject(Router);

    courseComp :CoursesComponent =inject(CoursesComponent);

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):boolean| Observable<boolean> | Promise<boolean> {

        
        if(this.authservice.IsAuthenticated())
            return true
        else{
          
            this.router.navigate(['/Login']);
            return false;

        }
        
    }

    canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot){

        return this.canActivate(childRoute,state);
        
    }

    canDeactivate(component: IDeactivatedComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
        return component.onExit();
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Course[] | Observable<Course[]> | Promise<Course[]>{

            // let courseList : Course[]=[];

            // this.courseComp.getAllCourses().subscribe((course : Course[])=>{
            //     courseList=course;
            // })

            // return courseList;

            return this.courseComp.getAllCourses();

     
    }


}