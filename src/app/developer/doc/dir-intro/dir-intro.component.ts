import { Component, OnInit } from '@angular/core';
import {routerTransition} from '@app/router-animations';

@Component({
  selector: 'app-dir-intro',
  templateUrl: './dir-intro.component.html',
  animations: [routerTransition()],

})
export class DirIntroComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
