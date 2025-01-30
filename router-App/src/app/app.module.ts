import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { CoursesComponent } from "./courses/courses.component";
import { CommonModule } from "@angular/common";
import { ActivatedRoute, Router } from "@angular/router";
import { RoutingModule } from "./roter.module";
import { LoginComponent } from "./login/login/login.component";
import { AuthServices } from "./service/auth.service";
import { UserService } from "./service/user.serevice";
import { FormsModule } from "@angular/forms";
import { ContactComponent } from "./contact/contact.component";





@NgModule({
    declarations:[AppComponent,HeaderComponent, FooterComponent,LoginComponent],
    providers:[CoursesComponent,Router,AuthServices,UserService],
    imports: [BrowserModule,CommonModule,RoutingModule,FormsModule,ContactComponent],
    bootstrap:[AppComponent]
})
export class AppModule{

}