import {Component, Injectable, ModuleWithProviders, NgModule} from '@angular/core';
import {NgbModal, NgbModalRef} from '@ng-bootstrap/ng-bootstrap';


@Injectable()
export class LoadingService {

  constructor(private modalService: NgbModal) {
  }

  open(): NgbModalRef {
    const ngbModalRef = this.modalService.open(LoadingComponent, {backdrop: 'static'});
    setTimeout(() => {
      try {
        ngbModalRef.close();
      } catch (e) {
      }
    }, 5000);
    return ngbModalRef;
  }

  close(modalRef: NgbModalRef) {
    modalRef.close();
  }

}

@Component({
  template: `
      <div class="p-1"><i class="fa fa-2x fa-spinner text-warning" aria-hidden="true"></i> &nbsp;处理中。。。</div>`,
  styles: [`
      @-webkit-keyframes spin {
          from {
              -webkit-transform: rotate(0deg);
          }
          to {
              -webkit-transform: rotate(360deg);
          }
      }

      @keyframes spin {
          from {
              transform: rotate(0deg);
          }
          to {
              transform: rotate(360deg);
          }
      }

      .fa-spinner {
          -webkit-animation: spin 1s linear 1s 5 alternate;
          animation: spin 1s linear infinite;
      }
  `]
})
export class LoadingComponent {
}

@NgModule({
  declarations: [LoadingComponent],
  entryComponents: [LoadingComponent],
  exports: [LoadingComponent],
  providers: [LoadingService]
})
export class LoadingModel {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: LoadingModel,
      providers: [LoadingService]
    };
  }
}
