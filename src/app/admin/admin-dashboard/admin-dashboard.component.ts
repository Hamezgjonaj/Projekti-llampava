import { Component, OnInit } from '@angular/core';
import * as ChartDataLabels from 'chartjs-plugin-datalabels';
import 'chart.js';
import { FirebaseService } from 'src/app/firebase.service';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.scss'],
})
export class AdminDashboardComponent implements OnInit {
  ngOnInit(): void {
    this.firebase.getData().subscribe((data: any) => {
      let sasiaEProdukteve: any = [];
      let labels: any = [];
      data.map((item: any) => {
        sasiaEProdukteve = [...sasiaEProdukteve, item.sasia];
        labels = [...labels, item.emer];
      });
      this.produktet.datasets[0].data = sasiaEProdukteve;
      this.produktet.labels = labels;
      console.log(this.produktet)
    });
  }

  constructor(private firebase: FirebaseService) {}

  public produktet = {
    plugins: [ChartDataLabels],
    datasets: [
      {
        data: [],
        label: 'Sasia Fillestare',
        type: 'bar',
        backgroundColor: '#FC8D02',
        hoverBackgroundColor: '#ffa726',
        fillColor: '#000000',
        strokeColor: 'rgba(220,220,220,0.8)',
        highlightFill: 'rgba(220,220,220,0.75)',
        highlightStroke: 'rgba(220,220,220,1)',
        datalabels: {
          align: 'bottom',
          color: 'black',
        },
      },
    ],
    labels: [],
    options: {
      responsive: true,
      tooltipTemplate: '<%= value %>',
      tooltipFillColor: 'rgba(0,0,0,0)',
      tooltipFontColor: '#444',
      tooltipEvents: [],
      tooltipCaretSize: 0,
      onAnimationComplete: function () {},
    },
  };
}
