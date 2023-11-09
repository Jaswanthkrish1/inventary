import { Component, HostListener, Renderer2, ViewChild } from '@angular/core';
import { IMenu, MENUS } from './menu';
import { AuthenticateService } from '../authentication/authentication.service';
import { MatSidenav } from '@angular/material/sidenav';
@Component({
  selector: 'main-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.css'],
})
export class MainLayout {
  constructor(
    private renderer: Renderer2,
    private _auth: AuthenticateService
  ) {}
  toolbarHidden = false;
  menuItems: IMenu[] = [];

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

  isCurrentUserAvailable(): boolean {
    const user = JSON.parse(
      localStorage.getItem(this._auth.CURRENT_USER_KEY) || '{}'
    );
    const token = localStorage.getItem(this._auth.ACCESS_TOKEN_KEY);
    return !!user && !!user.id && !!token; // Check if user exists and has an 'id' and token property
  }

  logOut() {
    if (this.isCurrentUserAvailable()) {
      localStorage.removeItem(this._auth.ACCESS_TOKEN_KEY);
      localStorage.removeItem(this._auth.CURRENT_USER_KEY);
      window.location.reload();
      this.ngOnInit();
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
