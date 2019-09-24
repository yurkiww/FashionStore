import { CanActivate, Router } from '@angular/router';

export class AuthGuardService implements CanActivate {
  constructor(public router: Router) {}

  canActivate(): boolean {
    const tokenLocal = localStorage.getItem('token');
    const tokenSession = sessionStorage.getItem('token');
    if (tokenLocal || tokenSession) {
      return true;
    }
    this.router.navigateByUrl('/login');
    return false;
  }
}
