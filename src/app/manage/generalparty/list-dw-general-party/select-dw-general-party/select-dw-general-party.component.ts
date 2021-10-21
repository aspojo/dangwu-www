import {Component, Input} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {CommonSelectOne} from '@shared-common/select-one';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute, Router} from '@angular/router';
import {Location} from '@angular/common';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';
import {DwGeneralPartyFieldInfoService} from '../dw-general-party-field-info-service';
import {DwGeneralPartyService} from '../dw-general-party-service';
import {ConditionExpr, EntityCondition} from '@shared-utils/entity';

@Component({
  // tslint:disable-next-line:component-selector
  selector: '[selectDwGeneralParty]',
  templateUrl: './select-dw-general-party.component.html',
  styleUrls: ['./select-dw-general-party.component.scss'],
  animations: [routerTransition()],
  providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: SelectDwGeneralPartyComponent, multi: true}
  ],
})
export class SelectDwGeneralPartyComponent extends CommonSelectOne {
  @Input() selectDwGeneralParty; // 原始选中值

  @Input() isQueryCollapsed = false;

  constructor(public envService: EnvironmentService,
              public http: HttpClient,
              public modalService: NgbModal,
              public route: ActivatedRoute,
              public location: Location,
              public router: Router,
              public commonService: DwGeneralPartyService,
              public fieldInfoService: DwGeneralPartyFieldInfoService,
  ) {
    super();
  }

  beforeQuery() {
    if (this.mapCondition) { // 传入map
      this.submitQueryData.condition.conditionList = this.submitQueryData.condition.conditionList.concat(EntityCondition.makeConditionList(this.mapCondition));
    }
    if (this.condition) { // 传入拼装好的条件
      this.condition.forEach((con: any) => {
        this.submitQueryData.condition.conditionList.push(con);
      });
    }
    console.log(this.submitQueryData.condition.conditionList);
  }

}
