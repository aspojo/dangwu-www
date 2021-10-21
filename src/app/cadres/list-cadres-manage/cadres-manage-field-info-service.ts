import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';
import {Observable} from 'rxjs';
import {Auth} from '@shared-services/auth';

@Injectable()
export class CadresManageFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwPertyMember';
  }

  get queryEntityName() {
    return 'DwPertyMemberView';
  }
  display: any = {};
  fieldInfoList = [];

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'id', PK: 'Y', fieldLabel: 'ID', showInTable: 'Y', showInView: 'Y', required: 'Y', isValueField: 'Y'},
      {fieldName: 'sort', fieldLabel: '排序', orderBy: '+'},
      {fieldName: 'old', fieldLabel: '历史id',},
      {fieldName: 'history', fieldLabel: '历史',},
      {fieldName: 'photoaddress', fieldLabel: '照片', showInView: 'Y', showInEdit: 'Y', component: 'imageUpload',},
      {fieldName: 'name', fieldLabel: '姓名', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', required: 'Y', isShowField: 'Y', displayName: 'name',},
      {
        fieldName: 'generalparty', fieldLabel: '分党委/党总支', showInEdit: 'Y', component: 'complexSelect',
        relEntityName: 'DwGeneralParty',
      },
      {fieldName: 'generalpartyValue', fieldLabel: '分党委/党总支', showInView: 'Y', displayName: 'generalparty',},
      {
        fieldName: 'branchparty', fieldLabel: '党支部', showInEdit: 'Y',  component: 'complexSelect',
        relEntityName: 'DwGeneralParty',
      },
      {fieldName: 'branchpartyValue', fieldLabel: '党支部', showInView: 'Y', displayName: 'branchparty'},
      {
        fieldName: 'gender', fieldLabel: '性别', showInEdit: 'Y', component: 'select', required: 'Y',
        relEntityName: 'DwGender',
      },
      {fieldName: 'genderValue', fieldLabel: '性别', showInTable: 'Y', showInView: 'Y', displayName: 'gender'},
      {
        fieldName: 'ethnic', fieldLabel: '民族', showInEdit: 'Y', component: 'complexSelect', required: 'Y',
        relEntityName: 'DwEthnic',
      },
      {fieldName: 'ethnicValue', fieldLabel: '民族名称', showInTable: 'Y', showInView: 'Y', displayName: 'ethnic'},
      {fieldName: 'hometown', fieldLabel: '籍贯', showInTable: 'Y', showInView: 'Y', required: 'Y', showInEdit: 'Y', displayName: 'hometown'},
      {fieldName: 'idnumber', fieldLabel: '身份证号', showInTable: 'Y', required: 'Y', showInView: 'Y', showInEdit: 'Y', displayName: 'idnumber'},
      {fieldName: 'birthday', fieldLabel: '出生年月', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', displayName: 'birthday'},
      {
        fieldName: 'identity', fieldLabel: '身份', showInEdit: 'Y', required: 'Y', component: 'select',
      },
      {fieldName: 'identityValue', fieldLabel: '身份', showInTable: 'Y', showInView: 'Y', displayName: 'identity'},
      {
        fieldName: 'department', fieldLabel: '所属部门', showInEdit: 'Y', component: 'complexSelect',
        relEntityName: 'DwBuMen', displayName: '',
      },
      {fieldName: 'departmentValue', fieldLabel: '所属部门', showInTable: 'Y', showInView: 'Y', displayName: 'department'},
      {fieldName: 'contact', fieldLabel: '联系电话', showInView: 'Y', showInEdit: 'Y', displayName: 'contact'},
      {fieldName: 'birth', fieldLabel: '出生地', showInTable: 'Y', showInView: 'Y', required: 'Y', showInEdit: 'Y', displayName: 'birth'},
      {fieldName: 'age', fieldLabel: '年龄', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', displayName: 'age'},
      {
        fieldName: 'democrat', fieldLabel: '民主党派', component: 'complexSelect',
        relEntityName: 'DwDemocrat',
      },
      {fieldName: 'democratValue', fieldLabel: '民主党派', displayName: 'democrat'},
      {fieldName: 'applicantdate', fieldLabel: '申请时间', fieldType: 'date', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y', displayName: 'applicantdate'},
      {fieldName: 'activistsdate', fieldLabel: '积极分子时间', fieldType: 'date', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y', displayName: 'activistsdate'},
      {fieldName: 'partyPhases', fieldLabel: '党校期数', showInQuery: 'Y',},
      {fieldName: 'partyPhasesValue', fieldLabel: '党校期数', showInTable: 'Y', showInView: 'Y', displayName: 'partyPhases'},
      {fieldName: 'developmentdate', fieldLabel: '发展对象时间', fieldType: 'date', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y', displayName: 'developmentdate'},
      {fieldName: 'volunteerbook', fieldLabel: '志愿书编号', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y', displayName: 'volunteerbook'},
      {fieldName: 'probationarydate', fieldLabel: '入党时间', fieldType: 'date', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y', displayName: 'probationarydate'},
      {fieldName: 'partymemberdate', fieldLabel: '转正时间', fieldType: 'date', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y', displayName: 'partymemberdate'},
      {
        fieldName: 'partypost', fieldLabel: '党内职务', showInQuery: 'Y', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'partypostValue', fieldLabel: '党内职务', showInView: 'Y', displayName: 'partypost'},
      {
        fieldName: 'manner', fieldLabel: '党员增加', showInQuery: 'Y', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'mannerValue', fieldLabel: '党员增加', showInView: 'Y', displayName: 'manner'},
      {fieldName: 'pingyi', fieldLabel: '党员评议', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y', displayName: 'pingyi'},
      {fieldName: 'pyresult', fieldLabel: '评议结果', showInView: 'Y', showInEdit: 'Y', displayName: 'pyresult'},
      {fieldName: 'growthtime', fieldLabel: '增加时间', showInView: 'Y', showInEdit: 'Y', displayName: 'growthtime'},
      {
        fieldName: 'teacherfulltimeacademic', fieldLabel: '全日制学历', showInEdit: 'Y', component: 'select',
      },
      // {fieldName: 'teacherfulltimeacademicValue', fieldLabel: '全日制学历', showInView: 'Y', displayName: 'teacherfulltimeacademic'},
      // {fieldName: 'teacherfulltimeacademicprofessional', fieldLabel: '院系专业', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherfulltimeacademicprofessional'},
      // {fieldName: 'teacherfulltimeacademicschool', fieldLabel: '全日制学历学校', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherfulltimeacademicschool'},
      // {fieldName: 'teacherfulltimeacademicperiodtime', fieldLabel: '全日制学历从学时间段', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherfulltimeacademicperiodtime'},
      {fieldName: 'teacherfulltimeacademicValue', fieldLabel: '全日制学历', showInView: 'Y', displayName: 'teacherfulltimeacademic'},
      {fieldName: 'teacherfulltimeacademicprofessional', fieldLabel: '院系专业', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherfulltimeacademicprofessional'},
      {fieldName: 'teacherfulltimeacademicschool', fieldLabel: '学校', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherfulltimeacademicschool'},
      {fieldName: 'teacherfulltimeacademicperiodtime', fieldLabel: '从学时间段', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherfulltimeacademicperiodtime'},
      {
        fieldName: 'teacherfulltimedegree', fieldLabel: '全日制学位', showInEdit: 'Y', component: 'select',
      },
      // {fieldName: 'teacherfulltimedegreeValue', fieldLabel: '全日制学位', showInView: 'Y', displayName: 'teacherfulltimedegree'},
      // {fieldName: 'teacherfulltimedegreeprofessional', fieldLabel: '全日制学位院系专业', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherfulltimedegreeprofessional'},
      // {fieldName: 'teacherfulltimedegreeschool', fieldLabel: '全日制学位学校', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherfulltimedegreeschool'},
      // {fieldName: 'teacherfulltimedegreeperiodtime', fieldLabel: '全日制学位从学时间段', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherfulltimedegreeperiodtime'},
      {fieldName: 'teacherfulltimedegreeValue', fieldLabel: '全日制学位', showInView: 'Y', displayName: 'teacherfulltimedegree'},
      {fieldName: 'teacherfulltimedegreeprofessional', fieldLabel: '院系专业', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherfulltimedegreeprofessional'},
      {fieldName: 'teacherfulltimedegreeschool', fieldLabel: '学校', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherfulltimedegreeschool'},
      {fieldName: 'teacherfulltimedegreeperiodtime', fieldLabel: '从学时间段', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherfulltimedegreeperiodtime'},
      {
        fieldName: 'inserviceacademic', fieldLabel: '在职学历', showInEdit: 'Y', component: 'select',
      },
      // {fieldName: 'inserviceacademicValue', fieldLabel: '在职学历', showInView: 'Y', displayName: 'inserviceacademic'},
      // {fieldName: 'inserviceacademicprofessional', fieldLabel: '在职学历院系专业', showInView: 'Y', showInEdit: 'Y', displayName: 'inserviceacademicprofessional'},
      // {fieldName: 'inserviceacademicschool', fieldLabel: '在职学历学校', showInView: 'Y', showInEdit: 'Y', displayName: 'inserviceacademicschool'},
      // {fieldName: 'inserviceacademicperiodtime', fieldLabel: '在职学历从学时间段', showInView: 'Y', showInEdit: 'Y', displayName: 'inserviceacademicperiodtime'},
      {fieldName: 'inserviceacademicValue', fieldLabel: '在职学历', showInView: 'Y', displayName: 'inserviceacademic'},
      {fieldName: 'inserviceacademicprofessional', fieldLabel: '院系专业', showInView: 'Y', showInEdit: 'Y', displayName: 'inserviceacademicprofessional'},
      {fieldName: 'inserviceacademicschool', fieldLabel: '学校', showInView: 'Y', showInEdit: 'Y', displayName: 'inserviceacademicschool'},
      {fieldName: 'inserviceacademicperiodtime', fieldLabel: '从学时间段', showInView: 'Y', showInEdit: 'Y', displayName: 'inserviceacademicperiodtime'},
      {
        fieldName: 'inservicedegree', fieldLabel: '在职学位', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'inservicedegreeValue', fieldLabel: '在职学位', showInView: 'Y', displayName: 'inservicedegree'},
      {fieldName: 'inservicedegreeprofessional', fieldLabel: '院系专业', showInView: 'Y', showInEdit: 'Y', displayName: 'inservicedegreeprofessional'},
      {fieldName: 'inservicedegreeschool', fieldLabel: '学校', showInView: 'Y', showInEdit: 'Y', displayName: 'inservicedegreeschool'},
      {fieldName: 'inservicedegreeperiodtime', fieldLabel: '从学时间段', showInView: 'Y', showInEdit: 'Y', displayName: 'inservicedegreeperiodtime'},
      {fieldName: 'lastacademicdegree', fieldLabel: '最后学历学位', showInEdit: 'Y', component: 'select'},
      {fieldName: 'lastacademicdegreeValue', fieldLabel: '最后学历学位', showInView: 'Y', displayName: 'lastacademicdegree'},
      {fieldName: 'studentyear', fieldLabel: '年级', showInView: 'Y', showInEdit: 'Y', displayName: 'studentyear'},
      {fieldName: 'studentnumber', fieldLabel: '学号', showInView: 'Y', showInEdit: 'Y', displayName: 'studentnumber'},
      {
        fieldName: 'studentprofessional', fieldLabel: '专业', showInEdit: 'Y', component: 'complexSelect',
        relEntityName: 'DwProfessional',
      },
      {fieldName: 'studentprofessionalValue', fieldLabel: '专业', showInView: 'Y', displayName: 'studentprofessional'},
      {
        fieldName: 'studentcategory', fieldLabel: '类别', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'studentcategoryValue', fieldLabel: '学生类别', showInView: 'Y', displayName: 'studentcategory'},
      {
        fieldName: 'studentlevel', fieldLabel: '层次', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'studentlevelValue', fieldLabel: '学生层次', showInView: 'Y', displayName: 'studentlevel'},
      {fieldName: 'studentexistingacademic', fieldLabel: '现有学历', showInEdit: 'Y',},
      {fieldName: 'studentexistingacademicValue', fieldLabel: '学生现有学历', showInView: 'Y', displayName: 'studentexistingacademic'},
      {fieldName: 'studentclass', fieldLabel: '班级', showInView: 'Y', showInEdit: 'Y', displayName: 'studentclass'},
      {fieldName: 'studentschoolsystem', fieldLabel: '学制', showInEdit: 'Y', component: 'select'},
      {fieldName: 'studentschoolsystemValue', fieldLabel: '学制', showInView: 'Y', displayName: 'studentschoolsystem'},
      {fieldName: 'studentrepresentation', fieldLabel: '任职情况', showInView: 'Y', showInEdit: 'Y', displayName: 'studentrepresentation'},
      {fieldName: 'teacherpersonnelnature', fieldLabel: '人事性质', showInEdit: 'Y',},
      {fieldName: 'teacherpersonnelnatureValue', fieldLabel: '人事性质', showInView: 'Y', displayName: 'teacherpersonnelnature'},
      {fieldName: 'teachercategory', fieldLabel: '类别', showInEdit: 'Y', component: 'select',},
      {fieldName: 'teachercategoryValue', fieldLabel: '类别', showInView: 'Y', displayName: 'teachercategory'},
      {fieldName: 'teachertoworktime', fieldLabel: '工作时间', showInView: 'Y', showInEdit: 'Y', displayName: 'teachertoworktime'},
      {fieldName: 'jobnumber', fieldLabel: '工号', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y', displayName: 'jobnumber'},
      {
        fieldName: 'teacherpost', fieldLabel: '岗位类型', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'teacherpostValue', fieldLabel: '岗位类型', showInView: 'Y', displayName: 'teacherpost'},
      {
        fieldName: 'jobtype', fieldLabel: '岗位名称', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'jobtypeValue', fieldLabel: '岗位名称', showInView: 'Y', displayName: 'jobtype'},
      {
        fieldName: 'postgrades', fieldLabel: '岗位等级', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'postgradesValue', fieldLabel: '岗位等级', showInView: 'Y', displayName: 'postgrades'},
      {fieldName: 'stafflevel', fieldLabel: '职员级别', showInView: 'Y', showInEdit: 'Y'},
      {fieldName: 'stafflevelValue', fieldLabel: '职员级别', showInView: 'Y', showInEdit: 'Y', displayName: 'stafflevel'},
      {
        fieldName: 'technicaltitles', fieldLabel: '职称名称', showInEdit: 'Y', component: 'complexSelect',
        relEntityName: 'DwTitles',
      },
      {fieldName: 'technicaltitlesValue', fieldLabel: '职称名称', showInView: 'Y', displayName: 'technicaltitles'},
      {
        fieldName: 'technicaltitleslevel', fieldLabel: '职称级别', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'technicaltitleslevelValue', fieldLabel: '职称级别名称', showInView: 'Y', displayName: 'technicaltitleslevel'},
      {fieldName: 'technicaltitlesservingtime', fieldLabel: '现职时间', showInView: 'Y', showInEdit: 'Y', displayName: 'technicaltitlesservingtime'},
      {fieldName: 'technicaltitlesnumber', fieldLabel: '文号', showInView: 'Y', showInEdit: 'Y', displayName: 'technicaltitlesnumber'},
      {fieldName: 'onetitlesdate', fieldLabel: '初级职称时间', showInView: 'Y', showInEdit: 'Y', displayName: 'onetitlesdate'},
      {fieldName: 'onenumber', fieldLabel: '初级职称文号', showInView: 'Y', showInEdit: 'Y', displayName: 'onenumber'},
      {fieldName: 'twotitlesdate', fieldLabel: '中级职称时间', showInView: 'Y', showInEdit: 'Y', displayName: 'twotitlesdate'},
      {fieldName: 'twonumber', fieldLabel: '中级职称文号', showInView: 'Y', showInEdit: 'Y', displayName: 'twonumber'},
      {fieldName: 'threetitlesdate', fieldLabel: '副高职称时间', showInView: 'Y', showInEdit: 'Y', displayName: 'threetitlesdate'},
      {fieldName: 'threenumber', fieldLabel: '副高职称文号', showInView: 'Y', showInEdit: 'Y', displayName: 'threenumber'},
      {fieldName: 'fourtitlesdate', fieldLabel: '正高职称时间', showInView: 'Y', showInEdit: 'Y', displayName: 'fourtitlesdate'},
      {fieldName: 'fournumber', fieldLabel: '正高职称文号', showInView: 'Y', showInEdit: 'Y', displayName: 'fournumber'},
      {fieldName: 'teacherexistingduties', fieldLabel: '现职名称', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherexistingduties'},
      {
        fieldName: 'teacherexistingdutieslevel', fieldLabel: '职务级别', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'teacherexistingdutieslevelValue', fieldLabel: '职务级别', showInView: 'Y', displayName: 'teacherexistingdutieslevel'},
      {fieldName: 'teacherexistingdutiesservingtime', fieldLabel: '现职任职时间', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherexistingdutiesservingtime'},
      {fieldName: 'teacherexistingdutiesnumber', fieldLabel: '现职任职文号', showInView: 'Y', showInEdit: 'Y', displayName: 'teacherexistingdutiesnumber'},
      {fieldName: 'vicedivision', fieldLabel: '副科时间', fieldType: 'date', showInView: 'Y', showInEdit: 'Y', displayName: 'vicedivision'},
      {fieldName: 'anyzhengke', fieldLabel: '正科时间', fieldType: 'date', showInView: 'Y', showInEdit: 'Y', displayName: 'anyzhengke'},
      {fieldName: 'deputyatthe', fieldLabel: '副处时间', fieldType: 'date', showInView: 'Y', showInEdit: 'Y', displayName: 'deputyatthe'},
      {fieldName: 'lsatany', fieldLabel: '正处时间', fieldType: 'date', showInView: 'Y', showInEdit: 'Y', displayName: 'lsatany'},
      {fieldName: 'samedutytime', fieldLabel: '同职时间', showInView: 'Y', showInEdit: 'Y', displayName: 'samedutytime'},
      {fieldName: 'samedutynumber', fieldLabel: '同职文号', showInView: 'Y', showInEdit: 'Y', displayName: 'samedutynumber'},

      {fieldName: 'joindemocratdate', fieldLabel: '入民时间', fieldType: 'date', showInView: 'Y', showInEdit: 'Y',},
      {
        fieldName: 'phases', fieldLabel: '发展阶段', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'phasesValue', fieldLabel: '发展阶段', showInTable: 'Y', showInView: 'Y',},
      {
        fieldName: 'partypostdemocrat', fieldLabel: '党内职务', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'partypostdemocratValue', fieldLabel: '党内职务', showInView: 'Y',},

      {fieldName: 'jieshaodemocrat', fieldLabel: '介绍人', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'danwei', fieldLabel: '介绍人单位', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'socialduty', fieldLabel: '社会职务', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'rewardsandpunishments', fieldLabel: '奖惩情况', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'othermaterials', fieldLabel: '其他材料', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'remarks1', fieldLabel: '备注1', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'remarks2', fieldLabel: '备注2', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'grassroot', fieldLabel: '转入基层党组织',},
      {fieldName: 'payableto', fieldLabel: '组织关系抬头称谓',},
      {fieldName: 'pertymembernumber', fieldLabel: '介绍信编号',},
      {fieldName: 'membership', fieldLabel: '党费缴至时间', fieldType: 'date',},
      {fieldName: 'dirtime', fieldLabel: '转出时间', fieldType: 'date',},
      {fieldName: 'pertymembermodel', fieldLabel: '党员模式',},
      {fieldName: 'cadresmodel', fieldLabel: '干部模式',},
      {fieldName: 'democratmodel', fieldLabel: '民主党派模式',},
      {fieldName: 'toschool', fieldLabel: '加入学校',},
      {fieldName: 'joinOrgTime', fieldLabel: '加入组织时间',},
      {fieldName: 'partypostdemocratString',},
      {fieldName: 'partypunishment', fieldLabel: '党员惩罚',},
      {fieldName: 'adapter',},
    ] as Array<FieldInfo>;
  }

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

  saveDate(list): Observable<any> {
    // 保存数据
    return this.http.post('genericSaveAll', {
      entityName: this.entityName,
      valueList: list,
    });
  }

  markDelete(list): Observable<any> {
    // 保存数据
    return this.http.post('genericSaveAll', {
      entityName: this.entityName,
      valueList: list,
    });
  }

  init(): Observable<any> {

    return new Observable(subscriber => {
      this.http.post('getDisplayByUser', {userId: Auth.userData.userLoginId}).subscribe((data: any) => {
        if (data.code === '1') {
          this.display = data.dataMap;
          this.fieldInfoList = this._fieldInfo;
        }
        this.fieldInfoList.forEach(field => {
          if (field.fieldName !== 'id') {
            if (this.display[field.displayName] && this.display[field.displayName] === '1') {
              // alert('YYYY:' + field.fieldLabel);
              field.showInTable = 'Y';
            } else {
              // alert(field.fieldName);
              field.showInTable = 'N';
            }
          }
        });
        super.init();
        this.isMarkDelete = false;
        subscriber.next();
      });
    });

  }
}


