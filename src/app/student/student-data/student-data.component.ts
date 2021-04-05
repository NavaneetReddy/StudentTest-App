import { Component, OnInit } from '@angular/core';
import { Student } from '../../Student';
import { Programs } from '../../Programs';
import { StudentService } from '../../student.service';
import { Router, ActivatedRoute } from '@angular/Router';

@Component({
  selector: 'app-student-data',
  templateUrl: './student-data.component.html',
  styleUrls: ['./student-data.component.css'],
})
export class StudentDataComponent implements OnInit {

  constructor(private studentService:StudentService, private router:Router, 
    private activatedRoute:ActivatedRoute) { }

 
  studentData: Array<Student> =  this.studentService.getStudentData();
  id:any;
  ngOnInit() {
   // this.studentData = this.studentService.getStudentData();
   this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  handleClick(){
    //this.routerOne.navigate(['/customerHome', true, false]);
   this.router.navigate(['/form',true]);
  }
  studentform:Student[];
  handleEdit(studentValue:Student[]){
    // return this.studentService.handleEdit(studentValue);
     this.router.navigate(['/form']);
     console.log(this.studentService.handleEdit(studentValue));
     this.studentform =  this.studentService.handleEdit(studentValue);
   }
 
  
  handleDelete(studentToDelete){
    this.studentService.handleDelete(studentToDelete);
  }
}
