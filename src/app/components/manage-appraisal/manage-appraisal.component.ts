import { map } from "rxjs/operators";
import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Employee } from "../../shared/models/employees";
import { ActivatedRoute, Router } from "@angular/router";
import { EmployeesService } from "src/app/services/employees.service";
@Component({
  selector: "app-manage-appraisal",
  templateUrl: "./manage-appraisal.component.html",
  styleUrls: ["./manage-appraisal.component.css"]
})
export class ManageAppraisalComponent implements OnInit {
  // employee: Employee[] = [];
  id: any;
  hike: any;
  salary;
  currentSalary: any;
  appraisal: any;

  employee: any;
  editEmp: boolean;
  empEdit: any;

  constructor(
    private route: ActivatedRoute,
    private es: EmployeesService,
    private router: Router
  ) {
    // this.es.getId(this.route.snapshot.params["id"]).subscribe(data => {
    //   console.log(data);
    //   this.employee = data;
    // });
  }
  @Input() employees;
  ngOnInit() {
    this.route.data.subscribe((data: { employee: Employee }) => {
      this.employee = data.employee;
    });

    console.log(this.employee);
  }

  increment(e) {
    this.salary = parseInt(this.employee.salary);
    this.appraisal = ((this.hike / this.salary) * 100).toFixed(2);

    this.salary = this.hike + this.salary;
    console.log(this.salary);
  }
  // save(event, empdata) {
  //   this.es.updateEmployee(empdata);
  //   // this.saveData.emit(this.currentSalary);
  //   this.router.navigate(["/employees"]);
  // }

  save(employee) {
    this.editEmp = true;
    this.empEdit = employee;
    this.es.updateEmployee(employee.salary);
  }
}
