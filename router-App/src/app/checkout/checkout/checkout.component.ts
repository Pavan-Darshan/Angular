import { Component, inject} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent {


activateRoute :ActivatedRoute = inject(ActivatedRoute);
cousre;
  ngOnInIt(){
      this.activateRoute.data.subscribe((data)=>{
          this.cousre = data;
      })
  }
}