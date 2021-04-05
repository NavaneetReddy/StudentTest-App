import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/Router";
import { StudentAppComponent } from "../student/student-app/student-app.component";
import { Observable } from "rxjs/Observable";

export class UnauthorizationGuard implements CanDeactivate<StudentAppComponent> {
    canDeactivate(component: StudentAppComponent, currentRoute: ActivatedRouteSnapshot,
         currentState: RouterStateSnapshot, nextState?: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        //throw new Error("Method not implemented.");
        return confirm("are you sure? you want leave studentApp page");
    }
}