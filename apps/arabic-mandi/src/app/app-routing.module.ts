import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriesComponent } from './Core/pages/categories/categories.component';

import { LoginComponent } from './Core/login/login.component';
import { FoodviewComponent } from './Core/pages/foodview/foodview.component';
const appRoutes: Routes = [
  {
    path: '',
    component: CategoriesComponent,
    children: [
      {
        path: 'categories',
        loadChildren: () =>
          import('../app/Core/pages/categories/categories.module').then(
            (m) => m.CategoriesModule
          ),
      },
      
    ],
  },
  { path: 'foodView', component: FoodviewComponent },
 

  // {
  //   path:'login',
  //   canActivate: [AuthGuard],
  //   component:LoginComponent,children:[
  //   {
  // //forgot,register,all this comes under this
  //   }
  // ]}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
