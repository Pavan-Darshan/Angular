import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UserComponent } from "./user/user.component";
import { TaskComponent } from "./tasks/task/task.component";
import { BrowserModule } from "@angular/platform-browser";
import { HeaderComponent } from "./header/header.component";
import { AppImage } from "./Image/image.component";
import { TasksComponent } from "./tasks/tasks.component";

@NgModule({
    declarations:[AppComponent],
    bootstrap:[AppComponent],
    imports:[BrowserModule,UserComponent,TaskComponent,HeaderComponent,AppImage,TasksComponent]
    
})
export class AppModule{

}