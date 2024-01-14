import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthenticateService } from './authentication.service';
import { Subscription, tap } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'food-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss'],
})
export class AuthenticationComponent {
  private subs = new Subscription();

  loginForm: FormGroup;

  constructor(private fb: FormBuilder, private readonly _router: Router, private _auth: AuthenticateService) {
    this.loginForm = this.fb.group({
      username: ['Admin_auth', [Validators.required]],
      password: ['Arabic', Validators.required]
    });
  }

  ngOnInit() {
    const user = localStorage.getItem(this._auth.DEFAULT_CURRENT_USER_KEY);
    if (!user) {
      this._router.navigate(['/home']);
    }
  }

  onSubmit() {
    if (this.loginForm.valid) {
      this._auth.isAuthenticated(this.loginForm.value)
      // Continue with form submission
    }
  }
}
