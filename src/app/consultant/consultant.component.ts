import { Component, OnInit } from "@angular/core";
import { ConsultantService } from "../consultant.service";
@Component({
  selector: "app-consultant",
  templateUrl: "./consultant.component.html",
  styleUrls: ["./consultant.component.css"]
})
export class ConsultantComponent implements OnInit {
  consultants: any[];

  constructor(private consultantService: ConsultantService) {}

  getConsultants(): void {
    this.consultantService.getConsultants().subscribe(consultants => {
      console.log(consultants);
      this.consultants = consultants;
    });
  }

  ngOnInit() {
    this.getConsultants();
  }
}
