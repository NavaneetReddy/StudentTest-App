import { CustomerHomeComponent } from "./customer/customer-home/customer-home.component";
import { CustomerDataComponent } from "./customer/customer-data.component";
import { CustomerListComponent } from "./customer/customer-list.component";
import { RouterModule } from "@angular/Router";
import { StudentAppComponent } from "./student/student-app/student-app.component";


const ROUTES = [
    {path:"", component:StudentAppComponent},
   // {path:'customerHome/:id', component:CustomerHomeComponent},
    {path:"", component:StudentAppComponent, children:[
        {path:'customerHome', component:CustomerHomeComponent},
        {path:'customerData', component:CustomerDataComponent},
        {path:'customerlist', component:CustomerListComponent}
    ]},
];


export const CUSTOMER_ROUTES = RouterModule.forChild(ROUTES);    