import {Component, OnInit} from '@angular/core';
import {DicService} from '@shared-services/dic';
import {HttpClient} from '@angular/common/http';
import {ListDwPertyMemberComponent} from '../../query/moreinfo/list-dw-perty-member/list-dw-perty-member.component';
import {Auth} from '@shared-services/auth';

@Component({
  selector: 'app-professional',
  templateUrl: './professional.component.html',
  styleUrls: ['./professional.component.scss'],

})
export class ProfessionalComponent implements OnInit {

  queryDataList = {pertymembermodel: 1, phases: 6};

  isShowDataTableOnly = false;

  constructor(public dicService: DicService, public http: HttpClient, public listDwPertyMemberComponent: ListDwPertyMemberComponent) {
    this.isShowDataTableOnly = Auth.userData.generalPartyId == null ? true : false;
  }


  ngOnInit() {
    // this.loadSelectUserList();
  }

  // 对象转字符串
  stringify(data) {
    return JSON.stringify(data);
  }


}




