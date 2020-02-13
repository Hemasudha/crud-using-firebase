import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { CreateEmployeeComponent } from "../components/create-employee/create-employee.component";
import { EmployeeDetailsComponent } from "../components/employee-details/employee-details.component";
import { Routes, RouterModule } from "@angular/router";
import { InvalidComponent } from "../components/invalid/invalid.component";
import { AuthGuard } from "../auth/auth.guard";
import { AccessComponent } from "../components/access/access.component";
import { ManageAppraisalComponent } from "../components/manage-appraisal/manage-appraisal.component";
import { EmployeeResolver } from "../employee.resolver";
const appRoutes: Routes = [
  {
    path: "create",
    component: CreateEmployeeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "employees",
    component: EmployeeDetailsComponent
  },
  {
    path: "",
    redirectTo: "/employees",
    pathMatch: "full"
  },
  {
    path: "access",
    component: AccessComponent
  },

  // {
  //   path: "**",
  //   component: InvalidComponent
  // },
  {
    path: "employees/:id",
    component: ManageAppraisalComponent,
    resolve: {
      employee: EmployeeResolver
    }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forRoot(appRoutes)],
  declarations: [],
  exports: [RouterModule]
})
export class AppRoutingModule {}
