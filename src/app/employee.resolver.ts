import { Employee } from "./shared/models/employees";
import { map, switchMap, take, mergeMap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import {
  Resolve,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  Router
} from "@angular/router";
import { Observable, pipe, of, EMPTY } from "rxjs";
import { EmployeesService } from "./services/employees.service";
//import 'rxjs/add/operator/switchMap';
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";
@Injectable({
  providedIn: "root"
})
export class EmployeeResolver implements Resolve<any> {
  employee: any;
  constructor(
    private es: EmployeesService,
    private router: Router,
    private afs: AngularFirestore
  ) {}
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    // console.log("Resolving for employee id:" + route.params["id"]);
    // return this.es.getId(route.paramMap.get("id"));
    // return this.es.getId("id").subscribe(data => {
    //   console.log(this.empdata);
    //   this.empdata = data;
    // });

    return this.es.getId(route.params["id"]).pipe(
      take(1),
      mergeMap(employee => {
        if (employee) {
          return of(employee);
        } else {
          // id not found
          this.router.navigate(["/invalid"]);
          return EMPTY;
        }
      })
    );
  }
}
