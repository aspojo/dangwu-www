import {Component, ElementRef, EventEmitter, Input, Output, Renderer2, TemplateRef, ViewChild} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';
import {HttpClient} from '@angular/common/http';
import {MessageService} from '../../../../shared/services/message-service';
import {UtilValidate} from '@shared-utils/validate';
import {UtilCryptogram} from '@shared-utils/cryptogram';
import {Observable} from 'rxjs';
import {ConditionExpr, EntityOperator} from '@shared-utils/entity';

@Component({
  selector: '[userEdit]',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})
export class UserEditComponent {

  public static userLoginIds = [];
  public static workNumbers = [];
  @Input() userEdit: any; // 用户数据
  @Input() dept: any = {}; // 部门
  @Output() userDataChange = new EventEmitter<any>();
  userDataTemp: any = {};
  generalPartyList: any;
  @ViewChild('editUser', {static: false}) editUserView: TemplateRef<any>;
  editUserRef: NgbModalRef;
  viewPermissionsList: any;

  public currentUserLoginId = '';
  public currentWorkNumber = '';

  constructor(private el: ElementRef, renderer: Renderer2, private modalService: NgbModal, private http: HttpClient) {
    const element: HTMLElement = el.nativeElement;
    element.addEventListener('click', (event) => {
      if (this.inEdit) {
        this.http.post('getUserByUserLoginId', {condition: {userLoginId: this.userEdit.userLoginId}}).subscribe(data => {
          this.userDataTemp = data;
          if (this.userDataTemp.viewPermissions) {
            this.userDataTemp.viewPermissions = this.userDataTemp.viewPermissions.split(',');
          }
          this.currentWorkNumber = this.userDataTemp.workNumber;
          this.loadViewPermissionSelectList(this.userDataTemp.generalPartyId);
        });
        // this.userDataTemp = Object.assign({}, this.userEdit);
      } else {

        this.userDataTemp = {
          enabled: 'Y',
          userSex: '男',
          currentPassword: '123456'
        };
      }
      this.editUserRef = this.modalService.open(this.editUserView, {size: 'lg'});
    });
    this.generalPartyList = new Observable((subscriber) => {
      const conditionMap = {
        operator: EntityOperator.AND, conditionList: [new ConditionExpr('parentId', EntityOperator.EQUALS, 'null'), new ConditionExpr('generalPartyHistory', EntityOperator.EQUALS, '0')]
      };
      return this.http.post('getPageData', {entityName: 'DwGeneralParty', condition: conditionMap}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.id;
          item.value = item.generalPartyName;
        });
        subscriber.next(data.list);
      });
    });
  }

  get inEdit() {
    return this.userEdit !== null;
  }


  // 保存用户
  saveUser() {

    let viewPermissions = '';
    if (this.userDataTemp.viewPermissions && this.userDataTemp.viewPermissions.length > 0) {
      this.userDataTemp.viewPermissions.forEach((id: any) => {
        viewPermissions = viewPermissions + id + ',';
      });
      viewPermissions = viewPermissions.substring(0, viewPermissions.length - 1);
      this.userDataTemp.viewPermissions = viewPermissions;
    } else {
      this.userDataTemp.viewPermissions = '';
    }
    if (undefined !== UserEditComponent.userLoginIds && null !== UserEditComponent.userLoginIds) {
      if (!this.inEdit && this.currentUserLoginId !== this.userDataTemp.userLoginId) {
        // 验证账号是否存在
        if (UserEditComponent.userLoginIds.length > 0) {
          if (UserEditComponent.userLoginIds.indexOf(this.userDataTemp.userLoginId) > -1) {
            MessageService.showGlobalMessage('danger', '账号已经存在！');
            return;
          }
        }
      }
    }

    if (undefined !== UserEditComponent.workNumbers && null !== UserEditComponent.workNumbers) {
      if (this.currentWorkNumber !== this.userDataTemp.workNumber) {
        // 验证工号是否存在
        if (UserEditComponent.workNumbers.length > 0) {
          if (UserEditComponent.workNumbers.indexOf(this.userDataTemp.workNumber) > -1) {
            MessageService.showGlobalMessage('danger', '工号已经存在！');
            return;
          }
        }
      }
    }

    // 如果账号已存在且密码已存在，不需要再加密了！！！
    if (this.userDataTemp.currentPassword) {
      if (!this.inEdit) {
        this.userDataTemp.currentPassword = '{SHA}' + UtilCryptogram.hexSha1(this.userDataTemp.currentPassword);
      }
    }
    this.http.post('saveUserData', {fieldMap: this.userDataTemp}).subscribe((data: any) => {
      if (data['error'] == null) {
        // 添加DepartmentUserLogin数据
        if (this.inEdit) {
          this.userDataChange.emit(data.value);
        } else {
          // 添加用户，时同时添加到部门
          this.addUserToDeptSave();
        }
      }
    });
    this.editUserRef.close();
  }

  // 向部门添加现有用户
  addUserToDeptSave() {

    this.http.post('genericSave', {
      entityName: 'DepartmentUserLogin',
      fieldMap: {userLoginId: this.userDataTemp.userLoginId, deptId: this.dept.deptId}
    }).subscribe(data2 => {
      if (data2['error'] == null) {
        MessageService.showGlobalMessage('success', '操作成功！');
        // 通知用户添加成功
        this.userDataChange.emit(this.userDataTemp);
      }
    });
  }

  validateForm() {
    let userLoginId = true;
    let currentPassword = true;
    let workNumber = true;
    let userName = true;
    const reg = new RegExp('[\\u4E00-\\u9FFF]+', 'g');
    if (undefined !== this.userDataTemp.userLoginId && this.userDataTemp.userLoginId.length >= 5 && this.userDataTemp.userLoginId.length <= 11 && !reg.test(this.userDataTemp.userLoginId)) {
      // undefined !==this.userDataTemp.userLoginId && this.userDataTemp.userLoginId.length >= 5 &&
      //
      userLoginId = false;

    }
    if (this.userDataTemp.userName !== '' && this.userDataTemp.userName !== null) {

      userName = false;
    }
    if (UtilValidate.isNotEmpty(this.userDataTemp.currentPassword) && this.userDataTemp.currentPassword.length >= 5 && !reg.test(this.userDataTemp.currentPassword)) {
      // if(this.userDataTemp.currentPassword.length>=5){
      //   flag= false;
      // }
      currentPassword = false;
    }
    if (!reg.test(this.userDataTemp.workNumber)) {
      workNumber = false;
    }


    if (userLoginId || currentPassword || workNumber || userName) {
      return true;
    } else {
      return false;
    }

  }

  loadViewPermissionSelectList(generalPartyId) {
    this.http.post('loadViewPermissionSelectList', {generalId: generalPartyId}).subscribe((data: any) => {
      this.viewPermissionsList = data.list;
    });
  }
}
