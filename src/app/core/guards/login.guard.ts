import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router } from "@angular/router";

@Injectable({
    providedIn: 'root'
})
export class LoginGuard implements CanActivate {
    constructor(private readonly router: Router) { }

    canActivate(route: ActivatedRouteSnapshot) {
        let token = localStorage.getItem("token");
        if(!token) {
            this.router.navigate(['/login']);
            return false;
        }
        return true;
    }

}