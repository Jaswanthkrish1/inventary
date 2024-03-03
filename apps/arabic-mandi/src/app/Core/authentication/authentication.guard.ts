import { CanActivate } from '@angular/router';
import { Injectable } from '@angular/core';
import { AuthenticateService } from './authentication.service';

@Injectable({
  providedIn: 'root',
})
export class AuthenticationGuard implements CanActivate {
  constructor(private readonly _auth: AuthenticateService) { }

  async canActivate(): Promise<boolean> {
    const user = localStorage.getItem(this._auth.CURRENT_USER_KEY)
    if (!user) {
      const userId = localStorage.getItem(this._auth.ACCESS_TOKEN_KEY)
      if (userId) {
        try {
          const isValid = await this._auth.ValidateToken(userId);
          console.log(isValid);
          return isValid;
        } catch (error) {
          console.error(error);
          return false; // or handle the error accordingly
        }
      } else {
        localStorage.removeItem(this._auth.DEFAULT_CURRENT_USER_KEY);

        return true;
      }
    } else {
      localStorage.removeItem(this._auth.DEFAULT_CURRENT_USER_KEY);
      return true;
    }
  }

}
