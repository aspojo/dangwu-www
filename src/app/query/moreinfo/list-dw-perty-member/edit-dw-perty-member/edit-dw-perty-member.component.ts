import {Component, TemplateRef, ViewChild} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {EnvironmentService} from '@shared-services/environment';
import {HttpClient} from '@angular/common/http';
import {Location} from '@angular/common';
import {CommonEditComponent} from '@shared-common/edit';
import {AttachmentService} from '@shared-services/attachment';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {ComponentMapService} from '@config';
import {Observable} from 'rxjs';
import {UtilHttp} from '@shared-utils/http';
import {MessageService} from '@shared-services/message';
import {EditDwRelationshipComponent} from '../../../../other-entities/dw-relationship/list-dw-relationship/edit-dw-relationship/edit-dw-relationship.component';
import {DwPertyMemberFieldInfoService} from '../dw-perty-member-field-info-service';
import {DwPertyMemberService} from '../dw-perty-member-service';
import {ConditionExpr, EntityOperator} from '@shared-utils/entity';
import {environment} from '@environments';
import {Auth} from '@shared-services/auth';


@Component({
  selector: 'app-edit-dw-perty-member',
  templateUrl: './edit-dw-perty-member.component.html',
  styleUrls: ['./edit-dw-perty-member.component.scss'],
})
export class EditDwPertyMemberComponent extends CommonEditComponent {
  @ViewChild('editDutyLevelContent', {static: false}) editDutyLevelContent: TemplateRef<any>;
  @ViewChild('editPhasesUpContent', {static: false}) editPhasesUpContent: TemplateRef<any>;
  @ViewChild('editPartyPhasesContent', {static: false}) editPartyPhasesContent: TemplateRef<any>;
  @ViewChild('chooseRelationshipStyleContent', {static: false}) chooseRelationshipStyleContent: TemplateRef<any>;
  @ViewChild('selectLetterTemplateContent', {static: false}) selectLetterTemplateContent: TemplateRef<any>;
  public selectLetterTemplateRef: NgbModalRef;
  public editDutyLevelRef: NgbModalRef;
  public editPhasesUpRef: NgbModalRef;
  public chooseRelationshipStyleRef: NgbModalRef;
  public editPartyPhasesRef: NgbModalRef;
  public compMapService: ComponentMapService;
  teacherexistingduties: any;
  teacherexistingdutiesservingtime: any;
  teacherexistingdutiesnumber: any;
  genderSelectDataList: any;
  identitySelectDataList: any;
  studentcategorySelectDataList: any;
  studentlevelSelectDataList: any;
  studentschoolsystemSelectDataList: any;
  teacherfulltimeacademicSelectDataList: any;
  teacherfulltimedegreeSelectDataList: any;
  lastacademicdegreeSelectDataList: any;
  teachercategorySelectDataList: any;
  teacherpostSelectDataList: any;
  jobtypeSelectDataList: any;
  dwjobtypelevelSelectDataList: any;
  titleslevelSelectDataList: any;
  dutieslevelSelectDataList: any;
  mannerSelectDataList: any;
  partypostSelectDataList: any;
  phasesSelectDataList: any;
  partyphasesSelectDataList: any;
  currentDutiesLevel: any;
  currentPhases: any;
  phasesButtonText: any;
  phasesUpTime: any;
  editPhasesLabel: any;
  phasesUpSelect: any;
  volunteerbook: any;
  selectPartypostList: any;
  partypost: any;
  selectPyResultList: any;
  pyresult: any;
  selectPingYiList: any;
  pingyi: any;
  growthtime: any;
  deletePartyButtonText: any;
  identity: any;
  branchParentId: any;
  professionalParentId: any;
  currentGeneral: any;
  age: number;
  democratSelectDataList: any;
  personnelnatureSelectDataList: any;
  stafflevelSelectDataList: any;
  resumeList = [];
  assessmentList = [];
  trainList = [];
  familyList = [];
  rapList = [];
  selectrelationshiptyleList: any;
  relationshipStyle = '0';
  changeTitle: any;
  changePartyPhases: any;
  changeDate: any;
  partyphases: any;


  letterTemplate: any; // ???????????????
  validity: any; // ?????????

  letterTemplateList: any;

