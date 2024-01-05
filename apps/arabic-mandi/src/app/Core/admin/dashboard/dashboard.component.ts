import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateOrderService } from '../createOrder/create-order.service';
import { Apollo } from 'apollo-angular';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'food-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
    `
      .icon {
        padding: 0px !important ;
        box-sizing: content-box;
      }
      .button_action:hover {
        background-color: red;
      }
    `,
  ],
})
export class DashBoardComponent implements OnInit, OnDestroy,AfterViewInit {
  constructor(
    private _snakbar: MatSnackBar,
    private _orderservice: CreateOrderService,
    private apollo: Apollo,
    private _dialog: MatDialog,

  ) {
  
   }
    ngOnInit(): void {
        throw new Error('Method not implemented.');
    }
    ngOnDestroy(): void {
        throw new Error('Method not implemented.');
    }
    ngAfterViewInit(): void {
        throw new Error('Method not implemented.');
    }
}