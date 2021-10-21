import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {DemocratManageFieldInfoService} from '../democrat-manage-field-info-service';
import {DemocratManageService} from '../democrat-manage-service';
import {Observable} from 'rxjs';
import {ConditionExpr, EntityOperator} from '@shared-utils/entity';
import {EditDwRelationshipComponent} from '../../other-entities/dw-relationship/list-dw-relationship/edit-dw-relationship/edit-dw-relationship.component';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {environment} from '@environments';
import {MessageService} from '@shared-services/message';
import {UtilHttp} from '@shared-utils/http';


@Component({
  selector: 'app-edit-democrat-manage',
  templateUrl: './edit-democrat-manage.component.html',
  styleUrls: ['./edit-democrat-manage.component.scss'],
})
export class EditDemocratManageComponent extends CommonEditComponent {
  @ViewChild('chooseRelationshipStyleContent', {static: false}) chooseRelationshipStyleContent: TemplateRef<any>;
  @ViewChild('editPhasesUpContent', {static: false}) editPhasesUpContent: TemplateRef<any>;
  @ViewChild('editPartyPhasesContent', {static: false}) editPartyPhasesContent: TemplateRef<any>;
  @ViewChild('editDutyLevelContent', {static: false}) editDutyLevelContent: TemplateRef<any>;
  @ViewChild('selectLetterTemplateContent', {static: false}) selectLetterTemplateContent: TemplateRef<any>;
  public selectLetterTemplateRef: NgbModalRef;
  public chooseRelationshipStyleRef: NgbModalRef;
  public editDutyLevelRef: NgbModalRef;
  public editPhasesUpRef: NgbModalRef;
  public editPartyPhasesRef: NgbModalRef;
  democratSelectDataList: any;
  branchSelectDataList: any;
  genderSelectDataList: any;
  identitySelectDataList: any;
  age: any;
  teacherfulltimeacademicSelectDataList: any;
  teacherfulltimedegreeSelectDataList: any;
  lastacademicdegreeSelectDataList: any;
  personnelnatureSelectDataList: any;
  teachercategorySelectDataList: any;
  teacherpostSelectDataList: any;
  jobtypeSelectDataList: any;
  dwjobtypelevelSelectDataList: any;
  stafflevelSelectDataList: any;
  titleslevelSelectDataList: any;
  dutieslevelSelectDataList: any;
  partypostdemocratSelectDataList: any;
  trainList = [];
  rapList = [];
  relationshipStyle = '0';
  selectrelationshiptyleList: any;
  phasesButtonText: any;
  identity: any;
  currentDutiesLevel: any;
  deletePartyButtonText: any;
  editPhasesLabel: any;
  selectPartypostList: any;
  selectPyResultList: any;
  selectPingYiList: any;
  changeTitle: any;
  changePartyPhases: any;
  changeDate: any;
  partyphases: any; // 党校期数
  branchParentId: any;
  teacherexistingduties: any;
  teacherexistingdutiesservingtime: any;
  teacherexistingdutiesnumber: any;

  letterTemplate: any; // 介绍信模板
  validity: any; // 有效期

