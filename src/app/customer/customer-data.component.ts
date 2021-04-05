import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Customer.Service';

@Component({
  selector: 'app-customer-data',
  template: `
    <p>
      customer-data works!
    </p>
    <input type = "text" [(ngModel)]="course">
    <button class="btn.btn-primary" (click)="handleSubmit($event)">ADD</button>
   

  `,
  styles: []
})
export class CustomerDataComponent implements OnInit {

  course:Array<any>;

  constructor(private customerService:CustomerService) { }

  ngOnInit() {

  }

  handleSubmit(event){
    this.customerService.addCourse(this.course);
    console.log(this.course);
    console.log(event);
  }

}
