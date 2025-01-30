import { ElementRef, inject, Injectable, ViewChild } from "@angular/core";
import { User } from "../Model/user";
import { UserService } from "./user.serevice";
import { Router } from "@angular/router";

@Injectable({
    providedIn:'root'
})

export class AuthServices{

        isLogged: boolean = false;

        userService :UserService=inject(UserService);
    

        

    OnLogin(username :string,password :string){

        const loggedUser = this.userService.users.find((user)=> user.username === username && user.password === password);

        if(loggedUser !== undefined)
            this.isLogged=true;
        return loggedUser;
    }

    OnlogOut(){
       
        this.isLogged = false;
      
    }

    IsAuthenticated(){
        return this.isLogged;
    }
}