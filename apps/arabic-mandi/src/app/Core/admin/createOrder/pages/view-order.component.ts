import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  DeleteOneItemEntityInput
} from 'apps/arabic-mandi/src/generate-types';
import { BehaviorSubject, Subscription } from 'rxjs';
import { CreateOrderService } from '../create-order.service';
import { Apollo } from 'apollo-angular';
import gql from 'graphql-tag';
import { MatDialog } from '@angular/material/dialog';
import { UpdateItemComponentDialog } from '../components/update-order-dailog.component';

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
export class ViewOrderComponent implements OnInit, OnDestroy,AfterViewInit {
  constructor(
    private _snakbar: MatSnackBar,
    private _orderservice: CreateOrderService,
    private apollo: Apollo,
    private _dialog: MatDialog,

  ) {
  
   }

  private subs = new Subscription();

  public searchItems = new FormControl(null);
  public displayedColumns: string[] = ['image','name', 'category', 'price', 'offer', 'status', 'type', 'actions'];
  public dataSource: any;

  ngAfterViewInit(): void {
    this.getData()
  }

  ngOnInit(): void {
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
            type
            status
            image_data
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
        },
        (error) => {
          console.log(error);
        }
      );
  }

  onDeleteHandler(id: any) {
    const param: DeleteOneItemEntityInput = {
      id: id,
    }
    this._orderservice.removeSingleItem(param)
      setTimeout(() => {
        this.ngAfterViewInit();
      }, 500);
  }
  onUpdateHandler(data: any) {
    let dialogRef = this._dialog.open(UpdateItemComponentDialog, {
      data: data,
    });
    dialogRef.afterClosed().subscribe((r) => {
      if (r) {
        setTimeout(() => {
          this.getData();
        }, 500);
      }
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
