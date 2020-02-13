import { Employee } from "./../shared/models/employees";
import { Injectable } from "@angular/core";
import { of, Observable } from "rxjs";
import { catchError, map, tap } from "rxjs/operators";
import { Http, Response } from "@angular/http";
import { HttpClientModule } from "@angular/common/http";
import * as firebase from "firebase";
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
  ref = firebase.firestore().collection("employees");

  employeesC: AngularFirestoreCollection<Employee>;
  employees: Observable<Employee[]>;
  employeesDoc: AngularFirestoreDocument<Employee>;
  employee: any;
  constructor(private http: Http, public afs: AngularFirestore) {
    this.employeesC = this.afs.collection("employees", ref =>
      ref.orderBy("age", "asc")
    );
    this.employees = afs.collection("employees").valueChanges();

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

  getId(id: string): Observable<any> {
    return new Observable(observer => {
      this.ref
        .doc(id)
        .get()
        .then(doc => {
          let data = doc.data();
          observer.next({
            key: doc.id,
            name: data.name,
            age: data.age,
            salary: data.salary
          });
        });
    });
  }
}
