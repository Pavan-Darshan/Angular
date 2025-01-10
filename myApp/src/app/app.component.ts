import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppImage } from './Image/image.component';
import {UserComponent} from './user/user.component';
import { DUMMY_USERS } from './dummy-users';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,AppImage,UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  users=DUMMY_USERS;
  onUserSelect(id:string){
      console.log(id);
      
  }
}
