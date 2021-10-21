import {Component, ElementRef, Input, OnInit, TemplateRef, ViewChild} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {CommonDataTable} from '@shared-common/data-table';
import {ComponentMapService} from '@config';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {DwPertyMemberFieldInfoService} from './dw-perty-member-field-info-service';
import {DwPertyMemberService} from './dw-perty-member-service';
import {Observable} from 'rxjs';
import {ConditionExpr, EntityOperator} from '@shared-utils/entity';
import {DatePipe} from '@angular/common';
import {MessageService} from '@shared-services/message';
import {environment} from '@environments';
import {EventManager} from '@angular/platform-browser';
import {UtilHttp} from '@shared-utils/http';
import {Auth} from '@shared-services/auth';

@Component({
  selector: 'app-list-dw-perty-member',
  templateUrl: './list-dw-perty-member.component.html',
  styleUrls: ['./list-dw-perty-member.component.scss'],
  animations: [routerTransition()]
})
export class ListDwPertyMemberComponent extends CommonDataTable  {
  directPage = 1;

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
    public commonService: DwPertyMemberService,
    public fieldInfoService: DwPertyMemberFieldInfoService,
    public eventManager: EventManager,
  ) {
    super();
    this.eventManager.addGlobalEventListener('window', 'keyup.enter', () => {
      if (!this.isQueryCollapsed) {
        // 只有当有筛选框时才能触发事件
        this.searchData();
        this.isQueryCollapsed = true;
      }
    });
  }


  get checkSelect() {
    for (const key in this.selectPhases) {
      if (this.selectPhases[key]) {
        return true;
      }
    }
    return false;
  }
  @ViewChild('selectPhasesContent', {static: false}) selectPhasesContent: TemplateRef<any>;
  public selectPhasesContentRef: NgbModalRef;
  @Input() isQueryCollapsed = false;
  isOpratorCollapsed = false;
  // partyphases = 1;
  queryData: any = {};
  myCondition: any = {};
  // generalHistory = 0;
  historySelectDataList: any = {};
  // generalparty = 0;
  generalpartySelectDataList: any = {};
  // branchparty = 0;
  branchpartySelectDataList: any = {};
  // birthdayComparison = 0;
  comparisonSelectDataList: any = {};
  // phases = 0;
  phasesSelectDataList: any;
  // democrat = 0;
  democratSelectDataList: any;
  // gender = 0;
  genderSelectDataList: any;
  // identity = 0;
  identitySelectDataList: any;
  // ethnic = 0;
  ethnicSelectDataList: any;
  // applicationdateComparison = 0;
  applicantdate: any;
  // activistsdateComparison = 0;
  activistsdate: any;
  // partyPhasesComparison = 0;
  // partyPhases = 0;
  partyPhasesSelectDataList: any;
  // developmentdateComparison = 0;
  developmentdate: any;
  // probationarydateComparison = 0;
  probationarydate: any;
  // partymemberdateComparison = 0;
  partymemberdate: any;
  // manner = 0;
  mannerSelectDataList: any;
  // partypostComparison = 0;
  // partypost = 0;
  partypostSelectDataList: any;
  // pingyi = 0;
  pingyiSelectDataList: any;
  showResult = false;
  teacherpersonnelnatureSelectDataList: any;
  teachercategorySelectDataList: any;
  queryAcademicSelectDataList: any;
  queryDegreeSelectDataList: any;
  titlesSelectDataList: any;
  titlesLevelSelectDataList: any;
  dutiesLevelSelectDataList: any;
  teacherpostSelectDataList: any;
  jobtypeSelectDataList: any;
  jobtypelevelSelectDataList: any;
  studentcategorySelectDataList: any;
  studentlevelSelectDataList: any;
  studentprofessionalSelectDataList: any;
  studentschoolsystemSelectDataList: any;

  phasesStr: any = {
    1: '申请人',
    2: '积极分子',
    3: '党校学员',
    4: '发展对象',
    5: '预备党员',
    6: '正式党员',
    0: '不限',
  };
  queryPhases = '不限';
  selectPhases: any = {
    1: false,
    2: false,
    3: false,
    4: false,
    5: false,
    6: false,
    0: true
  };

  selectPhasesTemplate: any;

  phasesParam = [0];

  pageChange(event) {
    this.pageData.pageChange(event);
    this.directPage = this.pageData.page;
  }
  enterToPage() {
    this.pageData.page = this.directPage;
    // this.loadDataList();
  }

  beforeInit() {
    this.valueInit();
    this.loadSelectDataList();
    this.loadGeneralParty();
    this.loadBranchParty();
  }

  /**
   * 添加条件参数
   */
  beforeQuery() {
    this.submitQueryData.entityName = 'DwPertyMember';
    if (Auth.userData.generalPartyId) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('pertymembermodel', EntityOperator.EQUALS, '1'));
    }
    // 历史
    if (this.myCondition.generalHistory == 0 || this.myCondition.generalHistory == 1) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('history', EntityOperator.EQUALS, this.myCondition.generalHistory));
    }
    // 党委总支
    // 如果登录账号为下级管理员，则不要限制条件只能查询该账号所在党委和所拥有查看权限下的党委数据
    if (this.myCondition.generalparty != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('generalparty', EntityOperator.EQUALS, this.myCondition.generalparty));
    } else {
      if (Auth.userData.generalPartyId) {
        const generalpartyList = [];
        generalpartyList.push(Auth.userData.generalPartyId);
        if (Auth.userData.viewPermissions  && Auth.userData.viewPermissions.indexOf(',') > -1) {
          const viewPermissionsArr =  Auth.userData.viewPermissions.split(',');
          viewPermissionsArr.forEach((view: any) => {
            generalpartyList.push(view);
          });
        }
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('generalparty', EntityOperator.IN, generalpartyList));
      }
    }
    // 党委支部
    if (this.myCondition.branchparty != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('branchparty', EntityOperator.EQUALS, this.myCondition.branchparty));
    }
    // 性别
    if (this.myCondition.gender != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('gender', EntityOperator.EQUALS, this.myCondition.gender));
    }
    // 民族
    if (this.myCondition.ethnic != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('ethnic', EntityOperator.EQUALS, this.myCondition.ethnic));
    }
    // 身份

    if (this.myCondition.identity != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('identity', EntityOperator.EQUALS, this.myCondition.identity));
    }
    // 出生年月
    if (this.myCondition.birthday) {
      if (this.myCondition.birthday.match(/^\d{4}.\d{2}$/)) {
        this.operatorDate(this.myCondition.birthday, this.myCondition.birthdayComparison, 'birthday');
      } else {
        MessageService.showGlobalMessage('danger', '出生年月格式错误');
      }
    }
    if (this.myCondition.gender != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('gender', EntityOperator.EQUALS, this.myCondition.gender));
    }
    // 发展阶段
    if (this.phasesParam[0] != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('phases', EntityOperator.IN, this.phasesParam));
    }
    // 所属党派
    if (this.myCondition.democrat != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('democrat', EntityOperator.EQUALS, this.myCondition.democrat));
    }
    // 申请时间
    const datePipe = new DatePipe('en');
    if (this.myCondition.applicantdate) {
      const value = datePipe.transform(this.myCondition.applicantdate, 'yyyy-MM-dd');
      const entityOperator = this.operator(this.myCondition.applicationdateComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('applicantdate', entityOperator, value));
      }
    }
    // 积极分子时间
    if (this.myCondition.activistsdate) {
      const value = datePipe.transform(this.myCondition.activistsdate, 'yyyy-MM-dd');
      const entityOperator = this.operator(this.myCondition.activistsdateComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('activistsdate', entityOperator, value));
      }
    }
    // 党校
    if (this.myCondition.partyPhases && this.myCondition.partyPhases != '0') {
      const entityOperator = this.operator(this.myCondition.activistsdateComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('partyPhases', entityOperator, this.myCondition.partyPhases));
      }
    }
    // 发展对象时间
    if (this.myCondition.developmentdate) {
      const value = datePipe.transform(this.myCondition.developmentdate, 'yyyy-MM-dd');
      const entityOperator = this.operator(this.myCondition.developmentdateComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('developmentdate', entityOperator, value));
      }
    }
    // 预备党员时间
    if (this.myCondition.probationarydate) {
      const value = datePipe.transform(this.myCondition.probationarydate, 'yyyy-MM-dd');
      const entityOperator = this.operator(this.myCondition.probationarydateComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('probationarydate', entityOperator, value));
      }
    }
    // 转正时间
    if (this.myCondition.partymemberdate) {
      const value = datePipe.transform(this.myCondition.partymemberdate, 'yyyy-MM-dd');
      const entityOperator = this.operator(this.myCondition.partymemberdateComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('partymemberdate', entityOperator, value));
      }
    }
    // 党员增加
    if (this.myCondition.manner != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('manner', EntityOperator.EQUALS, this.myCondition.manner));
    }
    // 党内职务
    if (this.myCondition.partypost && this.myCondition.partypost != '0') {
      const entityOperator = this.operator(this.myCondition.partypostComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('partypost', entityOperator, this.myCondition.partypost));
      }
    }
    // 党员评议
    if (this.myCondition.pingyi != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('pingyi', EntityOperator.EQUALS, this.myCondition.pingyi));
    }
    // 人事性质
    if (this.myCondition.teacherpersonnelnature && this.myCondition.teacherpersonnelnature != '0') {
      const entityOperator = this.operator(this.myCondition.teacherpersonnelnatureComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('teacherpersonnelnature', entityOperator, this.myCondition.teacherpersonnelnature));
      }
    }
    // 类别
    if (this.myCondition.teachercategory != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('teachercategory', EntityOperator.EQUALS, this.myCondition.teachercategory));
    }
    // 参加工作时间
    if (this.myCondition.teachertoworktime) {
      if (this.myCondition.teachertoworktime.match(/^\d{4}.\d{2}$/)) {
        this.operatorDate(this.myCondition.teachertoworktime, this.myCondition.teachertoworktimeComparison, 'teachertoworktime');
      } else {
        MessageService.showGlobalMessage('danger', '参加工作时间格式错误');
      }
    }
    // 来校时间
    if (this.myCondition.toschool) {
      if (this.myCondition.toschool.match(/^\d{4}.\d{2}$/)) {
        this.operatorDate(this.myCondition.toschool, this.myCondition.toschoolComparison, 'toschool');
      } else {
        MessageService.showGlobalMessage('danger', '参加工作时间格式错误');
      }
    }
    // 全日制学历
    if (this.myCondition.teacherfulltimeacademic && this.myCondition.teacherfulltimeacademic != 0) {
      const entityOperator = this.operator(this.myCondition.teacherfulltimeacademicComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('teacherfulltimeacademic', entityOperator, this.myCondition.teacherfulltimeacademic));
      }
    }
    // 全日制学位
    if (this.myCondition.teacherfulltimedegree && this.myCondition.teacherfulltimedegree != 0) {
      const entityOperator = this.operator(this.myCondition.teacherfulltimedegreeComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('teacherfulltimedegree', entityOperator, this.myCondition.teacherfulltimedegree));
      }
    }
    // 在职教育学历
    if (this.myCondition.inserviceacademic && this.myCondition.inserviceacademic != 0) {
      const entityOperator = this.operator(this.myCondition.inserviceacademicComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('inserviceacademic', entityOperator, this.myCondition.inserviceacademic));
      }
    }
    // 在职教育学位
    if (this.myCondition.inservicedegree && this.myCondition.inservicedegree != 0) {
      const entityOperator = this.operator(this.myCondition.inservicedegreeComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('inservicedegree', entityOperator, this.myCondition.inservicedegree));
      }
    }
    // 专业技术服务
    if (this.myCondition.technicaltitles && this.myCondition.technicaltitles != 0) {
      const entityOperator = this.operator(this.myCondition.technicaltitlesComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('technicaltitles', entityOperator, this.myCondition.technicaltitles));
      }
    }
    // 职称级别
    if (this.myCondition.technicaltitleslevel && this.myCondition.technicaltitleslevel != 0) {
      const entityOperator = this.operator(this.myCondition.technicaltitleslevelComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('technicaltitleslevel', entityOperator, this.myCondition.technicaltitleslevel));
      }
    }
    // 职务级别
    if (this.myCondition.teacherexistingdutieslevel && this.myCondition.teacherexistingdutieslevel != 0) {
      const entityOperator = this.operator(this.myCondition.teacherexistingdutieslevelComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('teacherexistingdutieslevel', entityOperator, this.myCondition.teacherexistingdutieslevel));
      }
    }
    // 任副科时间
    if (this.myCondition.vicedivision) {
      if (this.myCondition.vicedivision.match(/^\d{4}.\d{2}$/)) {
        this.operatorDate(this.myCondition.vicedivision, this.myCondition.vicedivisionComparison, 'vicedivision');
      } else {
        MessageService.showGlobalMessage('danger', '任副科时间格式错误');
      }
    }
    // 任正科时间
    if (this.myCondition.anyzhengke) {
      if (this.myCondition.anyzhengke.match(/^\d{4}.\d{2}$/)) {
        this.operatorDate(this.myCondition.anyzhengke, this.myCondition.anyzhengkeComparison, 'anyzhengke');
      } else {
        MessageService.showGlobalMessage('danger', '任正科时间格式错误');
      }
    }
    // 任副处时间
    if (this.myCondition.deputyatthe) {
      if (this.myCondition.deputyatthe.match(/^\d{4}.\d{2}$/)) {
        this.operatorDate(this.myCondition.deputyatthe, this.myCondition.deputyattheComparison, 'deputyatthe');
      } else {
        MessageService.showGlobalMessage('danger', '任副处时间格式错误');
      }
    }
    // 任正处时间
    if (this.myCondition.lsatany) {
      if (this.myCondition.lsatany.match(/^\d{4}.\d{2}$/)) {
        this.operatorDate(this.myCondition.lsatany, this.myCondition.lsatanyComparison, 'lsatany');
      } else {
        MessageService.showGlobalMessage('danger', '任正处时间格式错误');
      }
    }
    // 最后学历学位
    if (this.myCondition.lastacademicdegree && this.myCondition.lastacademicdegree != 0) {
      const entityOperator = this.operator(this.myCondition.lastacademicdegreeComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('lastacademicdegree', entityOperator, this.myCondition.lastacademicdegree));
      }
    }
    // 岗位
    if (this.myCondition.teacherpost && this.myCondition.teacherpost != 0) {
      const entityOperator = this.operator(this.myCondition.teacherpostComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('teacherpost', entityOperator, this.myCondition.teacherpost));
      }
    }
    // 岗位类型
    if (this.myCondition.jobtype != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('jobtype', EntityOperator.EQUALS, this.myCondition.jobtype));
    }
    // 岗位等级
    if (this.myCondition.postgrades != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('postgrades', EntityOperator.EQUALS, this.myCondition.postgrades));
    }
    // 学生
    // 类别
    if (this.myCondition.studentcategory != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('studentcategory', EntityOperator.EQUALS, this.myCondition.studentcategory));
    }
    // 层次
    if (this.myCondition.studentlevel && this.myCondition.studentlevel != 0) {
      const entityOperator = this.operator(this.myCondition.studentlevelComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('studentlevel', entityOperator, this.myCondition.studentlevel));
      }
    }
    // 现有学历
    if (this.myCondition.studentexistingacademic && this.myCondition.studentexistingacademic != 0) {
      const entityOperator = this.operator(this.myCondition.studentexistingacademicComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('studentexistingacademic', entityOperator, this.myCondition.studentexistingacademic));
      }
    }
    // 年级
    if (this.myCondition.studentyear && this.myCondition.studentyear != 0) {
      const entityOperator = this.operator(this.myCondition.studentyearComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('studentyear', entityOperator, this.myCondition.studentyear));
      }
    }
    // 专业
    if (this.myCondition.studentprofessional != 0) {
      this.submitQueryData.condition.conditionList.push(new ConditionExpr('studentprofessional', EntityOperator.EQUALS, this.myCondition.studentprofessional));
    }
    // 学制
    if (this.myCondition.studentschoolsystem && this.myCondition.studentschoolsystem != 0) {
      const entityOperator = this.operator(this.myCondition.studentschoolsystemComparison);
      if (entityOperator !== 'false') {
        this.submitQueryData.condition.conditionList.push(new ConditionExpr('studentschoolsystem', entityOperator, this.myCondition.studentschoolsystem));
      }
    }
  }


  /**
   * 比较运算符
   */
  operator(index) {
    switch (index) {
      case 0:
        return EntityOperator.EQUALS;
      case '0':
        return EntityOperator.EQUALS;
      case '1':
        return EntityOperator.GREATER_THAN;
      case '2':
        return EntityOperator.GREATER_THAN_EQUAL_TO;
      case '3':
        return EntityOperator.LESS_THAN;
      case '4':
        return EntityOperator.LESS_THAN_EQUAL_TO;
      default:
        return 'false';
    }
  }

  /**
   * 时间比较
   */
  operatorDate(date, comparison, entityName) {
    // FIXME: 这里保证了数据库时间类型的查询，但是若数据库存储的是字符串则可能异常？？
    const datePipe = new DatePipe('en');
    let value1 = date.replace('.', '-');
    const arr = value1.split('-');
    let value2 = value1;
    value1 = value1 + '-01';
    value1.split('-');
    const getYear = arr[0];
    const getMonth = arr[1];
    value1 = datePipe.transform(value1, 'yyyy-MM-dd');
    if (getMonth >= 11) {
      value2 = datePipe.transform((Number(getYear) + 1) + '-01-01', 'yyyy-MM-dd');
    } else {
      value2 = datePipe.transform(getYear + '-' + (Number(getMonth) + 1), 'yyyy-MM-dd');
    }
    switch (comparison) {
      case 0:
        this.submitQueryData.condition.conditionList.push(new ConditionExpr(entityName, EntityOperator.GREATER_THAN_EQUAL_TO, value1));
        this.submitQueryData.condition.conditionList.push(new ConditionExpr(entityName, EntityOperator.LESS_THAN, value2));
        break;
      case '0':
        this.submitQueryData.condition.conditionList.push(new ConditionExpr(entityName, EntityOperator.GREATER_THAN_EQUAL_TO, value1));
        this.submitQueryData.condition.conditionList.push(new ConditionExpr(entityName, EntityOperator.LESS_THAN, value2));
        break;
      case '1':
        this.submitQueryData.condition.conditionList.push(new ConditionExpr(entityName, EntityOperator.GREATER_THAN_EQUAL_TO, value2));
        break;
      case '2':
        this.submitQueryData.condition.conditionList.push(new ConditionExpr(entityName, EntityOperator.GREATER_THAN_EQUAL_TO, value1));
        break;
      case '3':
        this.submitQueryData.condition.conditionList.push(new ConditionExpr(entityName, EntityOperator.LESS_THAN, value1));
        break;
      case '4':
        this.submitQueryData.condition.conditionList.push(new ConditionExpr(entityName, EntityOperator.LESS_THAN, value2));
        break;
    }
  }

  valueInit() {
    this.myCondition.generalHistory = 0;
    this.myCondition.generalparty = 0;
    this.myCondition.branchparty = 0;
    this.myCondition.ethnic = 0;
    this.myCondition.identity = 0;
    this.myCondition.gender = 0;
    this.myCondition.birthdayComparison = 0;
    this.myCondition.phases = 0;
    this.myCondition.democrat = 0;
    this.myCondition.applicationdateComparison = 0;
    this.myCondition.activistsdateComparison = 0;
    this.myCondition.partyPhasesComparison = 0;
    this.myCondition.partyPhases = 0;
    this.myCondition.developmentdateComparison = 0;
    this.myCondition.probationarydateComparison = 0;
    this.myCondition.partymemberdateComparison = 0;
    this.myCondition.manner = 0;
    this.myCondition.partypostComparison = 0;
    this.myCondition.partypost = 0;
    this.myCondition.pingyi = 0;
    this.myCondition.teacherpersonnelnatureComparison = 0;
    this.myCondition.teacherpersonnelnature = 0;
    this.myCondition.teachercategory = 0;
    this.myCondition.teacherfulltimeacademic = 0;
    this.myCondition.teachertoworktimeComparison = 0;
    this.myCondition.toschoolComparison = 0;
    this.myCondition.teacherfulltimeacademicComparison = 0;
    this.myCondition.teacherfulltimedegreeComparison = 0;
    this.myCondition.teacherfulltimedegree = 0;
    this.myCondition.inserviceacademicComparison = 0;
    this.myCondition.inserviceacademic = 0;
    this.myCondition.inservicedegreeComparison = 0;
    this.myCondition.inservicedegree = 0;
    this.myCondition.technicaltitlesComparison = 0;
    this.myCondition.technicaltitles = 0;
    this.myCondition.technicaltitleslevelComparison = 0;
    this.myCondition.technicaltitleslevel = 0;
    this.myCondition.teacherexistingdutieslevelComparison = 0;
    this.myCondition.teacherexistingdutieslevel = 0;
    this.myCondition.vicedivisionComparison = 0;
    this.myCondition.anyzhengkeComparison = 0;
    this.myCondition.deputyattheComparison = 0;
    this.myCondition.lsatanyComparison = 0;
    this.myCondition.lastacademicdegreeComparison = 0;
    this.myCondition.lastacademicdegree = 0;
    this.myCondition.teacherpostComparison = 0;
    this.myCondition.teacherpost = 0;
    this.myCondition.jobtype = 0;
    this.myCondition.postgrades = 0;
    this.myCondition.studentcategory = 0;
    this.myCondition.studentlevelComparison = 0;
    this.myCondition.studentlevel = 0;
    this.myCondition.studentexistingacademicComparison = 0;
    this.myCondition.studentexistingacademic = 0;
    this.myCondition.studentyearComparison = 0;
    this.myCondition.studentprofessional = 0;
    this.myCondition.studentschoolsystemComparison = 0;
    this.myCondition.studentschoolsystem = 0;
  }

  loadSelectDataList() {
    let userGeneralPartyId = '0';
    if (Auth.userData.generalPartyId) {
      userGeneralPartyId = Auth.userData.generalPartyId;
    }
    this.http.post('getQueryPertyMemberListSelectData', {userGeneralPartyId}).subscribe((data: any) => {
      this.phasesSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.phasesSelectDataList);
      });
      this.democratSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.democratSelectDataList);
      });
      this.genderSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.genderSelectDataList);
      });
      this.identitySelectDataList = new Observable((subscriber) => {
        subscriber.next(data.identitySelectDataList);
      });
      this.ethnicSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.ethnicSelectDataList);
      });
      this.partyPhasesSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.partyPhasesSelectDataList);
      });
      this.mannerSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.mannerSelectDataList);
      });
      this.partypostSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.partypostSelectDataList);
      });
      this.teacherpersonnelnatureSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.teacherpersonnelnatureSelectDataList);
      });
      this.teachercategorySelectDataList = new Observable((subscriber) => {
        subscriber.next(data.teachercategorySelectDataList);
      });
      this.queryAcademicSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.queryAcademicSelectDataList);
      });
      this.titlesSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.titlesSelectDataList);
      });
      this.titlesLevelSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.titlesLevelSelectDataList);
      });
      this.dutiesLevelSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.dutiesLevelSelectDataList);
      });
      this.teacherpostSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.teacherpostSelectDataList);
      });
      this.jobtypeSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.jobtypeSelectDataList);
      });
      this.jobtypelevelSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.jobtypelevelSelectDataList);
      });
      this.studentcategorySelectDataList = new Observable((subscriber) => {
        subscriber.next(data.studentcategorySelectDataList);
      });
      this.studentlevelSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.studentlevelSelectDataList);
      });
      this.studentprofessionalSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.studentprofessionalSelectDataList);
      });
      this.studentschoolsystemSelectDataList = new Observable((subscriber) => {
        subscriber.next(data.studentschoolsystemSelectDataList);
      });
      // 党组织模板
      this.commonService.letterTemplateList = new Observable((subscriber => {
        subscriber.next(data.letterTemplateList);
      }));
    });
    this.historySelectDataList = new Observable((subscriber) => {
      const dataList = [{id: 0, value: '现有'}, {id: 1, value: '历史'}, {id: 2, value: '全部'}];
      subscriber.next(dataList);
    });
    this.comparisonSelectDataList = new Observable((subscriber) => {
      const dataList = [{id: 0, value: '='}, {id: 1, value: '>'}, {id: 2, value: '>='}, {id: 3, value: '<'}, {id: 4, value: '<='}];
      subscriber.next(dataList);
    });
    this.pingyiSelectDataList = new Observable((subscriber) => {
      const dataList = [{id: '是', value: '是'}, {id: '否', value: '否'}, {id: 0, value: '不限'}];
      subscriber.next(dataList);
    });
    this.queryDegreeSelectDataList = new Observable((subscriber) => {
      const dataList = [{id: 1, value: '无'}, {id: 2, value: '学士学位'}, {id: 3, value: '硕士学位'}, {id: 4, value: '博士学位'}, {id: 0, value: '不限'}];
      subscriber.next(dataList);
    });
  }

  // 这里需要判断，如果登录账号是下级管理员，需要对可选列表做限制，只允许查看账号所在党文，以及拥有查看权限的党委

  /**
   * 获取分党委下拉框列表数据
   */
  loadGeneralParty() {
    this.myCondition.generalparty = 0;
    const list = [{lhs: 'parentId', operator: EntityOperator.EQUALS, rhs: 'null'}];
    if (this.userData.generalPartyId && this.userData.generalPartyId !== '') {
      const generalList = [];
      generalList.push(this.userData.generalPartyId);
      if (this.userData.viewPermissions && this.userData.viewPermissions.indexOf(',') > -1) {
        const viewlist = this.userData.viewPermissions.split(',');
        viewlist.forEach((view: any) => {
          generalList.push(view);
        });
      }
      // TODO:待验证
      list.push(new ConditionExpr('id', EntityOperator.IN, generalList));
    }
    if (this.myCondition.generalHistory !== '2') {
      list.push({lhs: 'generalPartyHistory', operator: EntityOperator.EQUALS, rhs: this.myCondition.generalHistory});
    }
    this.generalpartySelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {
        entityName: 'DwGeneralParty',
        condition: {
          conditionList: list,
          operator: EntityOperator.AND
        },
        orderBy: ['orderNum']
      }).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.generalPartyName;
        });
        data.list.push({id: 0, value: '不限'});
        subscriber.next(data.list);
      });
    });
  }

  loadBranchParty() {
    this.myCondition.branchparty = 0;
    const list = [{lhs: 'parentId', operator: EntityOperator.EQUALS, rhs: this.myCondition.generalparty}];
    if (this.myCondition.generalHistory !== '2') {
      list.push({lhs: 'generalPartyHistory', operator: EntityOperator.EQUALS, rhs: this.myCondition.generalHistory});
    }
    this.branchpartySelectDataList = new Observable((subscriber) => {
      return this.http.post('getPageData', {
        entityName: 'DwGeneralParty',
        condition: {
          conditionList: list, operator: EntityOperator.AND
        }
      }).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.generalPartyName;
        });
        data.list.push({id: 0, value: '不限'});
        subscriber.next(data.list);
      });
    });
  }

  historyChanged() {
    // this.generalpartySelectDataList = [];
    this.loadGeneralParty();
    this.loadBranchParty();
  }

  /**
   * 查询
   */
  searchAll() {
    // this.listDwPertyMemberComponent.loadDataList();
    if (!this.showResult) {
      this.showResult = true;
    }
  }

  reset() {
    this.queryData = {};
    this.myCondition = {};
    this.valueInit();
    this.showResult = false;
  }

  /**
   * 根据PK导出报表
   */
  exportPeopleInfo() {
    let PK = '&PK=';
    this.selectedPK.forEach(value => {
      PK = PK + value.id + '-';
    });
    window.location.href = environment.serverUrl + 'exportPeopleToXlsx/?all=0&userId=' + Auth.userData.userLoginId + PK;
  }

  /**
   * 根据查询条件导出报表
   */
  exportPeopleInfoAll() {
    this.http.post('submitQueryData', this.submitQueryData).subscribe((data: any) => {
      window.location.href = environment.serverUrl + 'exportPeopleToXlsxByQueryDataFormat/?key=' + data.key + '&userId=' + Auth.userData.userLoginId;
    });
  }

  searchData() {
    this.pageData.page = 1;
    this.submitQueryData.viewIndex = 0;
    this.loadDataList();
    document.getElementById('buttom').scrollIntoView(); // 跳转到底部
  }

  loadDataList() {
    this.makeCondition();
    this.beforeQuery();
    // this.fieldInfoService.getPageData(this.submitQueryData).subscribe((data: any) => {
    //   this.dataList = data.list;
    //   this.pageData.listSize = data.listSize;
    //   this.afterDataLoaded();
    // });
    this.http.post('getPertyMemberList', this.submitQueryData).subscribe((data: any) => {
      this.dataList = data.list;
      this.pageData.listSize = data.listSize;
      this.afterDataLoaded();
    });
  }



  /**
   * 恢复标记删除
   * @param item
   */
  confirmRecovery(item) {
    item.history = '0';
    this.http.post('genericSave', {
      entityName: 'DwPertyMember',
      fieldMap: item,
      autoPK: true
    }).subscribe((data: any) => {
      this.loadDataList();
      MessageService.showGlobalMessage('success', '恢复成功');
    });
  }

  /**
   * 标记删除党员，将history字段设为1
   */
  historyList() {
    const pkList = this.selectedPK;
    const newList = [];
    for (let i = 0; i < pkList.length; i++) {
      const newDept: any = {};
      newDept.id = pkList[i].id;
      newDept.history = 1;
      newList.push(newDept);
    }
    this.fieldInfoService.markDelete(newList).subscribe(this.getMarkDeleteCallback());
  }

  getMarkDeleteCallback() {
    return (data2 => {
      if (UtilHttp.notHasError(data2)) {
        MessageService.showGlobalMessage('success', '删除完成！');
        this.loadDataList();
      }
    });
  }

  /**
   * 打开选择发展阶段的框
   */
  openselectPhasesAdapter() {
    this.selectPhasesTemplate = this.selectPhases;
    this.selectPhasesContentRef = this.modalService.open(this.selectPhasesContent);
  }

  /**
   * 确定选择发展阶段
   */
   saveSelectPhases() {
    this.selectPhases = this.selectPhasesTemplate;
    console.log(this.selectPhases);



    this.splitPhasesStreing();
    this.selectPhasesContentRef.close();
  }

  /**
   * 拼接发展对象字符串
   */
  splitPhasesStreing() {
    let str = '';
    const list = [];
    for (const key in this.selectPhases) {
      if (this.selectPhases[key] === true) {
        str = str + ',' + this.phasesStr[key];
        list.push(key);
      }
    }
    if (str.startsWith(',')) {
      this.queryPhases = str.substring(1, str.length);
    }
    this.phasesParam = list;
    console.log(this.queryPhases);

  }


  /**
   * 点击"不限"时，应取消其他发展阶段；点击其他发展阶段时候，不能"不限"
   */
  cleanOthers() {
    if (this.selectPhases[0]) {
      for (const key in this.selectPhases) {
        if (key == '0') {
          continue;
        }
        this.selectPhases[key] = false;
      }
    }
  }

  clean0() {
    if (this.selectPhases[0]) {
      this.selectPhases[0] = false;
    }
  }

  get userData() {
    return Auth.userData;
  }
}
