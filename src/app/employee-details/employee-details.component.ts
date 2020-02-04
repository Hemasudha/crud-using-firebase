import {
  AngularFireDatabaseModule,
  AngularFireDatabase
} from "@angular/fire/database";
import { User } from "./../../user";
import { Component, OnInit, Output, EventEmitter } from "@angular/core";
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
  showDiv: boolean = false;
  public details;
  constructor(private employeesService: EmployeesService) {}

  @Output() empDetails = new EventEmitter();

  ngOnInit() {
    this.employeesService.getUser().subscribe(res => {
      this.employees = res;
      console.log(res);
    });
  }
  changeCount(data) {
    console.log(data);
    this.showDiv = false;
  }
  edit(event) {
    this.showDiv = true;
  }
  deleteEmployee(event, employee) {
    this.employeesService.deleteEmployee(employee);
  }
}
