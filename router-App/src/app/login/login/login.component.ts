import { Component, ElementRef, inject, ViewChild } from '@angular/core';
import { AuthServices } from '../../service/auth.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  standalone:false
 
 
})
export class LoginComponent {


  authService :AuthServices = inject(AuthServices);

  @ViewChild('username')username:ElementRef;
  @ViewChild('password')password:ElementRef;
  router :Router = inject(Router);

  activeRouter :ActivatedRoute = inject(ActivatedRoute);


  ngOnInit(){
    this.activeRouter.queryParamMap.subscribe((queries)=>{
      const LogOut=Boolean(queries.get('logout'));

      if(LogOut){
        this.authService.OnlogOut();
        alert("You are now logged Out")
      }
    })
  }

  Onlog(){

    const username =this.username.nativeElement.value;
    const password =this.password.nativeElement.value;
   
    let userData=this.authService.OnLogin(username,password);

    if(userData === undefined)
      alert("UserName and Password not Correct");
    else{
      alert("Welcome" + userData.name +".You are logged in");
      this.router.navigate(['/Course']);
    }

  }

  
}