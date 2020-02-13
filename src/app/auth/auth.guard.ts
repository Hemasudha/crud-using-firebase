import { AuthService } from "./auth.service";
import { Injectable } from "@angular/core";
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable } from "rxjs";
import { ADMIN_ROLE } from "../shared/constants";

@Injectable({
  providedIn: "root"
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) {}
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean> | Promise<boolean> | boolean {
    const loggedinUserRole = "admin";
    if (
      ADMIN_ROLE.toString().toLowerCase() ==
      loggedinUserRole.toString().toLowerCase()
    ) {
      return true;
    } else {
      this.router.navigate(["/access"]);
    }
  }
}
