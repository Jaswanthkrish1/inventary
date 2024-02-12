import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import {
  DeleteOneItemEntityInput, FoodTypesQueryVariables, GetItemEntitiesQueryVariables
} from 'apps/arabic-mandi/src/generate-types';
import { BehaviorSubject, Subscription, debounceTime, switchMap } from 'rxjs';
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
      .mat-mdc-table {
        --mat-table-row-item-outline-width: 1px;
        table-layout: auto;
        white-space: normal;
        width: 100%;
        background-color: var(--mat-table-background-color);
    }
    `,
  ],
})
export class ViewOrderComponent implements OnInit, OnDestroy, AfterViewInit {
  foodTypes: { __typename?: "FoodType" | undefined; id: number; name: string; }[] = [];
  constructor(
    private _snakbar: MatSnackBar,
    private _orderservice: CreateOrderService,
    private apollo: Apollo,
    private _dialog: MatDialog,

  ) { }

  private subs = new Subscription();
  private getAllEntitiesDataSetChange$ = new BehaviorSubject(<
    GetItemEntitiesQueryVariables
    >{
      filter: {},
      sorting: [],
      // paging: { limit: 10, offset: 0 },
    });
  public isLoading = true;
  public searchItems = new FormControl(null);
  public displayedColumns: string[] = ['image', 'name', 'category', 'foodtype', 'size', 'price', 'offer', 'status', 'type', 'actions'];
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
            const itemName = String(item.name).toLowerCase().replace(/\s/g, '');
            const search = String(v).toLowerCase().replace(/\s/g, '');
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
            },
            foodtype{
              id
              name
            },
            foodsize{
              id
              name
            },
            createdby {
              id
              role
            },
            updatedby {
              id
              role
            }
          }
        }
      `,
      })
      .subscribe(
        ({ data }: any) => {
          setTimeout(() => {
            this.dataSource = data.getItems;
            this.isLoading = false;
          }, 1000)
        },
        (error) => {
          console.error(error);
          this._snakbar.open("Error while getting data ")
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
    }, 1000);
  }
  onUpdateHandler(data: any) {
    let dialogRef = this._dialog.open(UpdateItemComponentDialog, {
      data: data,
    });
    dialogRef.afterClosed().subscribe((r) => {
      if (r) {
        setTimeout(() => {
          this.getData();
        }, 1000);
      }
    });
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
