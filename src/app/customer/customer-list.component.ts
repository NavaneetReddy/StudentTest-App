import { Component, OnInit } from '@angular/core';
import { CustomerService } from '../Customer.Service';

@Component({
  selector: 'app-customer-list',
  template: `
    <p>
      customer-list works!
    </p>
    <ul>
    <li *ngFor="let courses of course">{{courses.id+" "+" "+courses.title}}</li>
    </ul>

  `,
  styles: []
})
export class CustomerListComponent implements OnInit {

  constructor(private customerService:CustomerService) {

   
   }

   course:Array<any> = this.customerService.getCourse();

  ngOnInit() {

  }

}
