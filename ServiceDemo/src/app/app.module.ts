import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./header/header.component";
import { NewCompComponent } from "./new-comp/new-comp.component";
import { Services } from "./app.services";

@NgModule({
    imports:[BrowserModule,HeaderComponent,NewCompComponent],
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    providers:[Services]
})



export class AppModule{}