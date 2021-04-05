import { Component } from '@angular/core';
import { Student } from './Student';
import { Programs } from './Programs';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

 
 fan = {name:"null",city:"hyd"}

 name = "";

 handleClick(event:KeyboardEvent){
   console.log(this.name); 
 }

 handleInput(event){
  this.name = (<HTMLInputElement>event.target).value; 
  console.log(event.target.value); 
  console.log(this.name);
 }

 










}


