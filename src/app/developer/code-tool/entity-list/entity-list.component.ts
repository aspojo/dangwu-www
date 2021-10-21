import {Component, OnInit} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {ActivatedRoute} from '@angular/router';
import {routerTransition} from '@app/router-animations';
import {ConditionExpr} from '@shared-utils/entity';
import {EntityOperator} from '@shared-utils/entity';

@Component({
  selector: 'app-entity-list',
  templateUrl: './entity-list.component.html',
  styleUrls: ['./entity-list.component.css'],
  animations: [routerTransition()]
})
export class EntityListComponent implements OnInit {
  entityConfigList = [];
  entityName;

  constructor(public route: ActivatedRoute, private http: HttpClient) {
  }

  ngOnInit(): void {
    this.entityName = this.route.snapshot.paramMap.get('entityName');
    this.loadData();
  }

  loadData() {
    this.http.post('getPageData', {
      entityName: 'CGTEntityConfig', condition: {
        operator: EntityOperator.AND, conditionList: [new ConditionExpr('entityName', EntityOperator.EQUALS, this.entityName)]
      }
    }).subscribe((data: any) => {
      this.entityConfigList = data.list;
    });

  }

  removeConfig(item) {
    return this.http.post('genericDelete', {
      entityName: 'CGTEntityConfig',
      PK: [{id: item.id}]
    }).subscribe(data => {
      this.loadData();
    });
  }
}
