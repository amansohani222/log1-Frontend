import { Component, OnInit } from "@angular/core";
import { ConsultantService } from "../consultant/consultant.service";
import { Chart } from "chart.js";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  public consultantData: any[];
  public employeeData: any[];
  BarChart = [];

  constructor(private consultantService: ConsultantService) {}
  getDashboard() {
    this.consultantService.getDashboard().subscribe(data => {
      console.log(data.consultant[0]);
      this.consultantData = data.consultant;
      this.displayChart(data.consultant, "total consultants");
      this.displayChart(data.current_employee, "employee's consultants");
      this.employeeData = data.current_employee;
    });
  }

  displayChart(parameters, id) {
    this.BarChart = new Chart(id, {
      type: "bar",
      data: {
        labels: ["2 month ago", "1 month ago", "current month"],
        datasets: [
          {
            label: "Submissions",
            data: parameters[0].reverse(),
            barThickness: 20,
            backgroundColor: ["yellow", "yellow", "yellow"],
            borderColor: ["black", "black", "black"],
            borderWidth: 1
          },
          {
            label: "Interviews",
            barThickness: 20,
            data: parameters[1].reverse(),
            backgroundColor: ["blue", "blue", "blue"],
            borderColor: ["black", "black", "black"],
            borderWidth: 1
          },
          {
            label: "Projects",
            barThickness: 20,
            data: parameters[2].reverse(),
            backgroundColor: ["green", "green", "green"],
            borderColor: ["black", "black", "black"],
            borderWidth: 1
          }
        ]
      },
      options: {
        legend: {
          display: true,
          labels: {
            fontColor: "green"
          }
        },
        responsive: true,
        title: {
          text: id,
          display: true
        },
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                stepSize: 1
              }
            }
          ]
        }
      }
    });
  }

  ngOnInit() {
    this.getDashboard();
  }
}
