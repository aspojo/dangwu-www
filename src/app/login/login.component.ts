import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {routerTransition} from '../router.animations';
import {HttpClient} from '@angular/common/http';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {environment} from '@environments';
import {Auth, UserLogin} from '../shared/services/auth';
import {EnvironmentService} from '@shared-services/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  animations: [routerTransition()]
})
export class LoginComponent implements OnInit {
  constructor(public router: Router,
              private http: HttpClient,
              public envService: EnvironmentService) {
  }

  savePassword: any;
  loginForm: FormGroup;


  ngOnInit() {
    const namePassValidator = [Validators.required, Validators.maxLength(11), Validators.minLength(3)];

    if (localStorage.getItem('USERNAME')) {
      this.savePassword = true;
    }
    this.loginForm = new FormGroup({
      'USERNAME': new FormControl(localStorage.getItem('USERNAME'), namePassValidator)
      , 'PASSWORD': new FormControl(localStorage.getItem('PASSWORD'), namePassValidator)
    });
    if (!environment.production && environment.autoLogin) {
      this.loginForm.patchValue({USERNAME: 'admin', PASSWORD: 'admin'});
      this.login();
    }

  }

  login() {
    if (this.savePassword) {
      localStorage.setItem('USERNAME', this.loginForm.value.USERNAME);
      localStorage.setItem('PASSWORD', this.loginForm.value.PASSWORD);
    } else {
      localStorage.removeItem('USERNAME');
      localStorage.removeItem('PASSWORD');
    }
    // 登陆
    this.http.post('ajaxLogin', this.loginForm.value).subscribe((data: UserLogin) => {
      if (data.userLoginId) {
        Auth.userData = data;
        this.router.navigate(['/dashboard']);
      }
    });
  }

}
