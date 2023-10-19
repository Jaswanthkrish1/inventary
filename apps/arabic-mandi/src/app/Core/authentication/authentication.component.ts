import { Component } from '@angular/core';

@Component({
  selector: 'food-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
})
export class AuthenticationComponent {

  showLoginForm: boolean = true;
  showRegisterForm: boolean = false;

  showLogin() {
    console.log('data')
    this.showLoginForm = true;
    this.showRegisterForm = false;
  }

  showRegister() {
    console.log('data')
    this.showLoginForm = false;
    this.showRegisterForm = true;
  } 
}
