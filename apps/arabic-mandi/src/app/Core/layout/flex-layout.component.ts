import { Component, Renderer2, ViewChild } from '@angular/core';
import { IMenu, MENUS } from './menu';
import { AuthenticateService } from '../authentication/authentication.service';
import { MatSidenav } from '@angular/material/sidenav';
import { ActivatedRoute, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatMenuTrigger } from '@angular/material/menu';
import { BreadcrumbService } from 'xng-breadcrumb';
import { FormControl } from '@angular/forms';
import { BehaviorSubject, Subscription, catchError, debounceTime, switchMap } from 'rxjs';
import { GetItemEntitiesQueryVariables } from 'apps/arabic-mandi/src/generate-types';
import { CategoryService } from '../client/category/category.service';
@Component({
  selector: 'flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.css'],
})

export class FlexLayoutComponent {
  @ViewChild('searchMenuTrigger') searchMenuTrigger!: MatMenuTrigger;
  sidenav: any;
  toolbarHidden = false;
  menuItems: IMenu[] = [];
  private subs = new Subscription;
  protected _userData: any = {}
  protected _token: any;
  protected _defaultUser: any;
  protected dataSource: any[] = [];
  private getAllEntitiesDataSetChange$ = new BehaviorSubject(<
    GetItemEntitiesQueryVariables
    >{
      filter: {},
      sorting: [],
      // paging: { limit: 10, offset: 0 },
    });
  protected _userRole: string = 'user';
  public globalSearchItems = new FormControl('');
  recentSearches: string[] = [];
  filteredData: any[] = [];
  hasData: boolean = false;
  selectedIndex = -1; // Index of the currently selected option
  displayOption = false;



  constructor(
    private _auth: AuthenticateService,
    private _router: Router,
    private _snakBar: MatSnackBar,
    private route: ActivatedRoute,
    private _categoryService: CategoryService

  ) {
    this.ngOnInit();
    this.getCommonItemData();
    this.searchItem()
  }

  openSearchMenu() {
    if (this.globalSearchItems.value !== '') {
      // Check if the searchMenuTrigger is defined before calling openMenu()
      if (this.searchMenuTrigger) {
        this.searchMenuTrigger.openMenu();
      }
    }
  }
  //  Search function 
  searchItem() {
    let data: any[] = []
    this.subs.add(
      this.globalSearchItems.valueChanges.subscribe((r) => {
      this. displayOption = true;
        if (data.length === 0) {
          data = this.dataSource;
        }
        if (r) {
          this.filteredData = data.filter((item: any) => {
            const itemName = String(item.name).toLowerCase().replace(/\s/g, '');
            const search = String(r).toLowerCase().replace(/\s/g, '');
            return itemName.includes(search);
          });
        } else {
          // If search criteria is empty, restore originalData
          this.dataSource = data;
        }
      })
    )

  }
  setInputValue(item: any) {
    // Set the value of the clicked item to the FormControl
    this.globalSearchItems.setValue(item.name);
  }

  selectOption(item: any) {
    this.navigateToAnotherPage(item)
    this.globalSearchItems.setValue(item.name); // Set the value of the search bar to the clicked item's name
  }

  private navigateToAnotherPage(item: any) {
    const encodedId = this._categoryService.encodeId(item?.category?.id)
    this. displayOption = false;
    this._router.navigate(['/home/food', encodedId], { relativeTo: this.route });
  }

  onKeyDown(event: KeyboardEvent) {
    if (event.key === 'ArrowUp') {
      event.preventDefault(); // Prevent scrolling the page
      this.selectedIndex = Math.max(this.selectedIndex - 1, 0); // Move selection up
    } else if (event.key === 'ArrowDown') {
      event.preventDefault(); // Prevent scrolling the page
      this.selectedIndex = Math.min(this.selectedIndex + 1, this.filteredData.length - 1); // Move selection down
    } else if (event.key === 'Enter' && this.selectedIndex !== -1) {
      // Select the item if Enter is pressed
      this.globalSearchItems.setValue('');
    this. displayOption = false;
      this.selectOption(this.filteredData[this.selectedIndex]);
    }
  }

  private getCommonItemData() {
    this.getAllEntitiesDataSetChange$.pipe(
      debounceTime(500),
      switchMap((variable) => this._auth.findItems(variable))

    ).subscribe(({ data }) => {
      if (data?.itemEntities) {
        this.dataSource = data?.itemEntities;
      }
    }, (catchError) => {
      this._snakBar.open("error While Getting Information", catchError)
    })
  }

  // Search function close

  async ngOnInit(): Promise<void> {
    this._defaultUser = localStorage.getItem(this._auth.DEFAULT_CURRENT_USER_KEY) ||
      ''
    this._userData = JSON.parse(
      localStorage.getItem(this._auth.CURRENT_USER_KEY) || '{}'
    );
    this._userRole = (
      this._userData.role ||
      localStorage.getItem(this._auth.DEFAULT_CURRENT_USER_KEY) ||
      ''
    ).toLowerCase();

    this._token = localStorage.getItem(this._auth.ACCESS_TOKEN_KEY);
    if (this._token) {
      // this.breadcrumbService.set('@ChildOne', 'Child One');
      if (await this._auth.ValidateToken(this._token)) {
        this.setMenu();
      }
    } else {
      localStorage.setItem(this._auth.DEFAULT_CURRENT_USER_KEY, 'user');
      this.setMenu();
    }

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

  setMenu() {
    const user = JSON.parse(
      localStorage.getItem(this._auth.CURRENT_USER_KEY) || '{}'
    );

    const userRole = (
      user.role ||
      localStorage.getItem(this._auth.DEFAULT_CURRENT_USER_KEY) ||
      ''
    ).toLowerCase();
    this._userRole = userRole
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

  login() {
    this._router.navigate(['/auth']);
  }

  shouldDisplayNode(node: any): boolean {
    // Implement your logic to check user permissions here
    const hasPermissions = node.permissions && node.permissions.includes(this._userRole);
    // Return true if the node should be displayed based on user permissions
    return (!node.header && (hasPermissions || (node.child && node.child.length > 0)));
  }

}
