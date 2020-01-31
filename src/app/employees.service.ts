import { Employee } from "./employees";
import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Http, Response } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import {
  AngularFirestore,
  AngularFirestoreCollection,
  AngularFirestoreDocument
} from "@angular/fire/firestore";

@Injectable({
  providedIn: "root"
})
export class EmployeesService {
  //users: any = {};
  employeesC: AngularFirestoreCollection<Employee>;
  employees: Observable<Employee[]>;
  employeesDoc: AngularFirestoreDocument<Employee>;
  constructor(private http: Http, public afs: AngularFirestore) {
    this.employeesC = this.afs.collection("employees", ref =>
      ref.orderBy("age", "asc")
    );

    this.employees = this.employeesC.snapshotChanges().pipe(
      map(changes => {
        return changes.map(a => {
          const data = a.payload.doc.data() as Employee;
          data.id = a.payload.doc.id;
          return data;
        });
      })
    );
  }

  getUser() {
    return this.employees;
  }
  createUser(employee: Employee) {
    return this.employeesC.add(employee);
  }
  updateEmployee(employee: Employee) {
    this.employeesDoc = this.afs.doc(`employees/${employee.id}`);
    this.employeesDoc.update(employee);
  }
  deleteEmployee(employee: Employee) {
    this.employeesDoc = this.afs.doc(`employees/${employee.id}`);
    this.employeesDoc.delete();
  }
}
