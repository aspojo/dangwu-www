import { Component, OnInit } from '@angular/core';
import {routerTransition} from '@app/router-animations';

@Component({
  selector: 'app-complex-develop',
  templateUrl: './complex-develop.component.html',
  animations: [routerTransition()],

})
export class ComplexDevelopComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
