import {Component, OnInit} from '@angular/core';
import {NavigationEnd, Router} from '@angular/router';
import {MessageService} from '@shared-services/message';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public static url;

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          AppComponent.url = event.url;
        }

      });
  }

  get alerts() {
    return MessageService.alerts;
  }

  onClosed(alert) {
    MessageService.removeGlobalMessage(alert);
  }
}
