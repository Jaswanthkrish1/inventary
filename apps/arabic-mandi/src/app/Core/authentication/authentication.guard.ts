import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private readonly _router: Router) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
    if(this._check()){
      return true;    
    }else{
      this._router.navigate(['/auth']);
      return false
    }
  }

  _check() {
   
    return true;
  }
}
