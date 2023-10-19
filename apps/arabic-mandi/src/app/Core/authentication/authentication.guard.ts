import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private readonly _router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    return this._check();
  }

  _check() {
    // this._router.navigate(['/auth']);
    return true;
  }
}
