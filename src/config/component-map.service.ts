import {Injectable, ModuleWithProviders, NgModule} from '@angular/core';
import {UtilValidate} from '@shared-utils/validate';
import {ViewActDemoLeaveComponent} from '../app/test/list-act-demo-leave/view-act-demo-leave/view-act-demo-leave.component';
import {ViewActDemoLeaveModule} from '../app/test/list-act-demo-leave/view-act-demo-leave/view-act-demo-leave.module';
import {EditActDemoLeaveComponent} from '../app/test/list-act-demo-leave/edit-act-demo-leave/edit-act-demo-leave.component';
import {EditActDemoLeaveModule} from '../app/test/list-act-demo-leave/edit-act-demo-leave/edit-act-demo-leave.module';
import {EditDtExcelTemplateFileComponent} from '../app/entity-mgr/list-dt-excel-template-file/edit-dt-excel-template-file/edit-dt-excel-template-file.component';
import {ViewDtExcelTemplateFileComponent} from '../app/entity-mgr/list-dt-excel-template-file/view-dt-excel-template-file/view-dt-excel-template-file.component';
import {ViewDtExcelTemplateFileModule} from '../app/entity-mgr/list-dt-excel-template-file/view-dt-excel-template-file/view-dt-excel-template-file.module';
import {EditDtExcelTemplateFileModule} from '../app/entity-mgr/list-dt-excel-template-file/edit-dt-excel-template-file/edit-dt-excel-template-file.module';
import {EditDtExcelDataExtractModelComponent} from '../app/entity-mgr/list-dt-excel-data-extract-model/edit-dt-excel-data-extract-model/edit-dt-excel-data-extract-model.component';
import {ViewDtExcelDataExtractModelComponent} from '../app/entity-mgr/list-dt-excel-data-extract-model/view-dt-excel-data-extract-model/view-dt-excel-data-extract-model.component';
import {ViewDtExcelDataExtractModelModule} from '../app/entity-mgr/list-dt-excel-data-extract-model/view-dt-excel-data-extract-model/view-dt-excel-data-extract-model.module';
import {EditDtExcelDataExtractModelModule} from '../app/entity-mgr/list-dt-excel-data-extract-model/edit-dt-excel-data-extract-model/edit-dt-excel-data-extract-model.module';
import {EditDtDataTransferModelComponent} from '../app/entity-mgr/list-dt-data-transfer-model/edit-dt-data-transfer-model/edit-dt-data-transfer-model.component';
import {ViewDtDataTransferModelComponent} from '../app/entity-mgr/list-dt-data-transfer-model/view-dt-data-transfer-model/view-dt-data-transfer-model.component';
import {EditDtDataTransferModelModule} from '../app/entity-mgr/list-dt-data-transfer-model/edit-dt-data-transfer-model/edit-dt-data-transfer-model.module';
import {ViewDtDataTransferModelModule} from '../app/entity-mgr/list-dt-data-transfer-model/view-dt-data-transfer-model/view-dt-data-transfer-model.module';
import {EditDtDataTransferHistoryModule} from '../app/entity-mgr/list-dt-data-transfer-history/edit-dt-data-transfer-history/edit-dt-data-transfer-history.module';
import {ViewDtDataTransferHistoryModule} from '../app/entity-mgr/list-dt-data-transfer-history/view-dt-data-transfer-history/view-dt-data-transfer-history.module';
import {ViewDtDataTransferHistoryComponent} from '../app/entity-mgr/list-dt-data-transfer-history/view-dt-data-transfer-history/view-dt-data-transfer-history.component';
import {EditDtDataTransferHistoryComponent} from '../app/entity-mgr/list-dt-data-transfer-history/edit-dt-data-transfer-history/edit-dt-data-transfer-history.component';
import {EditGenericCurdModule} from '../app/entity-mgr/entity-model-list/list-generic-curd/edit-generic-curd/edit-generic-curd.module';
import {ViewGenericCurdModule} from '../app/entity-mgr/entity-model-list/list-generic-curd/view-generic-curd/view-generic-curd.module';
import {EditGenericCurdComponent} from '../app/entity-mgr/entity-model-list/list-generic-curd/edit-generic-curd/edit-generic-curd.component';
import {ViewGenericCurdComponent} from '../app/entity-mgr/entity-model-list/list-generic-curd/view-generic-curd/view-generic-curd.component';
import {EditDataSourceComponent} from '../app/entity-mgr/list-data-source/edit-data-source/edit-data-source.component';
import {ViewDataSourceComponent} from '../app/entity-mgr/list-data-source/view-data-source/view-data-source.component';
import {EditDataSourceModule} from '../app/entity-mgr/list-data-source/edit-data-source/edit-data-source.module';
import {ViewDataSourceModule} from '../app/entity-mgr/list-data-source/view-data-source/view-data-source.module';
import {EditDemoOrderModule} from '../app/developer/demo/list-demo-order/edit-demo-order/edit-demo-order.module';
import {ViewDemoOrderModule} from '../app/developer/demo/list-demo-order/view-demo-order/view-demo-order.module';
import {EditDemoOrderComponent} from '../app/developer/demo/list-demo-order/edit-demo-order/edit-demo-order.component';
import {ViewDemoOrderComponent} from '../app/developer/demo/list-demo-order/view-demo-order/view-demo-order.component';
import {EditDwGeneralPartyComponent} from '../app/manage/generalparty/list-dw-general-party/edit-dw-general-party/edit-dw-general-party.component';
import {ViewDwGeneralPartyComponent} from '../app/manage/generalparty/list-dw-general-party/view-dw-general-party/view-dw-general-party.component';
import {EditDwGeneralPartyModule} from '../app/manage/generalparty/list-dw-general-party/edit-dw-general-party/edit-dw-general-party.module';
import {ViewDwGeneralPartyModule} from '../app/manage/generalparty/list-dw-general-party/view-dw-general-party/view-dw-general-party.module';
import {EditDwPertyMemberModule} from '../app/query/moreinfo/list-dw-perty-member/edit-dw-perty-member/edit-dw-perty-member.module';
import {ViewDwPertyMemberModule} from '../app/query/moreinfo/list-dw-perty-member/view-dw-perty-member/view-dw-perty-member.module';
import {EditDwPertyMemberComponent} from '../app/query/moreinfo/list-dw-perty-member/edit-dw-perty-member/edit-dw-perty-member.component';
import {ViewDwPertyMemberComponent} from '../app/query/moreinfo/list-dw-perty-member/view-dw-perty-member/view-dw-perty-member.component';
import {EditDwBuMenComponent} from '../app/other-entities/dw-bu-men/list-dw-bu-men/edit-dw-bu-men/edit-dw-bu-men.component';
import {ViewDwBuMenComponent} from '../app/other-entities/dw-bu-men/list-dw-bu-men/view-dw-bu-men/view-dw-bu-men.component';
import {EditDwEthnicComponent} from '../app/other-entities/dw-ethnic/list-dw-ethnic/edit-dw-ethnic/edit-dw-ethnic.component';
import {ViewDwEthnicComponent} from '../app/other-entities/dw-ethnic/list-dw-ethnic/view-dw-ethnic/view-dw-ethnic.component';
import {EditDwProfessionalComponent} from '../app/other-entities/dw-professional/list-dw-professional/edit-dw-professional/edit-dw-professional.component';
import {ViewDwProfessionalComponent} from '../app/other-entities/dw-professional/list-dw-professional/view-dw-professional/view-dw-professional.component';
import {EditDwTitlesComponent} from '../app/other-entities/dw-titles/list-dw-titles/edit-dw-titles/edit-dw-titles.component';
import {ViewDwTitlesComponent} from '../app/other-entities/dw-titles/list-dw-titles/view-dw-titles/view-dw-titles.component';
import {EditDwBuMenModule} from '../app/other-entities/dw-bu-men/list-dw-bu-men/edit-dw-bu-men/edit-dw-bu-men.module';
import {ViewDwBuMenModule} from '../app/other-entities/dw-bu-men/list-dw-bu-men/view-dw-bu-men/view-dw-bu-men.module';
import {EditDwEthnicModule} from '../app/other-entities/dw-ethnic/list-dw-ethnic/edit-dw-ethnic/edit-dw-ethnic.module';
import {ViewDwEthnicModule} from '../app/other-entities/dw-ethnic/list-dw-ethnic/view-dw-ethnic/view-dw-ethnic.module';
import {EditDwProfessionalModule} from '../app/other-entities/dw-professional/list-dw-professional/edit-dw-professional/edit-dw-professional.module';
import {ViewDwProfessionalModule} from '../app/other-entities/dw-professional/list-dw-professional/view-dw-professional/view-dw-professional.module';
import {EditDwTitlesModule} from '../app/other-entities/dw-titles/list-dw-titles/edit-dw-titles/edit-dw-titles.module';
import {ViewDwTitlesModule} from '../app/other-entities/dw-titles/list-dw-titles/view-dw-titles/view-dw-titles.module';
import {EditDwPhasesComponent} from '../app/manage/phases/list-dw-phases/edit-dw-phases/edit-dw-phases.component';
import {ViewDwPhasesComponent} from '../app/manage/phases/list-dw-phases/view-dw-phases/view-dw-phases.component';
import {ViewDwPhasesModule} from '../app/manage/phases/list-dw-phases/view-dw-phases/view-dw-phases.module';
import {EditDwPhasesModule} from '../app/manage/phases/list-dw-phases/edit-dw-phases/edit-dw-phases.module';
import {EditDwDemocratComponent} from '../app/manage/democrat/list-dw-democrat/edit-dw-democrat/edit-dw-democrat.component';
import {ViewDwDemocratComponent} from '../app/manage/democrat/list-dw-democrat/view-dw-democrat/view-dw-democrat.component';
import {EditDwDemocratModule} from '../app/manage/democrat/list-dw-democrat/edit-dw-democrat/edit-dw-democrat.module';
import {ViewDwDemocratModule} from '../app/manage/democrat/list-dw-democrat/view-dw-democrat/view-dw-democrat.module';
import {EditDwPertyMemberManageModule} from '../app/pertymember/list-dw-perty-member-manage/edit-dw-perty-member-manage/edit-dw-perty-member-manage.module';
import {ViewDwPertyMemberManageModule} from '../app/pertymember/list-dw-perty-member-manage/view-dw-perty-member-manage/view-dw-perty-member-manage.module';
import {EditDwPertyMemberManageComponent} from '../app/pertymember/list-dw-perty-member-manage/edit-dw-perty-member-manage/edit-dw-perty-member-manage.component';
import {ViewDwPertyMemberManageComponent} from '../app/pertymember/list-dw-perty-member-manage/view-dw-perty-member-manage/view-dw-perty-member-manage.component';
import {ListDwPertyMemberManageComponent} from '../app/pertymember/list-dw-perty-member-manage/list-dw-perty-member-manage.component';
import {ListDwPertyMemberManageModule} from '../app/pertymember/list-dw-perty-member-manage/list-dw-perty-member-manage.module';
import {EditCadresManageModule} from '../app/cadres/list-cadres-manage/edit-cadres-manage/edit-cadres-manage.module';
import {ListCadresManageModule} from '../app/cadres/list-cadres-manage/list-cadres-manage.module';
import {ViewCadresManageModule} from '../app/cadres/list-cadres-manage/view-cadres-manage/view-cadres-manage.module';
import {EditCadresManageComponent} from '../app/cadres/list-cadres-manage/edit-cadres-manage/edit-cadres-manage.component';
import {ListCadresManageComponent} from '../app/cadres/list-cadres-manage/list-cadres-manage.component';
import {ViewCadresManageComponent} from '../app/cadres/list-cadres-manage/view-cadres-manage/view-cadres-manage.component';
import {ListDwPertyMemberComponent} from '../app/query/moreinfo/list-dw-perty-member/list-dw-perty-member.component';
import {ListDwPertyMemberModule} from '../app/query/moreinfo/list-dw-perty-member/list-dw-perty-member.module';
import {EditDwAssessmentComponent} from '../app/other-entities/dw-assessment/list-dw-assessment/edit-dw-assessment/edit-dw-assessment.component';
import {ViewDwAssessmentComponent} from '../app/other-entities/dw-assessment/list-dw-assessment/view-dw-assessment/view-dw-assessment.component';
import {ListDwAssessmentComponent} from '../app/other-entities/dw-assessment/list-dw-assessment/list-dw-assessment.component';
import {SelectDwAssessmentComponent} from '../app/other-entities/dw-assessment/list-dw-assessment/select-dw-assessment/select-dw-assessment.component';
import {EditDwAssessmentModule} from '../app/other-entities/dw-assessment/list-dw-assessment/edit-dw-assessment/edit-dw-assessment.module';
import {ViewDwAssessmentModule} from '../app/other-entities/dw-assessment/list-dw-assessment/view-dw-assessment/view-dw-assessment.module';
import {ListDwAssessmentModule} from '../app/other-entities/dw-assessment/list-dw-assessment/list-dw-assessment.module';
import {SelectDwAssessmentModule} from '../app/other-entities/dw-assessment/list-dw-assessment/select-dw-assessment/select-dw-assessment.module';
import {ListDwResumeComponent} from '../app/other-entities/dw-resume/list-dw-resume/list-dw-resume.component';
import {ListDwResumeModule} from '../app/other-entities/dw-resume/list-dw-resume/list-dw-resume.module';
import {ViewDwResumeComponent} from '../app/other-entities/dw-resume/list-dw-resume/view-dw-resume/view-dw-resume.component';
import {EditDwResumeComponent} from '../app/other-entities/dw-resume/list-dw-resume/edit-dw-resume/edit-dw-resume.component';
import {ViewDwResumeModule} from '../app/other-entities/dw-resume/list-dw-resume/view-dw-resume/view-dw-resume.module';
import {EditDwResumeModule} from '../app/other-entities/dw-resume/list-dw-resume/edit-dw-resume/edit-dw-resume.module';
import {EditDwTrainModule} from '../app/other-entities/dw-train/list-dw-train/edit-dw-train/edit-dw-train.module';
import {ViewDwTrainModule} from '../app/other-entities/dw-train/list-dw-train/view-dw-train/view-dw-train.module';
import {ListDwTrainModule} from '../app/other-entities/dw-train/list-dw-train/list-dw-train.module';
import {EditDwTrainComponent} from '../app/other-entities/dw-train/list-dw-train/edit-dw-train/edit-dw-train.component';
import {ViewDwTrainComponent} from '../app/other-entities/dw-train/list-dw-train/view-dw-train/view-dw-train.component';
import {ListDwTrainComponent} from '../app/other-entities/dw-train/list-dw-train/list-dw-train.component';
import {EditDwFamilyModule} from '../app/other-entities/dw-family/list-dw-family/edit-dw-family/edit-dw-family.module';
import {ViewDwFamilyModule} from '../app/other-entities/dw-family/list-dw-family/view-dw-family/view-dw-family.module';
import {ListDwFamilyModule} from '../app/other-entities/dw-family/list-dw-family/list-dw-family.module';
import {EditDwFamilyComponent} from '../app/other-entities/dw-family/list-dw-family/edit-dw-family/edit-dw-family.component';
import {ViewDwFamilyComponent} from '../app/other-entities/dw-family/list-dw-family/view-dw-family/view-dw-family.component';
import {ListDwFamilyComponent} from '../app/other-entities/dw-family/list-dw-family/list-dw-family.component';
import {EditDwRelationshipComponent} from '../app/other-entities/dw-relationship/list-dw-relationship/edit-dw-relationship/edit-dw-relationship.component';
import {EditDwRelationshipModule} from '../app/other-entities/dw-relationship/list-dw-relationship/edit-dw-relationship/edit-dw-relationship.module';
import {ViewDwRelationshipComponent} from '../app/other-entities/dw-relationship/list-dw-relationship/view-dw-relationship/view-dw-relationship.component';
import {ListDwRelationshipComponent} from '../app/other-entities/dw-relationship/list-dw-relationship/list-dw-relationship.component';
import {SelectDwRelationshipComponent} from '../app/other-entities/dw-relationship/list-dw-relationship/select-dw-relationship/select-dw-relationship.component';
import {SelectDwRelationshipModule} from '../app/other-entities/dw-relationship/list-dw-relationship/select-dw-relationship/select-dw-relationship.module';
import {ListDwRelationshipModule} from '../app/other-entities/dw-relationship/list-dw-relationship/list-dw-relationship.module';
import {ViewDwRelationshipModule} from '../app/other-entities/dw-relationship/list-dw-relationship/view-dw-relationship/view-dw-relationship.module';
import {GeneralpartyComponent} from '../app/manage/generalparty/generalparty-component';
import {GeneralpartyModule} from '../app/manage/generalparty/generalparty.module';
import {EditDemocratManageComponent} from '../app/democrat/edit-democrat-manage/edit-democrat-manage.component';
import {EditDemocratManageModule} from '../app/democrat/edit-democrat-manage/edit-democrat-manage.module';
import {ViewDemocratManageModule} from '../app/democrat/view-democrat-manage/view-democrat-manage.module';
import {ViewDemocratManageComponent} from '../app/democrat/view-democrat-manage/view-democrat-manage.component';
import {ViewDwRapComponent} from '../app/other-entities/dw-rap/list-dw-rap/view-dw-rap/view-dw-rap.component';
import {ViewDwRapModule} from '../app/other-entities/dw-rap/list-dw-rap/view-dw-rap/view-dw-rap.module';
import {ListDwRapModule} from '../app/other-entities/dw-rap/list-dw-rap/list-dw-rap.module';
import {ListDwRapComponent} from '../app/other-entities/dw-rap/list-dw-rap/list-dw-rap.component';
import {EditDwRapComponent} from '../app/other-entities/dw-rap/list-dw-rap/edit-dw-rap/edit-dw-rap.component';
import {EditDwRapModule} from '../app/other-entities/dw-rap/list-dw-rap/edit-dw-rap/edit-dw-rap.module';


