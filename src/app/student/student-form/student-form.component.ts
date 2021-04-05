import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Student } from '../../Student';
import { Programs } from '../../Programs';
import { StudentService } from '../../student.service';
import { Router, ActivatedRoute } from '@angular/Router';
import { FormGroup, FormBuilder, Validators, NG_ASYNC_VALIDATORS } from '@angular/forms';

@Component({
  selector: 'app-student-form',
  templateUrl: './student-form.component.html',
  styleUrls: ['./student-form.component.css']
})
export class StudentFormComponent implements OnInit {

  courses = Object.keys(Programs);

  student: Student = new Student(1, "creating", "student", "form", Programs.CS);

  userForm: FormGroup
  constructor(private studentService: StudentService, private router: Router,
    private activatedRoute: ActivatedRoute, private _fb: FormBuilder) {
    this.userForm = _fb.group({
      studentID: _fb.control(''),
      firstName: _fb.control('', [Validators.required, Validators.minLength(4)],),
      middleName: _fb.control(''),
      lastName: _fb.control(''),
      interestedCourse: _fb.control('')
    })
  }

  id: any;

  studentEdit:Student[];

  ngOnInit() {

    console.log(this.studentEdit)
    //this.studentService.addStudent(this.student);
  }

  handleEdit(studentValue){
    this.studentEdit = studentValue;
    console.log(studentValue)
  }


  // studentDetails: EventEmitter<Student> = new EventEmitter();
  handleSubmit() {
    this.studentService.addStudent(this.userForm.value);
    this.router.navigate(['/data', 'form']);
  }

  get uName(){
    return this.userForm.controls['firstName'];
  }

  handleClick() {
    this.router.navigate(['/data', 'form']);
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
  }

  getID() {
    for (let i = this.studentService.student.length - 1;
      i < this.studentService.student.length;
      this.studentService.student[i].studentID++) {
      //this.student.studentID++;
    };
  }

  
  

}
