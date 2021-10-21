import {Component, OnInit} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-debugger',
  templateUrl: './debugger.component.html',
  animations: [routerTransition()],

})
export class DebuggerComponent implements OnInit {
  apiUrl: any;
  submitData: any = '{}';
  returnData: any;

  constructor(public http: HttpClient) {
  }

  ngOnInit() {
  }

  submitClick() {
    let submitJson;
    if (this.submitData) {
      submitJson = JSON.parse(this.submitData);
    }
    this.http.post(this.apiUrl, submitJson).subscribe(data => {
      this.returnData = JSON.stringify(data);
    });
  }

}
