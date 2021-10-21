import { Component, OnInit } from '@angular/core';
import {routerTransition} from '@app/router-animations';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  animations: [routerTransition()],

})
export class StartComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
