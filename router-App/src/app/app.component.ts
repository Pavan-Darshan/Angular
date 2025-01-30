import { Component, inject } from '@angular/core';
import { ActivatedRoute, NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router } from '@angular/router';


@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [Router]
})
export class AppComponent {
  title = 'router-App';
 

 constructor(private router:Router){}
 showLoader :boolean= false;
  
  OnSearch(data : string){

  this.router.navigate(['../Course'],{queryParams :{serach : data}});
   
}

activeRouter : ActivatedRoute = inject(ActivatedRoute);

ngOnInit(){

  this.activeRouter.fragment.subscribe((data)=>{
    this.JumpSection(data);})

    this.router.events.subscribe((routerEvent)=>{
      if(routerEvent instanceof NavigationStart){
        this.showLoader=true;
      }

      if(routerEvent instanceof NavigationEnd || routerEvent instanceof NavigationCancel || routerEvent instanceof NavigationError){
        this.showLoader=false;
      }
    })

}

JumpSection(id :string){

    document.getElementById(id).scrollIntoView({behavior:'smooth'});

}
}
