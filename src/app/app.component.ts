import { Component, OnInit } from '@angular/core';
import { AuthService } from './auth.service';
import { Chart, registerables } from 'chart.js';
import { Posts1 } from './posts1';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  posts: Posts1[]=[];
  chart: any = [];
 

  constructor(private service: AuthService) {
  
    Chart.register(...registerables);
  }

  ngOnInit(): void {
    this.service.getPosts().subscribe((response: any[])=>{
      this.posts=response;
    })
  

      this.chart = new Chart('canvas', {
        type: 'line',
        data: {
            labels: ['1', '2', '3', '4', '5', '6'],
            datasets: [{
                label: '',
                data: [12, 19, 3, 5, 2, 3],
                backgroundColor: 'rgb(255, 99, 132)',

                borderColor: 'rgb(255, 99, 132)',

                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
     
  }
  }
