import { StudentDataComponent } from "./student/student-data/student-data.component";
import { StudentFormComponent } from "./student/student-form/student-form.component";
import { StudentAppComponent } from "./student/student-app/student-app.component";
import {RouterModule} from "@angular/Router";
import { StudentHomeComponent } from "./student-home/student-home.component";
import { AuthorizationGuards } from "./guards/auth-guards";
import { UnauthorizationGuard } from "./guards/unAuth-guard";
import { StudentModule } from "./student/student.module";

const ROUTES = [
    {path:'Home', component:StudentHomeComponent},
    {path:"data/:id", component:StudentDataComponent},
    {path:"data", component:StudentDataComponent},
    {path:"form/:id", component:StudentFormComponent, canActivate:[AuthorizationGuards]},
    {path:"form", component:StudentFormComponent},  
    {path:'app', /*loadChildren:'./app/student/student.module#StudentModule'*/ 
    loadChildren: ()=> StudentModule, canActivate:[AuthorizationGuards]},
    {path:'**', redirectTo:""}
]

export const STUDENT_ROUTES = RouterModule.forRoot(ROUTES);