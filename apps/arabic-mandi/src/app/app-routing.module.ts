import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './Core/authentication/authentication.guard';
import { PageNotFound } from './Core/Error/pagenotfound/notfound.component';
import { MenuDialogCompnent } from './Core/client/menu/components/menu-dialog.component';
import { FlexLayoutComponent } from './Core/layout/flex-layout.component'

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./Core/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  {
    path: 'Uploadxlsx',
    loadChildren: () =>
      import('./Core/static-data/xlsx.module').then(
        (m) => m.xlsxModule
      ),
  },

  {
    path: '',
    component: FlexLayoutComponent,
    canActivate: [AuthenticationGuard],
    data: { breadcrumb: 'Home' },
    children: [
      {
        path: 'home',
        data: { breadcrumb: { skip: true } },
        loadChildren: () =>
          import('./Core/client/category/category.module').then(
            (m) => m.CategoryModule
          ),
      },
      {
        path: 'contact',
        data: { breadcrumb: 'Contact' },

        loadChildren: () =>
          import('./Core/client/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'combo',
        data: { breadcrumb: 'Combo' },
        loadChildren: () =>
          import('./Core/client/combo/combo.module').then((m) => m.ComboModule),
      },
      {
        path: 'about',
        data: { breadcrumb: 'About' },
        loadChildren: () =>
          import('./Core/client/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'location',
        data: { breadcrumb: 'Location' },
        loadChildren: () =>
          import('./Core/client/location/location.module').then(
            (m) => m.locationModule
          ),
      },
      {
        path: 'admin',
        data: { breadcrumb: 'Admin' },
        canActivate: [AuthenticationGuard],
        loadChildren: () =>
          import('./Core/admin/admin.module').then(
            (m) => m.AdminModule
          ),
      },
      {
        path: 'menu',
        data: { breadcrumb: 'Menu' },
        component: MenuDialogCompnent,
      },
      { path: '', pathMatch: 'full', redirectTo: '/home' },
      {
        path: 'not-found',
        component: PageNotFound,
      },

      {
        path: '**', // Wildcard route
        redirectTo: '/not-found',
      },
    ],
  },



];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