@Injectable()
export class ComponentMapService {
  dataMap = {
    EditActDemoLeaveComponent,
    ViewActDemoLeaveComponent,

    EditDtExcelTemplateFileComponent,
    ViewDtExcelTemplateFileComponent,

    EditDtExcelDataExtractModelComponent,
    ViewDtExcelDataExtractModelComponent,

    EditDtDataTransferModelComponent,
    ViewDtDataTransferModelComponent,

    EditDtDataTransferHistoryComponent,
    ViewDtDataTransferHistoryComponent,

    EditGenericCurdComponent,
    ViewGenericCurdComponent,

    EditDataSourceComponent,
    ViewDataSourceComponent,


    EditDemoOrderComponent,
    ViewDemoOrderComponent,

    EditDwPertyMemberComponent,
    ViewDwPertyMemberComponent,
    ListDwPertyMemberComponent,

    EditDwGeneralPartyComponent,
    ViewDwGeneralPartyComponent,

    EditDwPhasesComponent,
    ViewDwPhasesComponent,

    EditDwBuMenComponent,
    ViewDwBuMenComponent,

    EditDwDemocratComponent,
    ViewDwDemocratComponent,

    EditDwEthnicComponent,
    ViewDwEthnicComponent,

    EditDwProfessionalComponent,
    ViewDwProfessionalComponent,

    EditDwTitlesComponent,
    ViewDwTitlesComponent,

    EditDwPertyMemberManageComponent,
    ViewDwPertyMemberManageComponent,
    ListDwPertyMemberManageComponent,

    EditCadresManageComponent,
    ViewCadresManageComponent,
    ListCadresManageComponent,


    EditDwAssessmentComponent,
    ViewDwAssessmentComponent,
    ListDwAssessmentComponent,
    SelectDwAssessmentComponent,

    // ChangePartyComponent,
    ListDwResumeComponent,
    ViewDwResumeComponent,
    EditDwResumeComponent,

    EditDwTrainComponent,
    ViewDwTrainComponent,
    ListDwTrainComponent,

    EditDwFamilyComponent,
    ViewDwFamilyComponent,
    ListDwFamilyComponent,

    EditDwRelationshipComponent,
    ViewDwRelationshipComponent,
    ListDwRelationshipComponent,
    SelectDwRelationshipComponent,

    GeneralpartyComponent,

    // QueryComponent,

    EditDemocratManageComponent,
    ViewDemocratManageComponent,

    ViewDwRapComponent,
    ListDwRapComponent,
    EditDwRapComponent,
  };

