import { Component, OnInit } from '@angular/core';
import { Student } from '../../Student';
import { Router } from '@angular/Router';

@Component({
  selector: 'app-student-app',
  templateUrl: './student-app.component.html',
  styleUrls: ['./student-app.component.css']
})
export class StudentAppComponent implements OnInit {

  
  constructor(private router:Router) { }

  ngOnInit() {
  }

  handleClick(){
   // this.router.navigate(['/customerHome'],{queryParams:{id:1}});
  }

 
}
