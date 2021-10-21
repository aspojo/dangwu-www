import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Router} from '@angular/router';
import {environment} from '@environments';
import {Auth} from './auth';
import {share} from 'rxjs/internal/operators';
import {LoadingService} from '@shared-services/loading';
import {MessageService} from '@shared-services/message';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(
    private router: Router,
    private loadingService: LoadingService
  ) {
  }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    // Before doing anything, it's important to only cache GET requests.
    // Skip this interceptor if the request method isn't GET.


    let url = null;
    if (!req.url.startsWith('http')) {
      url = environment.serverUrl + req.url;
      if ((environment.serverUrl.startsWith('http') && !window.location.href.startsWith(environment.serverUrl))
        || !navigator.cookieEnabled
      ) {
        // 跨域，或者cookie被禁止,则加上jsessionid以维持session
        if (Auth.userData) {
          // 已经登陆过
          url = url + ';jsessionid=' + Auth.userData.jsessionid;
        }
      }
    }
    const headers = req.headers.set('X-Requested-With', 'XMLHttpRequest');
    req = req.clone({url: url, headers: headers});
    if (!req.url.startsWith('login')) {
    }
    if (req.method === 'GET') {
      return next.handle(req);
    }

    const obs = next.handle(req).pipe(share());
    let loadingRef;
    // 避免控制台报错 ExpressionChangedAfterItHasBeenCheckedError
    setTimeout(() => {
      loadingRef = this.loadingService.open();
      obs.subscribe(event => {
        // Remember, there may be other events besides just the response.
        loadingRef.close();
        if (event instanceof HttpResponse) {
          // Update the cache.
          // TODO:检查登陆情况
          if (event.body === undefined || event.body === null) {
            MessageService.showGlobalMessage('danger', '服务器异常');
          } else if (event.body.needLogin) {
            if (environment.production) {
              this.router.navigate(['/login']);
            } else {
              Auth.userData = null;
            }
          } else if (event.body.error || event.body.errorMsg) {
            const error = event.body.error || event.body.errorMsg;
            event.body.error = error;
            MessageService.showGlobalMessage('danger', error);
          }

        }
      });

    });

    // return obser;
    return obs;

  }
}
