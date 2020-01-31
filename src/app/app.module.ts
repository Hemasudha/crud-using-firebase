import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AppComponent } from "./app.component";
import { EmployeeDetailsComponent } from "./employee-details/employee-details.component";
import { EmployeesService } from "./employees.service";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { DataTableModule } from "angular-6-datatable";
import { HttpClientModule } from "@angular/common/http";
import { environment } from "src/environments/environment";
import { NavbarComponent } from "./navbar/navbar.component";
import { CreateEmployeeComponent } from "./create-employee/create-employee.component";

const appRoutes: Routes = [
  { path: "create", component: CreateEmployeeComponent },
  {
    path: "employees",
    component: EmployeeDetailsComponent
  },
  {
    path: "",
    redirectTo: "/employees",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    DataTableModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    NavbarComponent,
    CreateEmployeeComponent
  ],

  providers: [EmployeesService],
  bootstrap: [AppComponent]
})
export class AppModule {}
