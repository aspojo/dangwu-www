import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {CadresManageFieldInfoService} from '../cadres-manage-field-info-service';
import {CadresManageService} from '../cadres-manage-service';
import {ConditionExpr, EntityOperator} from '@shared-utils/entity';
import {Observable} from 'rxjs';
import {UtilHttp} from '@shared-utils/http';
import {MessageService} from '@shared-services/message';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {EditDwRelationshipComponent} from '../../../other-entities/dw-relationship/list-dw-relationship/edit-dw-relationship/edit-dw-relationship.component';


@Component({
  selector: 'app-edit-cadres-manage',
  templateUrl: './edit-cadres-manage.component.html',
  styleUrls: ['./edit-cadres-manage.component.scss'],
})
export class EditCadresManageComponent extends CommonEditComponent {
  @ViewChild('editPartyPhasesContent', {static: false}) editPartyPhasesContent: TemplateRef<any>;
  public editPartyPhasesRef: NgbModalRef;
  @ViewChild('editDutyLevelContent', {static: false}) editDutyLevelContent: TemplateRef<any>;
  @ViewChild('editPhasesUpContent', {static: false}) editPhasesUpContent: TemplateRef<any>;
  public editPhasesUpRef: NgbModalRef;
  public editDutyLevelRef: NgbModalRef;
  teacherexistingduties: any;
  teacherexistingdutiesservingtime: any;
  teacherexistingdutiesnumber: any;
  changeDate: any;
  changePartyPhases: any = '申请时间';
  changeTitle: any;
  genderSelectDataList: any;
  identitySelectDataList: any;
  teacherfulltimeacademicSelectDataList: any;
  teacherfulltimedegreeSelectDataList: any;
  teachercategorySelectDataList: any;
  teacherpostSelectDataList: any;
  jobtypeSelectDataList: any;
  dwjobtypelevelSelectDataList: any;
  titleslevelSelectDataList: any;
  dutieslevelSelectDataList: any;
  lastacademicdegreeSelectDataList: any;
  currentDutiesLevel: any;
  currentPhases: any;
  phasesButtonText: any;
  phasesUpTime: any;
  phasesUpSelect: any;
  volunteerbook: any;
  partypost: any;
  selectPartypostList: any;
  pingyi: any;
  pyresult: any;
  selectPingYiList: any;
  selectPyResultList: any;
  growthtime: any;
  editPhasesLabel: any;
  resumeList = [];
  assessmentList = [];
  trainList = [];
  familyList = [];
  rapList = [];
  partyphases: any; // 党校期数
  age: any;
  personnelnatureSelectDataList: any;
  joinOrgTime: any;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: CadresManageService,
    public fieldInfoService: CadresManageFieldInfoService,
    public cadresManageService: CadresManageService,
    public modalService: NgbModal,
  ) {
    super();
  }

  afterGetOne() {
    if (this.inEdit) {
      if (this.editDataTemp.teachertoworktime) {
        this.editDataTemp.teachertoworktime = this.editDataTemp.teachertoworktime.substring(0, 7).replace('-', '.');
      }
      if (this.editDataTemp.vicedivision) {
        this.editDataTemp.vicedivision = this.editDataTemp.vicedivision.substring(0, 7).replace('-', '.');
      }
      if (this.editDataTemp.anyzhengke) {
        this.editDataTemp.anyzhengke = this.editDataTemp.anyzhengke.substring(0, 7).replace('-', '.');
      }
      if (this.editDataTemp.deputyatthe) {
        this.editDataTemp.deputyatthe = this.editDataTemp.deputyatthe.substring(0, 7).replace('-', '.');
      }
      if (this.editDataTemp.lsatany) {
        this.editDataTemp.lsatany = this.editDataTemp.lsatany.substring(0, 7).replace('-', '.');
      }
      // 编辑界面时查询出额外数据
      this.http.post('getCadresEditOtherData', {pertyMemberId: this.editDataTemp.id}).subscribe((data: any) => {
        data.familyList.forEach((item: any) => {
          if (item.birthday) {
            item.birthday = item.birthday.substring(0, 7).replace('-', '.');
          }
        });
        this.resumeList = data.resumeList;
        this.assessmentList = data.assessmentList;
        this.trainList = data.trainList;
        this.familyList = data.familyList;
        this.rapList = data.rapList;
      });
    }
  }

  // 简历添加行
  addResumeRow() {
    let newData = [];
    if (this.resumeList) {
      newData = newData.concat(this.resumeList);
    }
    newData.push({});
    this.resumeList = newData;
  }

  // 简历删除行
  deleteResumeRow(item) {
    const i = this.resumeList.indexOf(item)
    {
      this.resumeList.splice(i, 1);
    }
  }

  // 年度审核添加行
  addAssessmentRow() {
    let newData = [];
    if (this.assessmentList) {
      newData = newData.concat(this.assessmentList);
    }
    newData.push({});
    this.assessmentList = newData;
  }

  // 年度审核删除行
  deleteAssessmentRow(item) {
    const i = this.assessmentList.indexOf(item)
    {
      this.assessmentList.splice(i, 1);
    }
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

  // 家庭成员添加行
  addFamilyRow() {
    let newData = [];
    if (this.familyList) {
      newData = newData.concat(this.familyList);
    }
    newData.push({});
    this.familyList = newData;
  }

  // 家庭成员删除行
  deleteFamilyRow(item) {
    const i = this.familyList.indexOf(item)
    {
      this.familyList.splice(i, 1);
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
    if (!this.editDataTemp.teacherexistingdutieslevel) {
      this.editDataTemp.teacherexistingdutieslevel = this.cadresManageService.model;
    }
    if (this.cadresManageService.generalParty) {
      this.editDataTemp.generalParty = this.cadresManageService.generalParty.id;
    }
    if (this.editDataTemp.teachertoworktime) {
      let time = this.editDataTemp.teachertoworktime;
      time = time.replace('.', '-') + '-01';
      this.editDataTemp.teachertoworktime = time;
    }
    return this.fieldInfoService.http.post('saveCadres', {
      cadresData: this.editDataTemp,
      resumeList: this.resumeList,
      assessmentList: this.assessmentList,
      trainList: this.trainList,
      familyList: this.familyList,
      rapList: this.rapList
    });
  }

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

  afterInit() {
    if (!this.inEdit) {
      this.editDataTemp.pertymembermodel = 1;
      this.editDataTemp.history = 0;
      // this.testButton();
      this.editDataTemp.identity = 1;
      this.editDataTemp.cadresmodel = 1;
    } else {
      this.editDataTemp.showBirthday = this.editDataTemp.birthday.substring(0, 7).replace('-', '.');
      this.getAge();
    }
    if (this.editDataTemp.probationarydate) {
      this.joinOrgTime = this.editDataTemp.probationarydate.substring(0, 7).replace('-', '.');
    }
    this.currentDutiesLevel = this.editDataTemp.teacherexistingdutieslevel;
    this.currentPhases = this.editDataTemp.phases;
    switch (this.currentPhases) {
      case '1':
        this.phasesButtonText = '转积极分子';
        this.editPhasesLabel = '积极分子时间';
        break;
      case '2':
        this.phasesButtonText = '推荐为党校学员';
        this.editPhasesLabel = '党校期数';
        break;
      case '3':
        this.phasesButtonText = '确认为发展对象';
        this.editPhasesLabel = '发展对象时间';
        break;
      case '4':
        this.phasesButtonText = '发展为预备党员';
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
    this.loadSelectUserList();
  }

  loadSelectUserList() {
    this.http.post('getCadresEditSelectData', {}).subscribe((data: any) => {
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
      this.lastacademicdegreeSelectDataList = new Observable((subscriber) => {
          subscriber.next(data.lastacademicdegreeSelectDataList);
      });

    });
  }

  /**
   * 党员发展
   */
  phasesUp() {
    if (this.currentPhases == 5 && this.checkOneYear(new Date())) {
      MessageService.showGlobalMessage('danger', '预备党员未满1年！');
      return;
    }
    if (this.currentPhases == 4) {
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
   * 保存党员阶段信息
   */
  savePhasesUp() {
    const newList = [];
    const newDept: any = {};
    newDept.id = this.PK.id;
    newDept.phases = Number(this.currentPhases) + 1;
    // 成为党校学员只需填写党校期数，其他的需要填写时间
    if (this.currentPhases != 2 && this.phasesUpTime) {
      if (!this.phasesUpTime.match(/\d{4}-\d{2}-\d{2}/)) {
        MessageService.showGlobalMessage('danger', '时间格式错误！');
        return;
      } else if (this.checkDateInpu(this.phasesUpTime)) {
        MessageService.showGlobalMessage('danger', '日期不得超过今天！');
        return;
      }
      switch (this.currentPhases) {
        case '1':
          newDept.activistsdate = this.phasesUpTime;
          break;
        case '3':
          newDept.developmentdate = this.phasesUpTime;
          break;
        case '4':
          if (!this.volunteerbook.match(/\d{10}/)) {
            MessageService.showGlobalMessage('danger', '志愿书格式错误！');
            return;
          }
          if (!this.growthtime.match(/\d{4}.\d{2}/)) {
            MessageService.showGlobalMessage('danger', '增加时间格式错误！');
            return;
          }
          newDept.photoaddress = this.editDataTemp.photoaddress;
          newDept.probationarydate = this.phasesUpTime;
          newDept.volunteerbook = this.volunteerbook;
          newDept.growthtime = this.growthtime;
          newDept.partypost = this.partypost;
          newDept.pingyi = this.pingyi;
          newDept.pyresult = this.pyresult;
          break;
        case '5':
          if (this.checkOneYear(new Date(this.phasesUpTime))) {
            MessageService.showGlobalMessage('danger', '预备党员未满1年！');
            return;
          }
          newDept.partymemberdate = this.phasesUpTime;
          break;
      }
    } else {
      newDept.partyPhases = this.phasesUpSelect;
    }
    newList.push(newDept);
    this.fieldInfoService.saveDate(newList).subscribe(this.getUpdateCallback());
    this.editPhasesUpRef.close();
    this.closeViewEvent.emit();
  }


  /**
   * 检测预备党员是否满1年
   */
  checkOneYear(date) {
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
    return true;
  }

  /**
   * 检测输入日期是否超过今天
   */
  checkDateInpu(date) {
    const today = new Date();
    const arr = date.split('-');
    if (today.getFullYear() - arr[0] > 0) {
      return false;
    } else if (today.getFullYear() - arr[0] == 0) {
      if (today.getMonth() > arr[1] - 1) {
        return false;
      } else if (today.getMonth() == arr[1] - 1) {
        if (today.getDate() >= arr[2]) {
          return false;
        }
      }
    }
    return true;
  }

  /**
   * 检测是否完整输入信息，返回true，按钮不可点击，false按钮可点击
   */
  checkInput() {
    if (this.currentPhases == 2) {
      if (!this.phasesUpSelect) {
        return true;
      }
    } else if (this.currentPhases == 4) {
      if (!this.phasesUpTime || !this.editDataTemp.photoaddress || !this.volunteerbook || !this.partypost || !this.growthtime) {
        return true;
      }
    } else {
      if (!this.phasesUpTime) {
        return true;
      }
    }
    return false;
  }

  /**
   * 成为申请人
   */
  tobeApplicant() {
    if (this.editDataTemp.pertymembermodel != 1) {
      this.changeTitle = '转申请人';
      this.changePartyPhases = '申请时间';
    }
    switch (this.cadresManageService.model) {
      case 1:
        this.changeTitle = '转积极分子';
        this.changePartyPhases = '积极分子时间';
        break;
      case 2:
        this.changeTitle = '推荐为党校学员';
        this.changePartyPhases = '党校期数';
        break;
    }
    // 积极分子必须满1年
    this.editPartyPhasesRef = this.modalService.open(this.editPartyPhasesContent);
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
    this.fieldInfoService.saveDate(newList).subscribe(this.getUpdateCallback());
    this.closeViewEvent.emit();
  }

  /**
   * 申请人时间
   */
  savePartyPhases() {
    const newList = [];
    const newDept: any = {};
    newDept.id = this.PK.id;
    newDept.phases = this.cadresManageService.model + 1;
    newDept.pertymembermodel = 1;
    if (this.cadresManageService.model == 2) {
      newDept.partyPhases = this.partyphases;
    } else {
      newDept.applicantdate = this.changeDate;
    }
    newList.push(newDept);
    this.fieldInfoService.saveDate(newList).subscribe(this.getUpdateCallback());
    this.closeViewEvent.emit();
  }

  getUpdateCallback() {
    return (data2 => {
      if (UtilHttp.notHasError(data2)) {
        MessageService.showGlobalMessage('success', '修改成功！');
      }
    });
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
    this.fieldInfoService.saveDate(newList).subscribe(this.getUpdateCallback());
    this.closeViewEvent.emit();
  }

  /**
   * 打开干部晋升输入框
   */
  dutiesLevelUp() {
    this.editDutyLevelRef = this.modalService.open(this.editDutyLevelContent);
  }

  /**
   *  干部晋升
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
    this.fieldInfoService.saveDate(newList).subscribe(this.getUpdateCallback());
    this.editDutyLevelRef.close();
    this.closeViewEvent.emit();
  }

  getDwRelationshipComponent() {
    return EditDwRelationshipComponent;
  }

  getAge() {
    const birDate = new Date(this.editDataTemp.birthday);
    const now = new Date();
    this.age = now.getFullYear() - birDate.getFullYear() - ((now.getMonth() < birDate.getMonth() || (now.getMonth() == birDate.getMonth() && now.getDate() < birDate.getDate())) ? 1 : 0);
  }
}
