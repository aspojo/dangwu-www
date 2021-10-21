import { Component, OnInit } from '@angular/core';
import {routerTransition} from '@app/router-animations';

@Component({
  selector: 'app-use-code-tool',
  templateUrl: './use-code-tool.component.html',
  animations: [routerTransition()],

})
export class UseCodeToolComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
