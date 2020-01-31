import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from "@angular/fire/database";
import { User } from "./../../user";
import { Component, OnInit } from "@angular/core";
import { EmployeesService } from "../employees.service";
import { Employee } from "../employees";

@Component({
  selector: "app-employee-details",
  templateUrl: "./employee-details.component.html",
  styleUrls: ["./employee-details.component.css"]
})
export class EmployeeDetailsComponent implements OnInit {
  employees: Employee[];
  editEmp: boolean = false;
  empEdit: Employee;
  hidden: boolean = true;
  // constructor(db: AngularFireDatabase) {
  //   db.list("/users")
  //     .valueChanges()
  //     .subscribe(users => {
  //       this.users = users;
  //       console.log(this.users);
  //     });
  // }
  constructor(private employeesService: EmployeesService) {}

  ngOnInit() {
    this.employeesService.getUser().subscribe(res => {
      this.employees = res;
      console.log(res);
    });
  }

  updateEmployee(event, employee) {
    this.editEmp = true;
    this.empEdit = employee;
    this.employeesService.updateEmployee(employee);
    // this.hidden = false;
  }
  deleteEmployee(event, employee) {
    this.employeesService.deleteEmployee(employee);
  }
  clearState() {
    this.editEmp = false;
    this.empEdit = null;
  }
  hideTable() {
    this.hidden = false;
  }
}
