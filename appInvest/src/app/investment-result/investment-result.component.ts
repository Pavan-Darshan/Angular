import { CurrencyPipe } from '@angular/common';
import { Component, computed, inject, Input } from '@angular/core';
import { Services } from '../app.services';

@Component({
  selector: 'app-investment-result',
  standalone : false,
  templateUrl: './investment-result.component.html',
  styleUrl: './investment-result.component.css'
})
export class InvestmentResultComponent {
// @Input() result ?:{
//   year: number,
//   interest: number,
//   valueEndOfYear: number,
//   annualInvestment: number,
//   totalInterest: number,
//   totalAmountInvested:  number,

// }[];

private investmentServices =inject(Services);

// get results(){
//   return this.investmentServices.resultData;
// }
results = computed(()=> this.investmentServices.resultData());
}
