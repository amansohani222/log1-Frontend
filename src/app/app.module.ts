import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ConsultantComponent } from "./consultant/consultant.component";
import { ConsultantService } from "./consultant/consultant.service";
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { EmployeeService } from "./employee/employee.service";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { EmployeeComponent } from "./employee/employee.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth/auth.guard";
import { ConsultantListComponent } from "./consultant/consultant-list/consultant-list.component";
import { ConsultantDetailsComponent } from './consultant/consultant-details/consultant-details.component';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ConsultantComponent,
    EmployeeListComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    PageNotFoundComponent,
    ConsultantListComponent,
    ConsultantDetailsComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ConsultantService, EmployeeService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
