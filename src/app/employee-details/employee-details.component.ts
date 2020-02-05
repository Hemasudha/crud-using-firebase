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
  showDiv: boolean = false;
  constructor(private employeesService: EmployeesService) {}

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
  setTitleEdit(employee) {
    employee.canEditCode = true;
  }
  deleteEmployee(event, employee) {
    this.employeesService.deleteEmployee(employee);
  }
}
