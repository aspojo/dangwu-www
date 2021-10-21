import { Component, OnInit } from '@angular/core';
import {routerTransition} from '@app/router-animations';

@Component({
  selector: 'app-entity-engine',
  templateUrl: './entity-engine.component.html',
  animations: [routerTransition()],

})
export class EntityEngineComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
