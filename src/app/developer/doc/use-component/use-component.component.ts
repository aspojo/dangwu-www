import {Component, OnInit, ViewChild} from '@angular/core';
import {DicService} from '@shared-services/dic';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-use-component',
  templateUrl: './use-component.component.html',
  styleUrls: ['./use-component.component.scss'],

})
export class UseComponentComponent implements OnInit {
  isCollapsed = false;
  currencyType: any = {};
  currencyTypeDataList: any;

  selectUser: any; // 选中人员数据
  selectUserList: any; // 人员下拉框选择数据
  selectedNodeData: any; // 选中树节点数据
  regionData: any = {}; // 地区选择数据
  trueFalseData: any; // 是否值
  attachListData: any; // 附件列表
  imageUrl: any; // 上传图片路径
  scanInputValue: string;  // 纯文本输入框内
  dicSelectValue: string;  // 字典数据
  dateInputValue: string;  // 日期数据
  dateTimeInputValue: string;  // 时间数据
  richTextInputValue: string;  // 富文本数据
  constructor(public dicService: DicService, public http: HttpClient) {
  }


  ngOnInit() {
    this.loadSelectUserList();
  }

  // 对象转字符串
  stringify(data) {
    return JSON.stringify(data);
  }

  // 加载人员下拉框数据
  loadSelectUserList() {
    this.selectUserList = new Observable((subscriber) => {
      return this.http.post('getPageData', {entityName: 'UserLogin', condition: {}}).subscribe((data: any) => {
        data.list.forEach(item => {
          item.id = item.userLoginId;
          item.value = item.userName;
        });
        subscriber.next(data.list);
      });
    });
  }

  // 树节点选中事件
  nodeSelect(selectedNodeData) {
    this.selectedNodeData = selectedNodeData;
  }

}
