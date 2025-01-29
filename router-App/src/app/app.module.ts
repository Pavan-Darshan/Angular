import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CoursesComponent } from "./courses/courses.component";
import { CommonModule } from "@angular/common";
import { Router } from "@angular/router";
import { RoutingModule } from "./roter.module";





@NgModule({
    declarations:[AppComponent,HeaderComponent, FooterComponent],
    providers:[CoursesComponent,Router],
    imports: [BrowserModule,CommonModule,RoutingModule],
    bootstrap:[AppComponent]
})
export class AppModule{

}