import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { environment } from 'apps/arabic-mandi/src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class AuthenticateService {
  constructor(
    private http: HttpClient,
    private _snakbar: MatSnackBar,
    private readonly _router: Router
  ) {}

  ACCESS_TOKEN_KEY = 'access-token';
  CURRENT_USER_KEY = 'current-user';
  DEFAULT_CURRENT_USER_KEY = 'default-user';

  isAuthenticated(secret: any): any {
    this.http.post(`${environment.apiUrl}/auth/login`, secret).subscribe(
      (response: any) => {
        // Handle the successful response
        if (response != null) {
          localStorage.setItem(this.ACCESS_TOKEN_KEY, response.Secret.token);
          localStorage.setItem(
            this.CURRENT_USER_KEY,
            JSON.stringify(response.Secret.payload)
          );
          this._router.navigate(['/home']);
        } else {
          this._snakbar.open('Invalid Credentials');
        }
      },
      (error) => {
        // Handle HTTP request errors
        console.error('Login failed', error);
      }
    );
  }

  createUserRegister(details: any) {
    const data = {
      username: 'Admin_auth',
      password: 'Arabic',
      role: 'Admin',
    };
    this.http.post(`${environment.apiUrl}/auth/register`, data).subscribe(
      (res) => {
        console.log(res);
      },
      (error) => {
        console.log(error);
      }
    );
  }

  ValidateToken(token: string) {
    const payload = { token: token };
    this.http
      .post(`${environment.apiUrl}/auth/validateToken/`, payload)
      .subscribe(
        (responce: any) => {
          if (responce) {
            //don't uncoment this. if did The application will reload every page and you will lose the data
            // this._router.navigate(['/']);
          } else {
            localStorage.clear();
            this._router.navigate(['/auth']);
          }
        },
        (error: any) => {
          console.log(error);
        }
      );
  }
  getCurrentUser(): boolean {
    let user = localStorage.getItem(this.DEFAULT_CURRENT_USER_KEY);
    if (user) {
      this._router.navigate(['/']);
      return true;
    } else {
      return true;
    }
  }
}