  public getComponentByName(name) {
    const compType = this.dataMap[name];
    if (UtilValidate.isEmpty(compType)) {
      const msg = 'dataMap中不存在组件:' + name + '，请在component-map.service.ts中配置相应组件及模块。';
      // MessageService.showGlobalMessage('danger', msg);
      throw new Error(msg);
    }
    return compType;
  }
}

@NgModule({
  imports: [
    ViewActDemoLeaveModule,
    EditActDemoLeaveModule,

    ViewDtExcelTemplateFileModule,
    EditDtExcelTemplateFileModule,

    ViewDtExcelDataExtractModelModule,
    EditDtExcelDataExtractModelModule,

    EditDtDataTransferModelModule,
    ViewDtDataTransferModelModule,

    EditDtDataTransferHistoryModule,
    ViewDtDataTransferHistoryModule,

    EditGenericCurdModule,
    ViewGenericCurdModule,

    EditDataSourceModule,
    ViewDataSourceModule,


    EditDemoOrderModule,
    ViewDemoOrderModule,

    EditDwPertyMemberModule,
    ViewDwPertyMemberModule,
    ListDwPertyMemberModule,

    EditDwGeneralPartyModule,
    ViewDwGeneralPartyModule,
    EditDwPhasesModule,
    ViewDwPhasesModule,

    EditDwBuMenModule,
    ViewDwBuMenModule,

    EditDwDemocratModule,
    ViewDwDemocratModule,

    EditDwEthnicModule,
    ViewDwEthnicModule,

    EditDwProfessionalModule,
    ViewDwProfessionalModule,

    EditDwTitlesModule,
    ViewDwTitlesModule,

    EditDwPertyMemberManageModule,
    ViewDwPertyMemberManageModule,
    ListDwPertyMemberManageModule,

    EditCadresManageModule,
    ViewCadresManageModule,
    ListCadresManageModule,

    EditDwAssessmentModule,
    ViewDwAssessmentModule,
    ListDwAssessmentModule,
    SelectDwAssessmentModule,

    // ChangePartyModule,
    ListDwResumeModule,
    ViewDwResumeModule,
    EditDwResumeModule,

    EditDwTrainModule,
    ViewDwTrainModule,
    ListDwTrainModule,

    EditDwFamilyModule,
    ViewDwFamilyModule,
    ListDwFamilyModule,

    EditDwRelationshipModule,
    ViewDwRelationshipModule,
    ListDwRelationshipModule,
    SelectDwRelationshipModule,

    GeneralpartyModule,

    // QueryModule,

    EditDemocratManageModule,
    ViewDemocratManageModule,

    ViewDwRapModule,
    ListDwRapModule,
    EditDwRapModule,

  ]
})
export class ComponentMapModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: ComponentMapModule,
      providers: []
    };
  }
}
