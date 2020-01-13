import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ConsultantService } from "../consultant.service";
import { Chart } from "chart.js";
@Component({
  selector: "app-consultant-details",
  templateUrl: "./consultant-details.component.html",
  styleUrls: ["./consultant-details.component.css"]
})
export class ConsultantDetailsComponent implements OnInit {
  public consultant;
  BarChart = [];
  constructor(
    private route: ActivatedRoute,
    private consultantService: ConsultantService
  ) {}
  getConsultant(id) {
    this.consultantService.getConsultantById(id).subscribe(consultant => {
      this.consultant = consultant;
      this.displayChart(consultant);
    });
  }

  displayChart(consultant) {
    this.BarChart = new Chart("barChart", {
      type: "bar",
      data: {
        labels: ["Submissions", "Interviews", "Projects"],
        datasets: [
          {
            label: "# of Votes",
            data: [
              consultant.submission_count,
              consultant.interview_count,
              consultant.project_count
            ],
            backgroundColor: ["red", "blue", "green"],
            borderColor: ["black", "black", "black"],
            borderWidth: 1
          }
        ]
      },
      options: {
        title: {
          text: "Bar Chart",
          display: true
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true
              }
            }
          ]
        }
      }
    });
  }

  ngOnInit() {
    let id = parseInt(this.route.snapshot.paramMap.get("id"));
    this.getConsultant(id);
  }
}