  generalPartySelectMapCondition = {parentId: 'null', generalPartyHistory: 0};
  generalPartySelectConditionList = [];

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public route: ActivatedRoute,
    public location: Location,
    public router: Router,
    public attachmentService: AttachmentService,
    public commonService: DwPertyMemberService,
    public fieldInfoService: DwPertyMemberFieldInfoService,
    public modalService: NgbModal,
  ) {
    super();
  }

  afterGetOne() {
    if (this.editDataTemp.cadresmodel == 1) {
      // ????????????????????????????????????
      this.fieldInfoService.http.post('getPageData', {
        entityName: 'DwResumeView',
        condition: new ConditionExpr('pertymember', EntityOperator.EQUALS, this.editDataTemp.id)
      }).subscribe((data: any) => {
        this.resumeList = data.list;
      });
      this.fieldInfoService.http.post('getPageData', {
        entityName: 'DwAssessmentView',
        condition: new ConditionExpr('pertymember', EntityOperator.EQUALS, this.editDataTemp.id)
      }).subscribe((data: any) => {
        this.assessmentList = data.list;
      });
      this.fieldInfoService.http.post('getPageData', {
        entityName: 'DwTrainView',
        condition: new ConditionExpr('pertymember', EntityOperator.EQUALS, this.editDataTemp.id)
      }).subscribe((data: any) => {
        this.trainList = data.list;
      });
      this.fieldInfoService.http.post('getPageData', {
        entityName: 'DwFamilyView',
        condition: new ConditionExpr('pertymember', EntityOperator.EQUALS, this.editDataTemp.id)
      }).subscribe((data: any) => {
        data.list.forEach((item: any) => {
          if (item.birthday) {
            item.birthday = item.birthday.substring(0, 7).replace('-', '.');
          }
        });
        this.familyList = data.list;
      });
      this.fieldInfoService.http.post('getPageData', {
        entityName: 'DwRapView',
        condition: new ConditionExpr('pertymember', EntityOperator.EQUALS, this.editDataTemp.id)
      }).subscribe((data: any) => {
        this.rapList = data.list;
      });
    }
  }

  afterInit() {
    if (!this.inEdit) {
      this.editDataTemp.pertymembermodel = 1;
      this.editDataTemp.history = 0;
      // this.testButton();
      this.editDataTemp.identity = 1;
      this.editDataTemp.adapter = 0;
      this.editDataTemp.cadresmodel = 1;
    } else {
      if (this.editDataTemp.studentcategory) {
        this.loadStudentLevelDataList();
      }
      this.editDataTemp.showBirthday = this.editDataTemp.birthday.substring(0, 7).replace('-', '.');
      this.getAge();
      if (!this.editDataTemp.applicantdate) {
        this.editDataTemp.applicantdate = '';
      }
      if (!this.editDataTemp.activistsdate) {
        this.editDataTemp.activistsdate = '';
      }
      if (!this.editDataTemp.developmentdate) {
        this.editDataTemp.developmentdate = '';
      }
      if (!this.editDataTemp.probationarydate) {
        this.editDataTemp.probationarydate = '';
      }
      if (!this.editDataTemp.partymemberdate) {
        this.editDataTemp.partymemberdate = '';
      }
    }
    this.identity = this.editDataTemp.identity;
    this.currentDutiesLevel = this.editDataTemp.teacherexistingdutieslevel;
    this.currentPhases = this.editDataTemp.phases;
    this.currentGeneral = this.editDataTemp.generalparty;
    switch (this.currentPhases) {
      case '1':
        this.phasesButtonText = '???????????????';
        this.deletePartyButtonText = '???????????????';
        this.editPhasesLabel = '??????????????????';
        break;
      case '2':
        this.phasesButtonText = '?????????????????????';
        this.deletePartyButtonText = '??????????????????';
        this.editPhasesLabel = '????????????';
        break;
      case '3':
        this.phasesButtonText = '?????????????????????';
        this.deletePartyButtonText = '??????????????????';
        this.editPhasesLabel = '??????????????????';
        break;
      case '4':
        this.phasesButtonText = '?????????????????????';
        this.deletePartyButtonText = '??????????????????';
        this.editPhasesLabel = '????????????';
        break;
      case '5':
        if (this.checkOneYear(new Date())) {
          this.phasesButtonText = '??????????????????1???';
        } else {
          this.phasesButtonText = '??????????????????';
        }
        this.editPhasesLabel = '????????????';
        break;
    }
    this.loadSelectUserList();
    if (Auth.userData.generalPartyId && Auth.userData.generalPartyId != '') {
      const arr = [];
      arr.push(Auth.userData.generalPartyId);
      if (Auth.userData.viewPermissions && Auth.userData.viewPermissions != '') {
        const firstIndex = Auth.userData.viewPermissions.indexOf(',');
        if (firstIndex > -1) {
          const viewArr = Auth.userData.viewPermissions.split(',');
          viewArr.forEach((v: any) => {
            arr.push(v);
          });
        } else {
          arr.push(Auth.userData.viewPermissions);
        }
      }
      this.generalPartySelectConditionList.push(new ConditionExpr('id', EntityOperator.IN, arr));

    }
  }

  loadSelectUserList() {
    this.genderSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwGender', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.genderName;
        });
        subscriber.next(data.list);
      });
    });
    this.identitySelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwIdentity', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.identityName;
        });
        subscriber.next(data.list);
      });
    });
    this.studentcategorySelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwStudentCategory', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.studentCategoryName;
        });
        subscriber.next(data.list);
      });
    });
    this.studentschoolsystemSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwSchoolSystem', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.schoolSystemName;
        });
        subscriber.next(data.list);
      });
    });
    this.teacherfulltimeacademicSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwAcademic', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.academicName;
        });
        subscriber.next(data.list);
      });
    });
    this.teacherfulltimedegreeSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwDegree', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.degreeName;
        });
        subscriber.next(data.list);
      });
    });
    this.lastacademicdegreeSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwLastAcdemicDegree', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.name;
        });
        subscriber.next(data.list);
      });
    });
    this.mannerSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwManne', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.manneName;
        });
        subscriber.next(data.list);
      });
    });
    this.partypostSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwPartyPost', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.partyPostName;
        });
        subscriber.next(data.list);
      });
    });
    this.phasesSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwPartyPhases', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.partyPhasesName;
        });
        subscriber.next(data.list);
      });
    });
    this.partyphasesSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwPhases', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.phasesNumber;
        });
        subscriber.next(data.list);
      });
    });
    this.selectPingYiList = new Observable((subscriber) => {
      const datalist = [{id: '1', value: '???'}, {id: '0', value: '???'}];
      subscriber.next(datalist);
    });
    if (this.editDataTemp.democratmodel === '1') {
      this.democratSelectDataList = new Observable((subscriber) => {
        return this.http.post('getPageData', {entityName: 'DwDemocrat', condition: {}}).subscribe((data: any) => {
          data.list.forEach(item => {
            item.id = item.id;
            item.value = item.democratName;
          });
          subscriber.next(data.list);
        });
      });
    }
    if (this.editDataTemp.identity == 1) {
      this.loadJobInfoSelectDataList();
    }
  }

  loadJobInfoSelectDataList() {
    this.personnelnatureSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwPersonnelNature', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.personnelNatureName;
        });
        subscriber.next(data.list);
      });
    });
    this.teachercategorySelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwTeacherCategory', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.teacherCategoryName;
        });
        subscriber.next(data.list);
      });
    });
    this.teacherpostSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwTeacherPost', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.teacherPostName;
        });
        subscriber.next(data.list);
      });
    });
    this.jobtypeSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwJobtype', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.jobtypeName;
        });
        subscriber.next(data.list);
      });
    });
    this.dwjobtypelevelSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwJobtypelevel', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.jobtypelevelName;
        });
        subscriber.next(data.list);
      });
    });
    this.stafflevelSelectDataList = new Observable((subscriber) => {
      const arr = [{id: 1, value: '???'}, {id: 2, value: '???'}, {id: 3, value: '???'}, {id: 4, value: '???'}, {id: 5, value: '???'}, {id: 6, value: '???'}, {id: 7, value: '???'}, {id: 8, value: '???'}, {id: 9, value: '???'}, {id: 10, value: '???'}, {
        id: 11,
        value: '??????'
      }, {id: 12, value: '??????'}, {id: 13, value: '??????'},];
      subscriber.next(arr);
    });
    this.titleslevelSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwTitlesLevel', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.titlesLevelName;
        });
        subscriber.next(data.list);
      });
    });
    this.dutieslevelSelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'DwDutiesLevel', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.dutiesLevelName;
        });
        subscriber.next(data.list);
      });
    });
  }

  /**
   * ????????????
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
   * ????????????
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

  getUpdateCallback() {
    return (data2 => {
      if (UtilHttp.notHasError(data2)) {
        MessageService.showGlobalMessage('success', '???????????????');
      }
    });
  }

  /**
   * ???????????????????????????
   */
  dutiesLevelUp() {
    this.editDutyLevelRef = this.modalService.open(this.editDutyLevelContent);
  }

  /**
   * ??????????????????????????????
   */
  saveDutyLevelUp() {
    if (!this.teacherexistingdutiesservingtime.match(/\d{4}.\d{2}/)) {
      MessageService.showGlobalMessage('danger', '???????????????????????????');
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
   * ???????????????????????????1???
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
   * ????????????????????????????????????
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
   * ????????????
   */
  phasesUp() {
    if (this.currentPhases == 5 && this.checkOneYear(new Date())) {
      MessageService.showGlobalMessage('danger', '??????????????????1??????');
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
        const datalist = [{id: '??????', value: '??????'}, {id: '??????', value: '??????'}, {id: '????????????', value: '????????????'}, {id: '?????????', value: '?????????'}];
        subscriber.next(datalist);
      });
    }
    this.editPhasesUpRef = this.modalService.open(this.editPhasesUpContent);
  }

  /**
   * ????????????????????????
   */
  savePhasesUp() {
    const newList = [];
    const newDept: any = {};
    newDept.id = this.PK.id;
    newDept.phases = Number(this.currentPhases) + 1;
    // ????????????????????????????????????????????????????????????????????????
    if (this.currentPhases != 2 && this.phasesUpTime) {
      if (!this.phasesUpTime.match(/\d{4}-\d{2}-\d{2}/)) {
        MessageService.showGlobalMessage('danger', '?????????????????????');
        return;
      } else if (this.checkDateInpu(this.phasesUpTime)) {
        MessageService.showGlobalMessage('danger', '???????????????????????????');
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
            MessageService.showGlobalMessage('danger', '????????????????????????');
            return;
          }
          if (!this.growthtime.match(/\d{4}.\d{2}/)) {
            MessageService.showGlobalMessage('danger', '???????????????????????????');
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
            MessageService.showGlobalMessage('danger', '??????????????????1??????');
            return;
          }
          newDept.partymemberdate = this.phasesUpTime;
          break;
      }
      // newDept.partyPhases = this.phasesUpSelect;
    } else {
      newDept.partyPhases = this.phasesUpSelect;
    }
    newList.push(newDept);
    this.fieldInfoService.updateData(newList).subscribe(this.getUpdateCallback());
    this.editPhasesUpRef.close();
    this.closeViewEvent.emit();
  }

  /**
   * ???????????????????????????????????????true????????????????????????false???????????????
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
   * ????????????????????????
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
        MessageService.showGlobalMessage('success', '???????????????');
        this.closeViewEvent.emit();
      }
    });
  }

  getDwRelationshipComponent() {
    return EditDwRelationshipComponent;
  }

  /**
   * ?????????????????????
   */
  downloadCadresTable() {
    MessageService.showGlobalMessage('danger', '????????????');
  }

  /**
   * ?????????????????????
   */
  downloadRelationshipTable() {
    window.location.href = environment.serverUrl + 'downloadRelationshipDocx/?id=' + this.editDataTemp.id + '&outPortType=' + this.relationshipStyle;
    this.chooseRelationshipStyleRef.close();
  }

  getBranchParty(event) {
    if (event) {
      this.branchParentId = event.parentId;
    }
  }

  getProfessional(event) {
    if (event) {
      this.professionalParentId = event.generalId;
    }
  }

  beforeSubmit(validate) {
    // ????????????????????????????????????????????????????????????????????????
    if (this.branchParentId && this.editDataTemp.generalparty != 'null' && this.branchParentId !== this.editDataTemp.generalparty) {
      validate.addError('?????????????????????????????????');
    } else if (!this.branchParentId && this.currentGeneral !== this.editDataTemp.generalparty) {
      validate.addError('?????????????????????????????????');
    }
    if (this.professionalParentId && this.editDataTemp.studentprofessional != 'null' && this.professionalParentId !== this.editDataTemp.generalparty) {
      if (this.editDataTemp.identity == '2') {
        validate.addError('?????????????????????????????????');
      }
    } else if (!this.professionalParentId && this.currentGeneral !== this.editDataTemp.generalparty) {
      if (this.editDataTemp == '2') {
        validate.addError('?????????????????????????????????');
      }
    }
  }

  /**
   * ????????????????????????????????????
   */
  fillBirthday() {
    // ?????????????????????????????????
    let idnumberBirthday;
    let idnumberShowBirthday;
    if (this.editDataTemp.idnumber && this.editDataTemp.idnumber.match(/^\d{17}[\dX]$/)) {
      idnumberBirthday = this.editDataTemp.idnumber.substring(6, 10) + '-' + this.editDataTemp.idnumber.substring(10, 12) + '-' + this.editDataTemp.idnumber.substring(12, 14);
      idnumberShowBirthday = this.editDataTemp.idnumber.substring(6, 10) + '.' + this.editDataTemp.idnumber.substring(10, 12);
    }
    // ???????????????????????????
    if (this.editDataTemp.showBirthday && this.editDataTemp.showBirthday !== '') {
      if (this.editDataTemp.showBirthday !== idnumberShowBirthday) {
        const f = confirm('????????????????????????????????????????????????????????????????????????????????????');
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

  // ??????
  changeStudentcategory() {
    this.editDataTemp.studentlevel = '';
    this.loadStudentLevelDataList();
  }

  /**
   * ????????????????????????????????????????????????????????????
   */
  loadStudentLevelDataList() {
    if (this.editDataTemp.studentcategory != '') {
      this.studentlevelSelectDataList = new Observable((subscriber) => {
        return this.http.post('getPageData', {entityName: 'DwStudentLevel', condition: {lhs: 'category', operator: EntityOperator.EQUALS, rhs: this.editDataTemp.studentcategory}}).subscribe((data: any) => {
          data.list.forEach(item => {
            item.id = item.id;
            item.value = item.studentLevelName;
          });
          subscriber.next(data.list);
        });
      });
    } else {
      this.studentlevelSelectDataList = null;
    }
  }

  // ???????????????
  addResumeRow() {
    let newData = [];
    if (this.resumeList) {
      newData = newData.concat(this.resumeList);
    }
    newData.push({});
    this.resumeList = newData;
  }

  // ???????????????
  deleteResumeRow(item) {
    const i = this.resumeList.indexOf(item)
    {
      this.resumeList.splice(i, 1);
    }
  }

  // ?????????????????????
  addAssessmentRow() {
    let newData = [];
    if (this.assessmentList) {
      newData = newData.concat(this.assessmentList);
    }
    newData.push({});
    this.assessmentList = newData;
  }

  // ?????????????????????
  deleteAssessmentRow(item) {
    const i = this.assessmentList.indexOf(item)
    {
      this.assessmentList.splice(i, 1);
    }
  }

  // ?????????????????????
  addTranRow() {
    let newData = [];
    if (this.trainList) {
      newData = newData.concat(this.trainList);
    }
    newData.push({});
    this.trainList = newData;
  }

  // ?????????????????????
  deleteTrainRow(item) {
    const i = this.trainList.indexOf(item)
    {
      this.trainList.splice(i, 1);
    }
  }

  // ?????????????????????
  addFamilyRow() {
    let newData = [];
    if (this.familyList) {
      newData = newData.concat(this.familyList);
    }
    newData.push({});
    this.familyList = newData;
  }

  // ?????????????????????
  deleteFamilyRow(item) {
    const i = this.familyList.indexOf(item)
    {
      this.familyList.splice(i, 1);
    }
  }

  // ???????????????
  addRapRow() {
    let newData = [];
    if (this.rapList) {
      newData = newData.concat(this.rapList);
    }
    newData.push({});
    this.rapList = newData;
  }

  // ???????????????
  deleteRapRow(item) {
    const i = this.rapList.indexOf(item)
    {
      this.rapList.splice(i, 1);
    }
  }

  /**
   * ??????????????????
   */
  commitToServer(): Observable<any> {
    if (this.editDataTemp.cadresmodel == 1) {
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
    } else {
      return this.fieldInfoService.genericSave(this.editDataTemp);
    }
  }

  /**
   * ?????????????????????????????????????????????
   */
  openDownloadRelationship() {
    // if (!this.selectrelationshiptyleList) {
    //   this.selectrelationshiptyleList = new Observable((subscriber) => {
    //     const arr = [{id: 0, value: '??????'}, {id: 1, value: '??????'}];
    //     subscriber.next(arr);
    //   });
    // }
    // this.chooseRelationshipStyleRef = this.modalService.open(this.chooseRelationshipStyleContent, {size: 'sm'});
    this.letterTemplateList = this.commonService.letterTemplateList;
    this.letterTemplate = "";
    this.validity = "";

    this.selectLetterTemplateRef = this.modalService.open(this.selectLetterTemplateContent);
  }


  /**
   * ???????????????
   */
  tobeApplicant() {
    this.changeTitle = '????????????';
    this.changePartyPhases = '????????????';
    // ?????????????????????1???
    this.editPartyPhasesRef = this.modalService.open(this.editPartyPhasesContent);
  }

  /**
   * ???????????????
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
    // ????????????
    return this.http.post('genericSaveAll', {
      entityName: 'DwPertyMember',
      valueList: list,
    });
  }


  /**
   * ????????????
   */
  pinrtTransfer() {
    // window.open(environment.serverUrl + 'viewRelationship/?id=' + this.editDataTemp.id + '&html=1&letterTemplate=' + this.letterTemplate + '&validity=' + this.validity);
    window.location.href = environment.serverUrl + 'downloadRelationshipDocx/?id=' + this.editDataTemp.id + '&letterTemplate=' + this.letterTemplate + '&validity=' + this.validity;
  }


}

