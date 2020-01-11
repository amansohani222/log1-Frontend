import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "./login/login.component";
import { EmployeeListComponent } from "./employee/employee-list/employee-list.component";
import { ConsultantComponent } from "./consultant/consultant.component";
import { PageNotFoundComponent } from "./page-not-found/page-not-found.component";
import { AuthGuard } from "./auth/auth.guard";

const routes: Routes = [
  { path: "", pathMatch: "full", redirectTo: "login" },
  { path: "login", component: LoginComponent },
  {
    path: "employees",
    component: EmployeeListComponent,
    canActivate: [AuthGuard]
  },
  { path: "consultants", component: ConsultantComponent },
  { path: "**", component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
