import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/Router";
import { Observable } from "rxjs/Observable";

export class AuthorizationGuards implements CanActivate {
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | Observable<boolean> | Promise<boolean> {
        //throw new Error("Method not implemented.");
        //console.log("am in guards");
        return true;
    }
}