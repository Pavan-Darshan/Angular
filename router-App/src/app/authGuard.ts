import { inject } from "@angular/core";
import { AuthServices } from "./service/auth.service";
import { Router } from "@angular/router";
import { Observable } from "rxjs";


export interface IDeactivatedComponent{

    onExit : ()=> boolean | Observable<boolean> | Promise <boolean>

}

export const  CanActivate=()=>{


    const authservice: AuthServices=inject(AuthServices);
    const router : Router =inject(Router);

       
    if(authservice.IsAuthenticated())
        return true
    else{
      
        router.navigate(['/Login']);
        return false;

    }

}

export const CanActivateChild= ()=>{
    return CanActivate();
}

