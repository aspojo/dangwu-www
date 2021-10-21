import {Component, Input, OnChanges, SimpleChanges} from '@angular/core';


import {NG_VALUE_ACCESSOR} from '@angular/forms';
import {Observable} from 'rxjs';
import {CommonSelectComponent} from '../common-select/common-select.component';
import {HttpClient} from '@angular/common/http';
import {EntityOperator} from '@shared-utils/entity';
import {UtilValidate} from '@shared-utils/validate';

@Component({
  selector: 'region-select',
  template: `
    <select [(ngModel)]="value" [class]="cssStyle" [name]="name">
      <option value="">请选择</option>
      <ng-template ngFor let-item [ngForOf]="dataList | async">
        <option value="{{item.regionId}}">{{item.regionName}}</option>
      </ng-template>
    </select>
  `, providers: [
    {provide: NG_VALUE_ACCESSOR, useExisting: RegionSelectComponent, multi: true}
  ],
})
export class RegionSelectComponent extends CommonSelectComponent<any> implements OnChanges {

  @Input() regionSelect;
  @Input() parentId;
  dataList: Observable<Array<any>>;

  constructor(private http: HttpClient) {
    super();
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.dataList = this.getRegionListByParentId(this.parentId);
  }
  public getRegionListByParentId(parentId): Observable<Array<any>> {
    if (UtilValidate.isNotEmpty(parentId)) {
      return new Observable(subscriber => {
        this.http.post('getPageData', {
          entityName: 'Region',
          viewSize: 100000,
          viewIndex: 0,
          noConditionFind: 'Y',
          hasTimestamp: 'N',
          condition: {lhs: 'parentId', operator: EntityOperator.EQUALS, rhs: parentId}
        }).subscribe((data: any) => {
          subscriber.next(data.list);
        });
      });
    } else {
      return;
    }
  }
}
