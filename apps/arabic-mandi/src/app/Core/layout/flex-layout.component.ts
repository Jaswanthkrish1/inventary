import { Component, Renderer2, ViewChild } from '@angular/core';
import { IMenu, MENUS } from './menu';
import { AuthenticateService } from '../authentication/authentication.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, RouterModule } from '@angular/router';
import {  MatMenuTrigger } from '@angular/material/menu';

import { CommonModule } from '@angular/common';
import { CoreModule } from '@angular/flex-layout';
import { MaterialModule } from '../../angular-matirial.module';
import { FlexLayout } from '../../flex-layout.module';
import { MatIconModule } from '@angular/material/icon';
import { MatSnackBar, MatSnackBarModule } from '@angular/material/snack-bar';
@Component({
  standalone: true,
  selector: 'main-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.css'],
  imports:[ MaterialModule, MatSnackBarModule, RouterModule, CommonModule, FlexLayout ]
})
export class MainLayout {
  constructor(
    private renderer: Renderer2,
    private _auth: AuthenticateService,
    private _router: Router,
    private _snakBar: MatSnackBar

  ) {}
  sidenav: any;
  toolbarHidden = false;
  menuItems: IMenu[] = [];
  isScreenLarge: boolean = window.innerWidth > 600;

  ngOnInit(): void {
    let token = localStorage.getItem(this._auth.ACCESS_TOKEN_KEY);
    if (token) {
      this._auth.ValidateToken(token);
      this.setMenu();
    } else {
      localStorage.setItem(this._auth.DEFAULT_CURRENT_USER_KEY, 'user');
      this.setMenu();
    }
  }
  setMenu() {
    const user = JSON.parse(
      localStorage.getItem(this._auth.CURRENT_USER_KEY) || '{}'
    );
    const userRole = (
      user.role ||
      localStorage.getItem(this._auth.DEFAULT_CURRENT_USER_KEY) ||
      ''
    ).toLowerCase();
    const userPermissions = user.permissions || [];

    this.menuItems = MENUS.filter((menu: any) => {
      if (!menu.permissions) {
        return true;
      }

      return (
        menu.permissions.includes(userRole) ||
        userPermissions.some((permission: any) =>
          menu.permissions.includes(permission)
        )
      );
    });
  }

  public openMenuHandler(menu: IMenu) {
    menu.isSelected = true;
    if (menu.link) {
      this._router.navigateByUrl(menu.link);
    }
  }

  isCurrentUserAvailable(): boolean {
    const user = JSON.parse(
      localStorage.getItem(this._auth.CURRENT_USER_KEY) || '{}'
    );
    const token = localStorage.getItem(this._auth.ACCESS_TOKEN_KEY);
    return !!user && !!user.id && !!token; // Check if user exists and has an 'id' and token property
  }

  logOut() {
    if (this.isCurrentUserAvailable()) {
      this._snakBar.open('im working')
      // localStorage.removeItem(this._auth.ACCESS_TOKEN_KEY);
      // localStorage.removeItem(this._auth.CURRENT_USER_KEY);
      // window.location.reload();
      // this.ngOnInit();
    }
  }

  navigate(navOption: any, sidenav: MatSidenav) {
    sidenav.close();
    const contactSection = document.getElementById(navOption);
    if (contactSection) {
      const yOffset =
        contactSection.getBoundingClientRect().top + window.pageYOffset;
      this.renderer.setProperty(document.documentElement, 'scrollTop', yOffset);
    }
  }

}
