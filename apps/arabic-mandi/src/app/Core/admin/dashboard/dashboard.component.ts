import { Component } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateOrderService } from '../createOrder/create-order.service';
import { Apollo } from 'apollo-angular';
import { MatDialog } from '@angular/material/dialog';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { ADMINMENUS, AdminMenu } from './dashboardmenu';
@Component({
  selector: 'food-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
  
  `],
  styleUrls: ["./dashboard.component.scss"]
})
export class DashBoardComponent {
  constructor(
    private _snakbar: MatSnackBar,
    private _orderservice: CreateOrderService,
    private apollo: Apollo,
    private _dialog: MatDialog,

  ) {
    this.dataSource.data = ADMINMENUS;
   }
  treeControl = new NestedTreeControl<AdminMenu>(node => node.child);
  dataSource = new MatTreeNestedDataSource<AdminMenu>();

  hasChild = (_: number, node: AdminMenu) => !!node.child && node.child.length > 0;
  
}