import { Component, Renderer2, ViewChild } from '@angular/core';
import { IMenu, MENUS } from './menu';
import { AuthenticateService } from '../authentication/authentication.service';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatMenuTrigger } from '@angular/material/menu';
@Component({
  selector: 'flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.css'],


})
export class FlexLayoutComponent {
  constructor(
    private renderer: Renderer2,
    private _auth: AuthenticateService,
    private _router: Router,
    private _snakBar: MatSnackBar

  ) {  }
  sidenav: any;
  toolbarHidden = false;
  menuItems: IMenu[] = [];
  @ViewChild('childMenu') childMenu!: MatMenuTrigger;

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
  shouldRenderMenuItem(item: any): boolean {
    return item.header !== true && (!item.child || !item.permissions || item.permissions.includes(this.userRole));
  }

  hasPermission(permissions: string[] | undefined): boolean {
    // If permissions are not specified, the item is accessible
    const user = JSON.parse(
      localStorage.getItem(this._auth.CURRENT_USER_KEY) || '{}'
    );
    const userRole = (
      user.role ||
      localStorage.getItem(this._auth.DEFAULT_CURRENT_USER_KEY) ||
      ''
    ).toLowerCase();
    if (!permissions || permissions.length === 0) {
      return true;
    }
  
    // Check if the user has at least one of the required permissions
    return permissions.includes(userRole);
  }

  userRole: string = 'user';
  setMenu() {
    const user = JSON.parse(
      localStorage.getItem(this._auth.CURRENT_USER_KEY) || '{}'
    );

    const userRole = (
      user.role ||
      localStorage.getItem(this._auth.DEFAULT_CURRENT_USER_KEY) ||
      ''
    ).toLowerCase();
    this.userRole = userRole
    const userPermissions = user.permissions || [];

    this.menuItems = MENUS.map((menu: any) => {
      if (!menu.permissions) {
        return menu;
      }

      // Check if the menu item itself is allowed
      if (
        menu.permissions.includes(userRole) ||
        userPermissions.some((permission: any) =>
          menu.permissions.includes(permission)
        )
      ) {
        // Filter child items based on their permissions
        const filteredChild = menu.child?.filter((childItem: any) => {
          if (!childItem.permissions) {
            return true; // No permissions required for the child
          }

          // Include the child item only if it has matching role permission
          return (
            childItem.permissions.includes(userRole) ||
            userPermissions.some((permission: any) =>
              childItem.permissions.includes(permission)
            )
          );
        });

        // Update the menu item with filtered child items
        return { ...menu, child: filteredChild };
      }

      // If the menu item itself is not allowed, return a version without child items
      return { ...menu, child: [] };
    });
  }
  triggerChildMenu(item: any, trigger: MatMenuTrigger): void {
    if (item.child && item.child.length > 0) {
      trigger.openMenu();
    }
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
      localStorage.removeItem(this._auth.ACCESS_TOKEN_KEY);
      localStorage.removeItem(this._auth.CURRENT_USER_KEY);
      window.location.reload();
      this.ngOnInit();
    }
  }

  shouldDisplayNode(node: any): boolean {
    // Implement your logic to check user permissions here
    const hasPermissions = node.permissions && node.permissions.includes(this.userRole);

    // Return true if the node should be displayed based on user permissions
    return (!node.header && (hasPermissions || (node.child && node.child.length > 0)));
  }

  navigate(navOption: any, sidenav: MatSidenav) {
    //   sidenav.close();
    //   const contactSection = document.getElementById(navOption);
    //   if (contactSection) {
    //     const yOffset =
    //       contactSection.getBoundingClientRect().top + window.pageYOffset;
    //     this.renderer.setProperty(document.documentElement, 'scrollTop', yOffset);
    //   }
  }

}
