import { Component, OnInit } from '@angular/core';
import {routerTransition} from '@app/router-animations';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.component.html',
  animations: [routerTransition()],

})
export class IntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
