import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AngularFireModule } from "@angular/fire";
import { AngularFirestoreModule } from "@angular/fire/firestore";
import { AngularFireDatabaseModule } from "@angular/fire/database";
import { AppComponent } from "./app.component";
import { EmployeeDetailsComponent } from "./components/employee-details/employee-details.component";
import { EmployeesService } from "./services/employees.service";
import { HttpModule } from "@angular/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { DataTableModule } from "angular-6-datatable";
import { HttpClientModule } from "@angular/common/http";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { ToastrModule } from "ng6-toastr-notifications";
import { environment } from "src/environments/environment";
import { NavbarComponent } from "./shared/components/navbar/navbar.component";
import { CreateEmployeeComponent } from "./components/create-employee/create-employee.component";
import { UpdateEmployeeComponent } from "./components/update-employee/update-employee.component";
import { AppRoutingModule } from "./app-routing/app-routing.module";
import { InvalidComponent } from "./components/invalid/invalid.component";
import { AccessComponent } from "./components/access/access.component";
import { ManageAppraisalComponent } from "./components/manage-appraisal/manage-appraisal.component";
import { EmployeeResolver } from "./employee.resolver";
@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule,
    AngularFirestoreModule,
    FormsModule,
    DataTableModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    EmployeeDetailsComponent,
    NavbarComponent,
    CreateEmployeeComponent,
    UpdateEmployeeComponent,
    InvalidComponent,
    AccessComponent,
    ManageAppraisalComponent
  ],

  providers: [EmployeesService, EmployeeResolver],
  bootstrap: [AppComponent]
})
export class AppModule {}
