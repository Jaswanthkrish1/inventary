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

  ValidateToken(token:string){
    const payload = { token: token }
    this.http.post(`${environment.apiUrl}/auth/validateToken/`,payload).subscribe( ( responce: any) =>{
      if(responce){
        this._router.navigate(['/home']);
      }else{
        localStorage.clear();
        this._router.navigate(['/auth']);
      }
    },(error: any)=>{
      console.log(error)
    })
  }
}
