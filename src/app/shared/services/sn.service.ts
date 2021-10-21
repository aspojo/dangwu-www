import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ConditionExpr, EntityOperator} from '@shared-utils/entity';
import {UtilValidate} from '@shared-utils/validate';
import {MessageService} from '@shared-services/message';
export class SnStatus {
  public static unused = 'sns1'; // 待启用
  public static inputted = 'sns2'; // 已入库
  public static outputted = 'sns3'; // 已出库
}

@Injectable()
export class SnService {

  constructor(public http: HttpClient) {
  }

  // 查询出已入库状态的sn码
  public getSnList(materialId, batchId, storehouseId): Observable<object> {
    const conditionList = [
      new ConditionExpr('materialId', EntityOperator.EQUALS, materialId),
      new ConditionExpr('batchId', EntityOperator.EQUALS, batchId),
      new ConditionExpr('storehouseId', EntityOperator.EQUALS, storehouseId),
      new ConditionExpr('snStatus', EntityOperator.EQUALS, SnStatus.inputted),
    ];
    return this.http.post('getPageData', {
      entityName: 'SnMaterialSn', viewSize: 100000, condition: {
        operator: EntityOperator.AND, conditionList
      }
    });
  }

  /**
   *
   * @param ticketType 单据类型
   * @param ticketId 单据id
   * @param ticketItemId 单据条目id
   */
  public getMaterialSnStrByTicket(ticketItemObj): Observable<string> {
    const obv: Observable<string> = new Observable(subscriber => {
      this.http.post('getPageData', {
        entityName: 'SnTicketSnMap',
        viewSize: 100000,
        selectField: ['materialSn'],
        condition: {
          conditionList: [
            new ConditionExpr('ticketType', EntityOperator.EQUALS, ticketItemObj.ticketType),
            new ConditionExpr('ticketId', EntityOperator.EQUALS, ticketItemObj.ticketId),
            new ConditionExpr('ticketItemId', EntityOperator.EQUALS, ticketItemObj.ticketItemId)
          ],
          operator: EntityOperator.AND
        }
      }).subscribe((data: any) => {
        let str = '';
        if (UtilValidate.isNotEmpty(data.list)) {
          data.list.forEach(item => {
            str = str + ',' + item.materialSn;
          });
          str = str.substr(1, str.length);
        }
        subscriber.next(str);
      });
    });
    return obv;
  }

  // 根据物料id获取sn
  public getMaterialSnByMaterialId(materialId): Observable<Array<any>> {
    const obv: Observable<Array<any>> = new Observable(subscriber => {
      this.http.post('getPageData', {
        entityName: 'SnMaterialSn',
        viewSize: 10000000,
        selectField: ['materialSn', 'storehouseId'],
        orderby: ['materialSnId'],
        condition: {
          conditionList: [new ConditionExpr('materialId', EntityOperator.EQUALS, materialId)],
          operator: EntityOperator.AND
        }
      }).subscribe((data: any) => {
        if (UtilValidate.isNotEmpty(data.list)) {
          subscriber.next(data.list);
        } else {
          subscriber.next([]);

        }
      });
    });
    return obv;
  }

  /**
   *
   * @param ticketItemObj 单据条目数据 例如：入库单数据
   */
  public saveMaterialSnTicket(ticketItemObj, snStr: string): Observable<object> {

    const obv: Observable<object> = new Observable(subscriber => {

      let error;
      const list = [];
      const tempMap: any = {};
      snStr.split(',').forEach(materialSn => {
        if (UtilValidate.isNotEmpty(materialSn)) {
          list.push(materialSn);
          if (tempMap[materialSn]) {
            error = '重复录入' + 'SN:' + materialSn;
          }
          tempMap[materialSn] = true;
        }

      });
      if (list.length !== ticketItemObj.operateNum) {
        error = 'SN数目不正确,需要【' + ticketItemObj.operateNum + '】,实际【' + list.length + '】';
        subscriber.next({error});
      }
      if (error) {
        MessageService.showGlobalMessage('danger', error);
      } else {
        this.http.post('saveMaterialSnTicket', {ticketItemObj, snList: list}).subscribe(data => {
          subscriber.next(data);
        });
      }
    });
    return obv;
  }

  changeSnStatus(obj) {
    this.http.post('changeSnStatus', obj).subscribe(data => {
    });
  }

  // 检查SN码是否录入完整
  checkTicketItemSn(ticketId: any, ticketType: any, ticketItemIdList: any[]): Observable<object> {
    const obv: Observable<object> = new Observable(subscriber => {

      if (ticketItemIdList.length > 0) {
        // 有参与sn控制的条目
        this.http.post('checkTicketItemSn', {ticketId, ticketType, ticketItemIdList}).subscribe(data => {
          subscriber.next(data);
        });
      } else {
        // 无需sn控制
        subscriber.next({});

      }
    });
    return obv;
  }

  exportSn(exportSn: any, batchCode: any): Observable<object> {
    return this.http.post('exportSn', {batchCode});
  }
}
