import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentDataComponent } from './student-data/student-data.component';
import { StudentFormComponent } from './student-form/student-form.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { StudentAppComponent } from './student-app/student-app.component';
import { StudentService } from '../student.service';
import { CustomerModule } from '../customer/customer.module';
import { CUSTOMER_ROUTES } from '../Customer.Routing';
//import { STUDENT_ROUTES } from '../App.Routing';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    CUSTOMER_ROUTES,
    CustomerModule
  ],
  exports: [
    StudentDataComponent,
    StudentFormComponent,
    StudentAppComponent
  ],
  declarations: [StudentDataComponent, StudentFormComponent, StudentAppComponent]
})
export class StudentModule { }
