import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ConsultantComponent } from "./consultant/consultant.component";
import { ConsultantService } from "./consultant.service";
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { EmployeeService } from "./employee/employee.service";
import { LoginComponent } from "./login/login.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { EmployeeComponent } from "./employee/employee.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    ConsultantComponent,
    EmployeeListComponent,
    LoginComponent,
    HeaderComponent,
    FooterComponent,
    EmployeeComponent,
    PageNotFoundComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ConsultantService, EmployeeService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {}
