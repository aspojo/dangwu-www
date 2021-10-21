import {Injectable} from '@angular/core';
import {FieldInfo} from '@shared-utils/entity';
import {HttpClient} from '@angular/common/http';
import {FieldInfoService} from '@shared-common/field-info-service';
import {Observable} from 'rxjs';

@Injectable()
export class DemocratManageFieldInfoService extends FieldInfoService {

  get entityName() {
    return 'DwPertyMember';
  }

  get queryEntityName() {
    return 'DwPertyMemberView';
  }

  get _fieldInfo(): Array<FieldInfo> {
    return [
      {fieldName: 'id', PK: 'Y', fieldLabel: 'ID', showInTable: 'Y', showInView: 'Y', required: 'Y', isValueField: 'Y'},
      {fieldName: 'sort', fieldLabel: '排序', orderBy: '+'},
      {fieldName: 'old', fieldLabel: '历史id',},
      {fieldName: 'history', fieldLabel: '历史',},
      {fieldName: 'photoaddress', fieldLabel: '照片', showInView: 'Y', showInEdit: 'Y', component: 'imageUpload',},
      {
        fieldName: 'department', fieldLabel: '所属部门', showInEdit: 'Y', component: 'complexSelect',
        relEntityName: 'DwBuMen',
      },
      {fieldName: 'departmentValue', fieldLabel: '所属部门', showInTable: 'Y', showInView: 'Y',},
      {
        fieldName: 'generalparty', fieldLabel: '所属党委', showInEdit: 'Y', required: 'Y', component: 'complexSelect',
        relEntityName: 'DwGeneralParty',
      },
      {fieldName: 'generalpartyValue', fieldLabel: '所属党委', showInView: 'Y',},
      {
        fieldName: 'democrat', fieldLabel: '所属党派', component: 'complexSelect',
        relEntityName: 'DwDemocrat',
      },
      {fieldName: 'democratValue', fieldLabel: '民主党派',},
      {
        fieldName: 'branchparty', fieldLabel: '所属支部', showInEdit: 'Y', required: 'Y', component: 'complexSelect',
        relEntityName: 'DwGeneralParty',
      },
      {fieldName: 'branchpartyValue', fieldLabel: '所属支部', showInView: 'Y',},
      {fieldName: 'name', fieldLabel: '姓名', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y', isShowField: 'Y',},
      {
        fieldName: 'gender', fieldLabel: '性别', showInEdit: 'Y', component: 'select',
        relEntityName: 'DwGender',
      },
      {fieldName: 'genderValue', fieldLabel: '性别', showInTable: 'Y', showInView: 'Y',},
      {
        fieldName: 'ethnic', fieldLabel: '民族', showInEdit: 'Y', component: 'complexSelect',
        relEntityName: 'DwEthnic',
      },
      {fieldName: 'ethnicValue', fieldLabel: '民族', showInTable: 'Y', showInView: 'Y',},
      {fieldName: 'hometown', fieldLabel: '籍贯', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'birth', fieldLabel: '出生地', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y',},
      {
        fieldName: 'identity', fieldLabel: '身份', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'identityValue', fieldLabel: '身份', showInTable: 'Y', showInView: 'Y',},
      {fieldName: 'idnumber', fieldLabel: '身份证号', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'birthday', fieldLabel: '出生年月', showInTable: 'Y', showInView: 'Y', showInEdit: 'Y',},
      {
        fieldName: 'studentcategory', fieldLabel: '类别', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'studentcategoryValue', fieldLabel: '类别', showInView: 'Y',},
      {
        fieldName: 'studentlevel', fieldLabel: '层次', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'studentlevelValue', fieldLabel: '层次', showInView: 'Y',},
      {fieldName: 'studentexistingacademic', fieldLabel: '现有学历', showInEdit: 'Y',},
      {fieldName: 'studentexistingacademicValue', fieldLabel: '现有学历', showInView: 'Y',},
      {fieldName: 'studentyear', fieldLabel: '年级', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'studentclass', fieldLabel: '班级', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'studentnumber', fieldLabel: '学号', showInView: 'Y', showInEdit: 'Y',},
      {
        fieldName: 'studentprofessional', fieldLabel: '专业', showInEdit: 'Y', component: 'complexSelect',
        relEntityName: 'DwProfessional',
      },
      {fieldName: 'studentprofessionalValue', fieldLabel: '专业', showInView: 'Y',},
      {
        fieldName: 'studentschoolsystem', fieldLabel: '学制', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'studentschoolsystemValue', fieldLabel: '学制', showInView: 'Y',},
      {fieldName: 'studentrepresentation', fieldLabel: '任职情况', showInView: 'Y', showInEdit: 'Y',},
      {
        fieldName: 'teacherfulltimeacademic', fieldLabel: '全日制学历', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'teacherfulltimeacademicValue', fieldLabel: '全日制学历', showInView: 'Y',},
      {fieldName: 'teacherfulltimeacademicprofessional', fieldLabel: '院系专业', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'teacherfulltimeacademicschool', fieldLabel: '学校', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'teacherfulltimeacademicperiodtime', fieldLabel: '从学时间段', showInView: 'Y', showInEdit: 'Y',},
      {
        fieldName: 'teacherfulltimedegree', fieldLabel: '全日制学位', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'teacherfulltimedegreeValue', fieldLabel: '全日制学位', showInView: 'Y',},
      {fieldName: 'teacherfulltimedegreeprofessional', fieldLabel: '院系专业', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'teacherfulltimedegreeschool', fieldLabel: '学校', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'teacherfulltimedegreeperiodtime', fieldLabel: '从学时间段', showInView: 'Y', showInEdit: 'Y',},
      {
        fieldName: 'inserviceacademic', fieldLabel: '在职学历', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'inserviceacademicValue', fieldLabel: '在职学历', showInView: 'Y',},
      {fieldName: 'inserviceacademicprofessional', fieldLabel: '院系专业', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'inserviceacademicschool', fieldLabel: '学校', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'inserviceacademicperiodtime', fieldLabel: '从学时间段', showInView: 'Y', showInEdit: 'Y',},
      {
        fieldName: 'inservicedegree', fieldLabel: '在职学位', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'inservicedegreeValue', fieldLabel: '在职学位', showInView: 'Y',},
      {fieldName: 'inservicedegreeprofessional', fieldLabel: '院系专业', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'inservicedegreeschool', fieldLabel: '学校', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'inservicedegreeperiodtime', fieldLabel: '从学时间段', showInView: 'Y', showInEdit: 'Y',},
      {
        fieldName: 'lastacademicdegree', fieldLabel: '最后学历学位', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'lastacademicdegreeValue', fieldLabel: '最后学历学位', showInView: 'Y',},
      {fieldName: 'teacherpersonnelnature', fieldLabel: '人事性质', showInEdit: 'Y',},
      {fieldName: 'teacherpersonnelnatureValue', fieldLabel: '人事性质', showInView: 'Y',},
      {
        fieldName: 'teachercategory', fieldLabel: '类别', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'teachercategoryValue', fieldLabel: '类别', showInView: 'Y',},
      {fieldName: 'teachertoworktime', fieldLabel: '工作时间', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'jobnumber', fieldLabel: '工号', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y',},
      {
        fieldName: 'teacherpost', fieldLabel: '岗位类型', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'teacherpostValue', fieldLabel: '岗位类型', showInView: 'Y',},
      {
        fieldName: 'jobtype', fieldLabel: '岗位名称', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'jobtypeValue', fieldLabel: '岗位名称', showInView: 'Y',},
      {
        fieldName: 'postgrades', fieldLabel: '岗位等级', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'postgradesValue', fieldLabel: '岗位等级', showInView: 'Y',},
      {fieldName: 'stafflevel', fieldLabel: '职员级别', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'stafflevelValue', fieldLabel: '职员级别', showInView: 'Y', showInEdit: 'Y',},
      {
        fieldName: 'technicaltitles', fieldLabel: '职称名称', showInEdit: 'Y', component: 'complexSelect',
        relEntityName: 'DwTitles',
      },
      {fieldName: 'technicaltitlesValue', fieldLabel: '职称名称', showInView: 'Y',},
      {
        fieldName: 'technicaltitleslevel', fieldLabel: '职称级别', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'technicaltitleslevelValue', fieldLabel: '职称级别名称', showInView: 'Y',},
      {fieldName: 'technicaltitlesservingtime', fieldLabel: '现职时间', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'technicaltitlesnumber', fieldLabel: '文号', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'onetitlesdate', fieldLabel: '初级职称时间', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'onenumber', fieldLabel: '任职文号', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'twotitlesdate', fieldLabel: '中级职称时间', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'twonumber', fieldLabel: '任职文号', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'threetitlesdate', fieldLabel: '副高职称时间', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'threenumber', fieldLabel: '任职文号', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'fourtitlesdate', fieldLabel: '正高职称时间', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'fournumber', fieldLabel: '任职文号', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'teacherexistingduties', fieldLabel: '现职名称', showInView: 'Y', showInEdit: 'Y',},
      {
        fieldName: 'teacherexistingdutieslevel', fieldLabel: '职务级别', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'teacherexistingdutieslevelValue', fieldLabel: '职务级别', showInView: 'Y',},
      {fieldName: 'teacherexistingdutiesservingtime', fieldLabel: '任职时间', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'teacherexistingdutiesnumber', fieldLabel: '文号', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'vicedivision', fieldLabel: '副科时间', fieldType: 'date', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'anyzhengke', fieldLabel: '正科时间', fieldType: 'date', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'deputyatthe', fieldLabel: '副处时间', fieldType: 'date', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'lsatany', fieldLabel: '正处时间', fieldType: 'date', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'samedutytime', fieldLabel: '同职时间', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'samedutynumber', fieldLabel: '同职文号', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'applicantdate', fieldLabel: '申请时间', fieldType: 'date', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'activistsdate', fieldLabel: '积极分子时间', fieldType: 'date', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'partyPhases', fieldLabel: '党校期数', showInQuery: 'Y',},
      {fieldName: 'partyPhasesValue', fieldLabel: '党校期数', showInTable: 'Y', showInView: 'Y',},
      {fieldName: 'developmentdate', fieldLabel: '发展对象时间', fieldType: 'date', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'volunteerbook', fieldLabel: '志愿书编号', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'probationarydate', fieldLabel: '入党时间', fieldType: 'date', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'partymemberdate', fieldLabel: '正式党员时间', fieldType: 'date', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y',},
      {
        fieldName: 'manner', fieldLabel: '党员增加', showInQuery: 'Y', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'mannerValue', fieldLabel: '党员增加', showInView: 'Y',},
      {
        fieldName: 'partypost', fieldLabel: '党内职务', showInQuery: 'Y', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'partypostValue', fieldLabel: '党内职务', showInView: 'Y',},
      {fieldName: 'pingyi', fieldLabel: '党员评议', showInQuery: 'Y', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'pyresult', fieldLabel: '评议结果', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'growthtime', fieldLabel: '增加时间', showInView: 'Y', showInEdit: 'Y',},
      {fieldName: 'joindemocratdate', fieldLabel: '入民时间', fieldType: 'date', showInView: 'Y', showInEdit: 'Y',},
      {
        fieldName: 'phases', fieldLabel: '发展阶段', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'phasesValue', fieldLabel: '发展阶段', showInTable: 'Y', showInView: 'Y',},
      {
        fieldName: 'partypostdemocrat', fieldLabel: '党内职务', showInEdit: 'Y', component: 'select',
      },
      {fieldName: 'partypostdemocratValue', fieldLabel: '党内职务', showInView: 'Y',},
      {fieldName: 'contact', fieldLabel: '联系电话', showInView: 'Y', showInEdit: 'Y',},
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

  partyPhasesUpdateData(PK, partyPhases): Observable<any> {
    const newList = [];
    for (let i = 0; i < PK.length; i++) {
      const newDept: any = {};
      newDept.id = PK[i].id;
      newDept.phases = partyPhases;
      switch (partyPhases) {
        case 1:
          newDept.activistsdate = 'null';
          break;
        case 2:
          newDept.partyPhases = 'null';
          break;
        case 3:
          newDept.developmentdate = 'null';
          break;
        case 4:
          newDept.probationarydate = 'null';
          newDept.volunteerbook = 'null';
          newDept.growthtime = 'null';
          newDept.partypost = 'null';
          newDept.pingyi = 'null';
          newDept.pyresult = 'null';
          break;
        case 5:
          newDept.partymemberdate = 'null';
          break;
      }
      newList.push(newDept);
    }
    // 保存数据
    return this.http.post('genericSaveAll', {
      entityName: this.entityName,
      valueList: newList
    });
  }

  updateData(list): Observable<any> {
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

  constructor(
    public http: HttpClient,
  ) {
    super();
    this.init();
  }

}


