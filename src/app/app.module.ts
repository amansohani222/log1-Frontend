import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { ConsultantComponent } from "./consultant/consultant.component";
import { ConsultantService } from "./consultant.service";
import { EmployeeListComponent } from "./employee-list/employee-list.component";
import { EmployeeService } from "./employee.service";

@NgModule({
  declarations: [AppComponent, ConsultantComponent, EmployeeListComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [ConsultantService, EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule {}
