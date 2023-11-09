import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthenticationGuard } from './Core/authentication/authentication.guard';
import { PageNotFound } from './Core/Error/pagenotfound/notfound.component';
import { MenuDialogCompnent } from './Core/client/menu/components/menu-dialog.component';
import {MainLayout} from './Core/layout/flex-layout.component'

const appRoutes: Routes = [
  {
    path: 'auth',
    loadChildren: () =>
      import('./Core/authentication/authentication.module').then(
        (m) => m.AuthenticationModule
      ),
  },
  
  {
    path: '',
    component: MainLayout,
    canActivate: [AuthenticationGuard],
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('./Core/client/category/category.module').then(
            (m) => m.CategoryModule
          ),
      },
      {
        path: 'contact',
        loadChildren: () =>
          import('./Core/client/contact/contact.module').then(
            (m) => m.ContactModule
          ),
      },
      {
        path: 'combo',
        loadChildren: () =>
          import('./Core/client/combo/combo.module').then((m) => m.ComboModule),
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./Core/client/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'location',
        loadChildren: () =>
          import('./Core/client/location/location.module').then(
            (m) => m.locationModule
          ),
      },
      {
        path: 'menu',
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
export class AppRoutingModule {}
