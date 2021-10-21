import {Component, OnInit} from '@angular/core';
import {MessageService} from '../shared/services/message-service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  constructor() {
  }

  ngOnInit() {
  }

  get alerts() {
    return MessageService.alerts;
  }

  onClosed(alert) {
    MessageService.removeGlobalMessage(alert);
  }
  closeMessage() {
    MessageService.dismissGlobalMessage();
  }
}