  letterTemplateList: any;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DemocratManageService,
    public modalService: NgbModal,
    public fieldInfoService: DemocratManageFieldInfoService,
  ) {
    super();
  }
  getBranchParty(event) {
    if (event) {
      this.branchParentId = event.parentId;
    }
  }
  afterGetOne() {
    this.http.post('getDemocratEditOtherData', {pertyMemberId: this.editDataTemp.id}).subscribe((data: any) => {
      this.trainList = data.trainList;
      this.rapList = data.rapList;
    });
  }

  afterInit() {
    if (!this.inEdit) {
      // this.editDataTemp.pertymembermodel = 1;
      this.editDataTemp.history = 0;
      // this.testButton();
      this.editDataTemp.identity = 1;
      this.editDataTemp.adapter = 0;
      this.editDataTemp.cadresmodel = 1;
    } else {
      this.editDataTemp.showBirthday = this.editDataTemp.birthday.substring(0, 7).replace('-', '.');
      this.getAge();
    }
    this.identity = this.editDataTemp.identity;
    this.currentDutiesLevel = this.editDataTemp.teacherexistingdutieslevel;
    // this.currentPhases = this.editDataTemp.phases;
    // this.currentGeneral = this.editDataTemp.generalparty;
    switch (this.editDataTemp.generalparty) {
      case '1':
        this.phasesButtonText = '转积极分子';
        this.deletePartyButtonText = '删除申请人';
        this.editPhasesLabel = '积极分子时间';
        break;
      case '2':
        this.phasesButtonText = '推荐为党校学员';
        this.deletePartyButtonText = '删除积极分子';
        this.editPhasesLabel = '党校期数';
        break;
      case '3':
        this.phasesButtonText = '确认为发展对象';
        this.deletePartyButtonText = '删除党校学员';
        this.editPhasesLabel = '发展对象时间';
        break;
      case '4':
        this.phasesButtonText = '发展为预备党员';
        this.deletePartyButtonText = '删除发展对象';
        this.editPhasesLabel = '入党时间';
        break;
      case '5':
        if (this.checkOneYear(new Date())) {
          this.phasesButtonText = '预备党员未满1年';
        } else {
          this.phasesButtonText = '转为正式党员';
        }
        this.editPhasesLabel = '转正时间';
        break;
    }

    this.loadSelectDataList();
  }

  loadSelectDataList() {
    this.http.post('getDemocratEditSelectData', {}).subscribe((data: any) => {
      this.democratSelectDataList = new Observable((subscriber) => {
          subscriber.next(data.democratSelectDataList);
      });
      this.genderSelectDataList = new Observable((subscriber) => {
          subscriber.next(data.genderSelectDataList);
      });
      this.identitySelectDataList = new Observable((subscriber) => {
          subscriber.next(data.identitySelectDataList);
      });
      this.teacherfulltimeacademicSelectDataList = new Observable((subscriber) => {
          subscriber.next(data.teacherfulltimeacademicSelectDataList);
      });
      this.teacherfulltimedegreeSelectDataList = new Observable((subscriber) => {
          subscriber.next(data.teacherfulltimedegreeSelectDataList);
      });
      this.lastacademicdegreeSelectDataList = new Observable((subscriber) => {
          subscriber.next(data.lastacademicdegreeSelectDataList);
      });
      this.personnelnatureSelectDataList = new Observable((subscriber) => {
          subscriber.next(data.personnelnatureSelectDataList);
      });
      this.teachercategorySelectDataList = new Observable((subscriber) => {
          subscriber.next(data.teachercategorySelectDataList);
      });
      this.teacherpostSelectDataList = new Observable((subscriber) => {
          subscriber.next(data.teacherpostSelectDataList);
      });
      this.jobtypeSelectDataList = new Observable((subscriber) => {
          subscriber.next(data.jobtypeSelectDataList);
      });
      this.dwjobtypelevelSelectDataList = new Observable((subscriber) => {
          subscriber.next(data.dwjobtypelevelSelectDataList);
      });
      this.titleslevelSelectDataList = new Observable((subscriber) => {
          subscriber.next(data.titleslevelSelectDataList);
      });
      this.dutieslevelSelectDataList = new Observable((subscriber) => {
          subscriber.next(data.dutieslevelSelectDataList);
      });
      this.partypostdemocratSelectDataList = new Observable((subscriber) => {
          subscriber.next(data.partypostdemocratSelectDataList);
      });
    });

    // this.branchSelectDataList = new Observable((subscriber) => {
    //   const conditions = [];
    //   conditions.push(new ConditionExpr('parentId', EntityOperator.EQUALS, this.editDataTemp.generalparty));
    //   conditions.push(new ConditionExpr('generalPartyHistory', EntityOperator.EQUALS, 0));
    //   return this.http.post('getPageData', {entityName: 'DwGeneralParty', condition: {conditionList: conditions, operator: EntityOperator.AND}}).subscribe((data: any) => {
    //     data.list.forEach(item => {
    //       item.id = item.id;
    //       item.value = item.generalPartyName;
    //     });
    //     subscriber.next(data.list);
    //   });
    // });

    this.stafflevelSelectDataList = new Observable((subscriber) => {
      const arr = [{id: 1, value: '一'}, {id: 2, value: '二'}, {id: 3, value: '三'}, {id: 4, value: '四'}, {id: 5, value: '五'}, {id: 6, value: '六'}, {id: 7, value: '七'}, {id: 8, value: '八'}, {id: 9, value: '九'}, {id: 10, value: '十'}, {
        id: 11,
        value: '十一'
      }, {id: 12, value: '十二'}, {id: 13, value: '十三'},];
      subscriber.next(arr);
    });

  }

  /**
   * 根据身份证号填充出生年月
   */
  fillBirthday() {
    // 先获取是否和身份证一样
    let idnumberBirthday;
    let idnumberShowBirthday;
    if (this.editDataTemp.idnumber && this.editDataTemp.idnumber.match(/^\d{17}[\dX]$/)) {
      idnumberBirthday = this.editDataTemp.idnumber.substring(6, 10) + '-' + this.editDataTemp.idnumber.substring(10, 12) + '-' + this.editDataTemp.idnumber.substring(12, 14);
      idnumberShowBirthday = this.editDataTemp.idnumber.substring(6, 10) + '.' + this.editDataTemp.idnumber.substring(10, 12);
    }
    // 获取填写的出生年月
    if (this.editDataTemp.showBirthday && this.editDataTemp.showBirthday !== '') {
      if (this.editDataTemp.showBirthday !== idnumberShowBirthday) {
        const f = confirm('当前出生年月与身份证信息不符，您确定修改该人员的出生年月');
        if (f) {
          this.editDataTemp.birthday = this.editDataTemp.showBirthday.replace('.', '-') + '-01';
          this.getAge();
        } else {
          if (this.editDataTemp.idnumber && this.editDataTemp.idnumber.match(/^\d{17}[\dX]$/)) {
            this.editDataTemp.birthday = idnumberBirthday;
            this.editDataTemp.showBirthday = idnumberShowBirthday;
            this.getAge();
          }
        }
      }
    } else {
      if (this.editDataTemp.idnumber && this.editDataTemp.idnumber.match(/^\d{17}[\dX]$/)) {
        this.editDataTemp.birthday = idnumberBirthday;
        this.editDataTemp.showBirthday = idnumberShowBirthday;
        this.getAge();
      }
    }
  }

  getAge() {
    const birDate = new Date(this.editDataTemp.birthday);
    const now = new Date();
    this.age = now.getFullYear() - birDate.getFullYear() - ((now.getMonth() < birDate.getMonth() || (now.getMonth() == birDate.getMonth() && now.getDate() < birDate.getDate())) ? 1 : 0);
  }

  // 培训信息添加行
  addTranRow() {
    let newData = [];
    if (this.trainList) {
      newData = newData.concat(this.trainList);
    }
    newData.push({});
    this.trainList = newData;
  }

  // 培训信息删除行
  deleteTrainRow(item) {
    const i = this.trainList.indexOf(item)
    {
      this.trainList.splice(i, 1);
    }
  }

  // 奖惩添加行
  addRapRow() {
    let newData = [];
    if (this.rapList) {
      newData = newData.concat(this.rapList);
    }
    newData.push({});
    this.rapList = newData;
  }

  // 奖惩删除行
  deleteRapRow(item) {
    const i = this.rapList.indexOf(item)
    {
      this.rapList.splice(i, 1);
    }
  }

  /**
   * 重写保存方法
   */
  commitToServer(): Observable<any> {
    // if (!this.editDataTemp.teacherexistingdutieslevel) {
    //   this.editDataTemp.teacherexistingdutieslevel = this.cadresManageService.model;
    // }
    if (this.editDataTemp.teachertoworktime) {
      let time = this.editDataTemp.teachertoworktime;
      time = time.replace('.', '-') + '-01';
      this.editDataTemp.teachertoworktime = time;
    }
    return this.fieldInfoService.http.post('saveDemocrat', {
      democratData: this.editDataTemp,
      trainList: this.trainList,
      rapList: this.rapList
    });
  }

  getDwRelationshipComponent() {
    return EditDwRelationshipComponent;
  }

  /**
   * 打开选择下载关系转接表样式弹窗
   */
  openDownloadRelationship() {
    // if (!this.selectrelationshiptyleList) {
    //   this.selectrelationshiptyleList = new Observable((subscriber) => {
    //     const arr = [{id: 0, value: '省内'}, {id: 1, value: '省外'}];
    //     subscriber.next(arr);
    //   });
    // }
    // this.chooseRelationshipStyleRef = this.modalService.open(this.chooseRelationshipStyleContent, {size: 'sm'});

    this.letterTemplateList = this.commonService.letterTemplateList
    this.letterTemplate = "";
    this.validity = "";

    this.selectLetterTemplateRef = this.modalService.open(this.selectLetterTemplateContent);
  }

  /**
   * 下载关系转接表
   */
  downloadRelationshipTable() {
    if (!this.relationshipStyle) {
    }
    if (this.relationshipStyle == null) {
    }
    if (this.relationshipStyle == '') {
    }
    window.location.href = environment.serverUrl + 'downloadRelationshipDocx/?id=' + this.editDataTemp.id + '&outPortType=' + this.relationshipStyle;
    this.chooseRelationshipStyleRef.close();
  }
  /**
   * 检测预备党员是否满1年
   */
  checkOneYear(date) {
    if (this.editDataTemp.probationarydate){
      const arr = this.editDataTemp.probationarydate.split('-');
      if (date.getFullYear() - arr[0] > 1) {
        return false;
      } else if (date.getFullYear() - arr[0] == 1) {
        if (date.getMonth() > arr[1] - 1) {
          return false;
        } else if (date.getMonth() == arr[1] - 1) {
          if (date.getDate() >= arr[2]) {
            return false;
          }
        }
      }
    }
    return true;
  }
  /**
   * 党员发展
   */
  phasesUp() {
    if (this.editDataTemp.phases == 5 && this.checkOneYear(new Date())) {
      MessageService.showGlobalMessage('danger', '预备党员未满1年！');
      return;
    }
    if (this.editDataTemp.phases == 4) {
      this.selectPartypostList = new Observable((subscriber) => {
        return this.http.post('getPageData', {entityName: 'DwPartyPost', condition: {}}).subscribe((data: any) => {
          data.list.forEach(item => {
            item.id = item.id;
            item.value = item.partyPostName;
          });
          subscriber.next(data.list);
        });
      });
      this.selectPyResultList = new Observable((subscriber) => {
        const datalist = [{id: '优秀', value: '优秀'}, {id: '合格', value: '合格'}, {id: '基本合格', value: '基本合格'}, {id: '不合格', value: '不合格'}];
        subscriber.next(datalist);
      });
      this.selectPingYiList = new Observable((subscriber) => {
        const datalist = [{id: '是', value: '是'}, {id: '否', value: '否'}];
        subscriber.next(datalist);
      });
    }
    this.editPhasesUpRef = this.modalService.open(this.editPhasesUpContent);
  }

  /**
   * 成为申请人
   */
  tobeApplicant() {

    if (this.editDataTemp.pertymembermodel != 1) {
      this.changeTitle = '转申请人';
      this.changePartyPhases = '申请时间';
    }
    switch (this.editDataTemp.phases) {
      case 1:
        this.changeTitle = '转积极分子';
        this.changePartyPhases = '积极分子时间';
        break;
      case 2:
        this.changeTitle = '推荐为党校学员';
        this.changePartyPhases = '党校期数';
        break;
    }
    this.editPartyPhasesRef = this.modalService.open(this.editPartyPhasesContent);
  }

  /**
   * 申请人时间
   */
  savePartyPhases() {
    const newList = [];
    const newDept: any = {};
    newDept.id = this.PK.id;
    newDept.phases = this.editDataTemp.phases + 1;
    newDept.pertymembermodel = 1;
    if (this.editDataTemp.phases == 2) {
      newDept.partyPhases = this.partyphases;
    } else {
      newDept.applicantdate = this.changeDate;
    }
    newList.push(newDept);
    this.saveDate(newList).subscribe(this.getUpdateCallback());
    this.closeViewEvent.emit();
  }

  saveDate(list): Observable<any> {
    // 保存数据
    return this.http.post('genericSaveAll', {
      entityName: 'DwPertyMember',
      valueList: list,
    });
  }
  getUpdateCallback() {
    return (data2 => {
      if (UtilHttp.notHasError(data2)) {
        MessageService.showGlobalMessage('success', '修改成功！');
      }
    });
  }
  /**
   * 打开干部晋升输入框
   */
  dutiesLevelUp() {
    this.editDutyLevelRef = this.modalService.open(this.editDutyLevelContent);
  }
  /**
   * 保存干部晋升输入信息
   */
  saveDutyLevelUp() {
    if (!this.teacherexistingdutiesservingtime.match(/\d{4}.\d{2}/)) {
      MessageService.showGlobalMessage('danger', '任职时间格式错误！');
      return;
    }
    const newList = [];
    const newDept: any = {};
    newDept.id = this.PK.id;
    newDept.teacherexistingdutieslevel = Number(this.currentDutiesLevel) + 1;
    newDept.teacherexistingduties = this.teacherexistingduties;
    newDept.teacherexistingdutiesservingtime = this.teacherexistingdutiesservingtime;
    newDept.teacherexistingdutiesnumber = this.teacherexistingdutiesnumber;
    newList.push(newDept);
    this.fieldInfoService.updateData(newList).subscribe(this.getUpdateCallback());
    this.editDutyLevelRef.close();
    this.closeViewEvent.emit();
  }
  /**
   * 转为干部
   */
  tobeCadres() {
    const newList = [];
    const newDept: any = {};
    newDept.teacherexistingdutieslevel = 1;
    newDept.cadresmodel = 1;
    newDept.id = this.PK.id;
    newList.push(newDept);
    this.fieldInfoService.updateData(newList).subscribe(this.getUpdateCallback());
    this.closeViewEvent.emit();
  }
  /**
   * 取消干部
   */
  cancelCadres() {
    const newList = [];
    const newDept: any = {};
    newDept.teacherexistingdutieslevel = 0;
    newDept.cadresmodel = 0;
    newDept.id = this.PK.id;
    newList.push(newDept);
    this.fieldInfoService.updateData(newList).subscribe(this.getUpdateCallback());
    this.closeViewEvent.emit();
  }
  /**
   * 删除党员，软删除
   */
  deletePhases() {
    const newList = [];
    const newDept: any = {};
    newDept.id = this.editDataTemp.id;
    newDept.history = 1;
    newList.push(newDept);
    this.fieldInfoService.markDelete(newList).subscribe(this.getMarkDeleteCallback());

  }

  getMarkDeleteCallback() {
    return (data2 => {
      if (UtilHttp.notHasError(data2)) {
        MessageService.showGlobalMessage('success', '删除完成！');
        this.closeViewEvent.emit();
      }
    });
  }



  /**
   * 打印转接
   */
  pinrtTransfer() {
    // window.open(environment.serverUrl + 'viewRelationship/?id=' + this.editDataTemp.id + '&html=1&letterTemplate=' + this.letterTemplate + '&validity=' + this.validity);
    window.location.href = environment.serverUrl + 'downloadRelationshipDocx/?id=' + this.editDataTemp.id + '&letterTemplate=' + this.letterTemplate + '&validity=' + this.validity;

  }
}
