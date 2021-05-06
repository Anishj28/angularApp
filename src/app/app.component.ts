import { Component } from '@angular/core';
import {NgForm} from '@angular/forms'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  users=[];
  
  addUser(ref:NgForm){

    let userObj=ref.value;
    //push users to array
    this.users.push(userObj);
    //Clear Form
    ref.reset();
}
  //Delete User
  deleteUser(index){
      this.users.splice(index,1);
  }
}
