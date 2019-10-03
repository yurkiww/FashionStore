import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Observable } from 'rxjs';

import { NotificationsService } from 'angular2-notifications';
import { Router } from '@angular/router';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private notif: NotificationsService, private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token: string = localStorage.getItem('token')
      ? localStorage.getItem('token')
      : sessionStorage.getItem('token');
    console.log(token);
    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });
    }
    // else {
    //   this.router.navigate(['/login']);
    // }
    return new Observable<HttpEvent<any>>((subscriber) => {
      const originalRequestSubscription = next.handle(request).subscribe(
        (response: any) => {
          subscriber.next(response);
        },
        (err) => {
          console.log(err);
          this.notif.error(err.error.message, err.error.title, {
            timeOut: 3000,
          });
          if (err.status === 401) {
            localStorage.clear();
            this.router.navigate(['/login']);
          } else {
            // this.notif.error(err.error.title);
          }
          subscriber.error(err);
        },
        () => subscriber.complete()
      );
      return () => originalRequestSubscription.unsubscribe();
    });
  }
}
