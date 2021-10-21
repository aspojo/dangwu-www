import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {routerTransition} from '@app/router-animations';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {


  // Doughnut
  public doughnutChartLabels: Array<any>;
  public doughnutChartData: Array<any>;
  public doughnutChartType = 'doughnut';


  // lineChart
  public lineChartData: Array<any>;
  public lineChartLabels: Array<any>;
  public lineChartOptions: any = {
    responsive: true
  };
  public lineChartLegend = true;
  public lineChartType = 'line';
  public moduleList = [
    {name: '党员管理', icon: 'fa-adjust', bgColor: 'bg-primary', url: '/pertymember'},
    {name: '干部管理',  icon: 'fa-briefcase', bgColor: 'bg-secondary', url: '/cadres'},
    {name: '民主人士管理', icon: 'fa-binoculars', bgColor: 'bg-success', url: '/democrat'},
    {name: '统计查询',  icon: 'fa-search', bgColor: 'bg-info', url: '/query/moreinfo'},
    // {name: '待办任务', icon: 'fa-coffee', bgColor: 'bg-warning', url: '/oa/acttask/listMyTask'},
    // {name: '评价任务', permission: 'PROJECT_BASE', icon: 'fa-space-shuttle', bgColor: 'bg-danger', url: '/pm/task/listProjectTask'},
    // {name: '退出系统', icon: 'fa-sign-out', bgColor: 'bg-dark', url: 'logout'}
  ];
  externalLoginKey;

  constructor(private http: HttpClient) {
    this.initChart();
    this.getNewExternalLoginKey();
  }

  initChart() {
    this.doughnutChartLabels = [];
    this.doughnutChartData = [];
    for (let i = 0; i < 4; i++) {
      this.doughnutChartLabels.push('');
      this.doughnutChartData.push(0);
    }
    this.lineChartLabels = [];
    this.lineChartData = [{data: [], label: ''}];
    for (let i = 0; i < 30; i++) {
      this.lineChartLabels.push('');
      this.lineChartData[0].data.push(0);
    }
  }

  ngOnInit() {
    /*    this.http.post('getChartData', {}).subscribe((data: any) => {
          this.updateChartLabel(this.doughnutChartLabels, data.doughnutChartLabels);
          this.doughnutChartData = data.doughnutChartData;
          this.updateChartLabel(this.lineChartLabels, data.lineChartLabels);
          this.lineChartData = data.lineChartData;
        });*/
  }

  updateChartLabel(chartLabels, newChartLabels) {
    for (let i = 0; i < newChartLabels.length; i++) {
      chartLabels[i] = (newChartLabels[i]);
    }
  }


  getUrl(url: any) {
    return document.head.baseURI + url + '?externalLoginKey=' + this.externalLoginKey;
  }

  getNewExternalLoginKey() {
    this.http.post('getExternalLoginKey', {}).subscribe((data: any) => {
      this.externalLoginKey = data.externalLoginKey;
    });
  }

  logout() {
    this.http.post('ajaxLogout', {}).subscribe();
  }
}
