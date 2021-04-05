import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerHomeComponent } from './customer-home/customer-home.component';
import { CustomerDataComponent } from './customer-data.component';
import { CustomerListComponent } from './customer-list.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CustomerService } from '../Customer.Service';
//import { CUSTOMER_ROUTES } from '../Customer.Routing';


@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
   // CUSTOMER_ROUTES
  ],
  providers: [CustomerService],
  exports: [
    CustomerHomeComponent, 
    CustomerDataComponent, 
    CustomerListComponent
  ], 
  declarations: [CustomerHomeComponent, CustomerDataComponent, CustomerListComponent],
  
})
export class CustomerModule { }
