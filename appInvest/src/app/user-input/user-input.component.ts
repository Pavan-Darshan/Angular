import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { Services } from '../app.services';

@Component({
  selector: 'app-user-input',
  standalone:false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  // @Output() calculate =new EventEmitter<InvestmentInput>()

  constructor(private investmentService : Services){

  }
  enteredInitialInvestment = signal("0");
  enteredAnnualInvestment = signal("0");
  enteredExpectedReturn = signal('5');
  enteredDuration = signal('10');
  onSubmit(){
    this.investmentService.onCalculateInvestmentResults(
 {
      initialInvestment : +this.enteredAnnualInvestment(),
      annualInvestment : +this.enteredAnnualInvestment(),
      expectedReturn : +this.enteredExpectedReturn(),
      duration : +this.enteredDuration(),
    })
    
    
  }
}
