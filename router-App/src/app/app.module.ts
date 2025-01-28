import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { BrowserModule } from "@angular/platform-browser";
import { RouterLink, RouterLinkActive, RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { ContactComponent } from "./contact/contact.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { CommonModule } from "@angular/common";


const routes :Routes =[
    // {path:'',component:HomeComponent},
    {path : '',redirectTo:'Home',pathMatch : 'full'},
    {path : 'Home',component:HomeComponent},
    {path : 'About',component:AboutComponent},
    {path : 'Contact',component:ContactComponent},
    {path : '**',component:NotFoundComponent}
]

@NgModule({
    declarations:[AppComponent,HeaderComponent, FooterComponent],
    providers:[],
    imports: [BrowserModule, RouterModule.forRoot(routes)],
    bootstrap:[AppComponent]
})
export class AppModule{

}