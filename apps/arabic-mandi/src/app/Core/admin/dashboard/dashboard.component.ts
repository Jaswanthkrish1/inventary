import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateOrderService } from '../createOrder/create-order.service';
import { Apollo } from 'apollo-angular';
import { MatDialog } from '@angular/material/dialog';
import { NestedTreeControl } from '@angular/cdk/tree';
import { MatTreeNestedDataSource } from '@angular/material/tree';
import { DashBoardTree_DATA } from './dashboardmenu';
import { DashBoardNode } from './dashboardmenu';
import { IMenu, MENUS } from '../../layout/menu';
@Component({
  selector: 'food-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [`
  .example-tree-invisible {
    display: none;
  }
  
  .example-tree ul,
  .example-tree li {
    margin-top: 0;
    margin-bottom: 0;
    list-style-type: none;
    margin-right: 10px;
  }
  .example-tree .mat-nested-tree-node div[role=group] {
    padding-left: 10px;
  }

  .mat-tree-node {
    display: flex;
    align-items: center;
    flex: 1;
    word-wrap: break-word;
    margin-right: 5px;
  }
  
  .example-tree div[role=group] > .mat-tree-node {
    padding-left: 20px;
  }
  `]
})
export class DashBoardComponent {
  constructor(
    private _snakbar: MatSnackBar,
    private _orderservice: CreateOrderService,
    private apollo: Apollo,
    private _dialog: MatDialog,

  ) {
    this.dataSource.data = MENUS;
   }
  treeControl = new NestedTreeControl<IMenu>(node => node.child);
  dataSource = new MatTreeNestedDataSource<IMenu>();

  hasChild = (_: number, node: IMenu) => !!node.child && node.child.length > 0;
  
}