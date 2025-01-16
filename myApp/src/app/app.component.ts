import { Component } from '@angular/core';
import { HeaderComponent } from './header/header.component';
import { AppImage } from './Image/image.component';
import {UserComponent} from './user/user.component';
import { TasksComponent } from './tasks/tasks.component';
import { DUMMY_USERS } from './dummy-users';
import { NgFor,NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myApp';
  user=DUMMY_USERS;
 
  userSelectedId?:string;
  get selectUser(){
  
    return this.user.find((user)=>user.id === this.userSelectedId);
    
  }
  get imagePath(){
    return 'assets/users/' + this.selectUser?.avatar;
  }

  onUserSelect(id:string){
    
    this.userSelectedId=id;
      
  }
}
