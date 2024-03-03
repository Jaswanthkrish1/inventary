import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../admin.guard';
import { DashBoardComponent } from './dashboard.component';
import { CategoryViewComponent } from '../category/views/view-category.component';


const dashboardRoutes: Routes = [
  {
    path: '',
    component: DashBoardComponent,
    canActivate: [AdminGuard],
    // data: { breadcrumb: 'DashBoard' },
    children: [
      {
        path: 'item',
        data: { breadcrumb: 'All Items' },
        loadChildren: () =>
          import('../createOrder/create-order.module').then(
            (m) => m.CreateOrderModule
          ),
      },
      {
        path: 'offer',
        data: { breadcrumb: 'All Offers' },
        loadChildren: () =>
          import('../createOffer/create-offer.module').then(
            (m) => m.CreateOfferModule
          ),
      },
      {
        path: 'category_view',
        data: { breadcrumb: 'All Categorys' },
        loadChildren: () =>
          import('../category/category.module').then(
            (m) => m.AdminCategoryModule
          ),
      },
    ]
  }

];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule],
})
export class dashboardRoutingModule { }
