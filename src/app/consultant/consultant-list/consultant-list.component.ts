import { Component, OnInit } from "@angular/core";
import { ConsultantService } from "../consultant.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-consultant-list",
  templateUrl: "./consultant-list.component.html",
  styleUrls: ["./consultant-list.component.css"]
})
export class ConsultantListComponent implements OnInit {
  consultants: any[];
  first_name = "";
  last_name = "";

  constructor(
    private consultantService: ConsultantService,
    private router: Router
  ) {}

  consultantClicked(consultant) {
    this.router.navigate(["/consultants/", consultant.id]);
  }

  getConsultants(): void {
    console.log("HELLO");
    console.log(name);
    this.consultantService.params = this.consultantService.params.append(
      "first_name",
      this.first_name
    );
    this.consultantService.params = this.consultantService.params.append(
      "last_name",
      this.last_name
    );
    this.consultantService.getConsultants().subscribe(consultants => {
      console.log(consultants, "Asssssssssss");
      this.consultants = consultants;
    });
  }
  ngOnInit() {}
}
