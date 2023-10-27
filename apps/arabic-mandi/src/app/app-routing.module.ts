import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutComponent } from './Core/layout/layout.component';
import { AuthenticationGuard } from './Core/authentication/authentication.guard';
import { PageNotFound } from './Core/Error/pagenotfound/notfound.component';
import { FoodComboComponent } from './Core/client/category/components/combo.component';
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
    component: LayoutComponent,
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
        path: 'combo',
        component: FoodComboComponent,
      },
      {
        path: 'about',
        loadChildren: () =>
          import('./Core/client/about/about.module').then((m) => m.AboutModule),
      },
      {
        path: 'not-found',
        component: PageNotFound,
      },
      { path: '', pathMatch: 'full', redirectTo: '/home' },
      {
        path: '**', // Wildcard route
        redirectTo: '/not-found',
      },
    ],
  },
  {
    path: '**', // Wildcard route
    redirectTo: '/auth',
  },
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
