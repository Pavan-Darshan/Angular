import { Component, inject } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

  activateRoute :ActivatedRoute = inject(ActivatedRoute);

   router :Router =inject(Router);
  onSearch(){
      this.router.navigate(["About"]); // by default absolute path

      // this.router.navigateByUrl('Contact'); // by default absolute path

      // this.router.navigate(["About"], {relativeTo: this.activateRoute});  // to make relative by using ActivatedRoute
  }

}
