import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  Query
} from 'apps/arabic-mandi/src/generate-types';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CreateOrderService } from '../create-order.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';

interface FoodItem {
  id: number;
  name: string;
  price: number;
  category: string;
}
@Component({
  selector: 'food-view-order',
  templateUrl: './view-order.component.html',
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
export class ViewOrderComponent implements OnInit, OnDestroy {
  constructor(
    private _snakbar: MatSnackBar,
    private _orderservice: CreateOrderService,
    private apollo: Apollo
  ) { }
  private subs = new Subscription();

  public searchItems = new FormControl(null);
  public displayedColumns: string[] = ['name', 'category', 'price', 'offer', 'actions'];
  public dataSource: any;


  ngOnInit(): void {
    this.getData();
    let data: any[] = []
    this.subs.add(
      this.searchItems.valueChanges.subscribe((v: any) => {
        if (data.length === 0) {
          data = this.dataSource;
        }
        if (v) {
          this.dataSource = data.filter((item: any) => {
            const itemName = String(item.category.name).toLowerCase();
            const search = String(v).toLowerCase();
            return itemName.includes(search);
          });
        } else {
          this.dataSource = data;
        }
      })
    );
  }

  getData() {
    this.apollo
      .query({
        query: gql
          `
        query get {
          getItems {
            id
            name
            offer
            price
            category {
              id
              isActive
              name
            }
            createdby {
              id
              role
            }
          }
        }
      `,
      })
      .subscribe(
        ({ data }: any) => {
          this.dataSource = data.getItems;
          //  console.log(this.dataSource)
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onDeleteHandler(id: any): any {
    return this._snakbar.open('Cannonball!!');
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
