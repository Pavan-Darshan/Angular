import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


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
  
  OnSearch(data : string){

  this.router.navigate(['../Course'],{queryParams :{serach : data}});
   
}

activeRouter : ActivatedRoute = inject(ActivatedRoute);

ngOnInit(){

  this.activeRouter.fragment.subscribe((data)=>{
    this.JumpSection(data);
    
  })

}

JumpSection(id :string){
  document.getElementById(id).scrollIntoView({behavior:'smooth'});
}
}
