import {Component, OnInit} from '@angular/core';
import {AppComponent} from '../app.component';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  get errorUrl() {
    return AppComponent.url;
  }

  constructor() { }

  ngOnInit() {
  }

}
