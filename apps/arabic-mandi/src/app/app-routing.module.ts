import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './Core/pages/category/category.component';
import { LayoutComponent } from './Core/layout/layout.component';
import { AuthenticationGuard } from './Core/authentication/authentication.guard';
import { FoodComboComponent } from './Core/pages/category/components/combo.component';
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
      },{   
        path: 'combo',
        component: FoodComboComponent
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
