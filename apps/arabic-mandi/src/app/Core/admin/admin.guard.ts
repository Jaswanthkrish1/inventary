import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticateService } from '../authentication/authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AdminGuard implements CanActivate {
  constructor(private readonly _auth: AuthenticateService) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    if (this._auth.getCurrentUser()) {
      return true;
    } else {
      return false;
    }
  }
}
