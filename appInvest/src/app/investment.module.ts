import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { InvestmentResultComponent } from "./investment-result/investment-result.component";
import { UserInputModule } from "./user-input/user.module";


@NgModule({
    declarations:[AppComponent,HeaderComponent,InvestmentResultComponent],
    imports: [BrowserModule, UserInputModule],
    bootstrap:[AppComponent]
})
export class InvestmentModule{}