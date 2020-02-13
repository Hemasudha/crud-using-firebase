import { Component, OnInit } from "@angular/core";
import { EmployeesService } from "../../services/employees.service";
import { Employee } from "../../shared/models/employees";
import { Router, ActivatedRoute } from "@angular/router";

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
  snapshotParam = "initial value";
  subscribedParam = "initial value";
  constructor(
    private employeesService: EmployeesService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

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
  appraisal(event, id) {
    this.employeesService.getId(id);
    console.log(id);

    this.router.navigate(["employees", id]);
  }
}
