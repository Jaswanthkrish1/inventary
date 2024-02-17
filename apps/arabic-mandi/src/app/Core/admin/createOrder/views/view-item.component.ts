import { AfterViewInit, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { DeleteOneItemEntityInput, GetItemEntitiesQueryVariables } from "apps/arabic-mandi/src/generate-types";
import { BehaviorSubject, Subscription, debounceTime, switchMap } from "rxjs";
import { CreateOrderService } from "../create-order.service";
import { CreateOfferService } from "../../createOffer/create-offer.service";
import { MatTableDataSource } from "@angular/material/table";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../../material.module";
import { CoreModule } from "@angular/flex-layout";
import { MatDialog } from "@angular/material/dialog";
import { UpdateItemComponentDialog } from "../components/update-order-dailog.component";
import { FormControl, ReactiveFormsModule } from "@angular/forms";
import { RouterLink } from "@angular/router";

@Component({
  templateUrl: "./view-item.component.html",
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    RouterLink
  ]
})
export class ViewItemComponent implements OnInit, OnDestroy, AfterViewInit {
  private subs = new Subscription();
  private getAllEntitiesDataSetChange$ = new BehaviorSubject(<
    GetItemEntitiesQueryVariables
    >{
      filter: {},
      sorting: [],
      // paging: { limit: 10, offset: 0 },
    });
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  public dataSource!: MatTableDataSource<any>;
  public searchItems = new FormControl(null);
  
  public displayedColumns: string[] = ['image', 'name', 'size', 'category', 'foodtype', 'price', 'offer', 'status', 'type', 'actions'];

  constructor(
    private _orderservice: CreateOrderService,
    private _dialog: MatDialog,

  ) { }

 
  ngOnInit(): void {
    let data: any[] = []
    this.subs.add(
      this.searchItems.valueChanges.subscribe((v: any) => {
        if (data.length === 0) {
          data = this.dataSource.data;
        }
        if (v) {
          this.dataSource.data = data.filter((item: any) => {
            const itemName = String(item.name).toLowerCase().replace(/\s/g, '');
            const search = String(v).toLowerCase().replace(/\s/g, '');
            return itemName.includes(search);
          });
        } else {
          // If search criteria is empty, restore originalData
          this.dataSource.data = data;
        }
      })
    );
  }

  getAllItems() {
    this.subs.add(
      this.getAllEntitiesDataSetChange$
        .pipe(
          debounceTime(500),
          switchMap((variables) => this._orderservice.findItems(variables))
        )
        .subscribe(({ data }) => {
          if (data?.itemEntities) {
            this.dataSource = new MatTableDataSource<any>(data?.itemEntities);
            this.dataSource.paginator = this.paginator;

          }
        })
    );
  }
  ngAfterViewInit(): void {
    this.getAllItems();
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
          this.getAllItems()
        }, 1000);
      }
    });
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}