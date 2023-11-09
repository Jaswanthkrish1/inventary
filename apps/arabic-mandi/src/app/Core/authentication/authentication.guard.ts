import { ActivatedRouteSnapshot, Router, CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticateService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor( private readonly _auth:AuthenticateService) {}

  canActivate(next: ActivatedRouteSnapshot): boolean {
   const user = localStorage.getItem(this._auth.CURRENT_USER_KEY)
   if(!user){
     return true;  
     }else{
     localStorage.removeItem(this._auth.DEFAULT_CURRENT_USER_KEY,);
    return true
   }
}
}
