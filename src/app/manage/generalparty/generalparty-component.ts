import {Component} from '@angular/core';
import {routerTransition} from '@app/router-animations';
import {HttpClient} from '@angular/common/http';
import {EnvironmentService} from '@shared-services/environment';
import {ComponentMapService} from '@config';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-generalparty',
  templateUrl: './generalparty-component.html',
  animations: [routerTransition()]
})
export class GeneralpartyComponent {

  constructor(
    public envService: EnvironmentService,
    public http: HttpClient,
    public modalService: NgbModal,
    public compMapService: ComponentMapService,
  ) {
  }


}
