import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Core/pages/category/category.component';
import { LayoutComponent } from './Core/layout/layout.component';
import { AuthenticationGuard } from './Core/authentication/authentication.guard';
const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthenticationGuard],
    children: [
      {   
        path: 'home',
        loadChildren: () =>
          import('./Core/pages/category/category.module').then(
            (m) => m.CategoryModule
          ),
      },
      { path: '', pathMatch: 'full', redirectTo: '/home', },
    ],
    
  },


];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
