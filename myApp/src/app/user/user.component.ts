import { Component, computed, EventEmitter, input, Input, output, Output, signal } from '@angular/core';
// import { DUMMY_USERS } from '../dummy-users';


// const index=Math.floor(Math.random()*DUMMY_USERS.length);


// type User={
//   id:string,
//   avatar:string,
//   name:string
// } or
interface User{
  id:string,
  avatar:string,
  name:string
}



@Component({
  selector: 'app-user',
  imports: [],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {
  // signals---------------->
  // selectuser= signal(DUMMY_USERS[index]);
  // imagePath= computed(()=> 'assets/users/' + this.selectuser().avatar);


  // Input Decorator---------->
  // @Input({required:true}) id!:string;
  // @Input({required:true}) avatar !:string;
  // @Input({required:true}) name!:string;

  @Input({required:true}) users!: User;
  @Output() select=new EventEmitter<string>();
  

  get imagePath(){
    return 'assets/users/' + this.users.avatar;
  }
  //input signals------------------>
  // avatar = input.required<string>();
  // name = input.required<string>();
  // imagePath= computed(()=> 'assets/users/' + this.avatar());
  // select=output<string>(); // it is not a signal it also included eventemitter

  onSelect(){
    // const index=Math.floor(Math.random()*DUMMY_USERS.length);
    // this.selectuser.set(DUMMY_USERS[index]);
    // this.select.emit(this.name);
    this.select.emit(this.users.id);
    
  }


}
