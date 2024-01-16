import { AfterViewInit, Component, OnDestroy, ViewChild } from "@angular/core";
import { CreateOfferService } from "../create-offer.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatPaginator } from "@angular/material/paginator";
import { BehaviorSubject, Subscription, debounceTime, switchMap } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { GetAlloffersQueryVariables, UpdateOneOfferMutationVariables } from "apps/arabic-mandi/src/generate-types";
import { CommonService } from "../../adminCommonsService.service";
import { Router } from "@angular/router";

@Component({
  selector: 'offer-view',
  templateUrl: './offer-view.component.html',
})
export class OfferViewComponent implements AfterViewInit, OnDestroy {
  private dataSetChange$ = new BehaviorSubject(<
    GetAlloffersQueryVariables
    >{
      filter: {},
      sorting: [],
      // paging: { limit: 10, offset: 0 },
    });
  public checked: boolean = false;
  public dataSource!: MatTableDataSource<any>;
  public selectedItems!: any[];
  public offerData: any[] = [];
  public displayedColumns: string[] = ['status', 'offerName', 'listOfItems', "price", 'totalCostAfterDiscount', 'actions'];

  private subs = new Subscription();

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(

    private _snackbar: MatSnackBar,
    private offerService: CreateOfferService,
    private _router: Router,
    private _commonService: CommonService,
  ) { }

  onStatusChange(event: any, element: any) {

    if (event.checked) {

      const data: UpdateOneOfferMutationVariables = {
        input: {
          id: element.id,
          update: {
            updatedby: {
              id: element.updatedby.id
            },
            status: true,
          }
        }
      }
      this.offerService.updateOneOffer(data).subscribe(status => {
        this._snackbar.open("Item Is Active Now")
      })
      // Trigger your method or perform any other action
    } else {
      const data: UpdateOneOfferMutationVariables = {
        input: {
          id: element.id,
          update: {
            updatedby: {
              id: element.updatedby.id
            },
            status: false,
          }
        }
      }
      this.offerService.updateOneOffer(data).subscribe(status => {
        this._snackbar.open("Item Is Not Active")
      })
    }
  }

  ngAfterViewInit(): void {
    this.initData();
  }

  initData() {
    this.subs.add(
      this.dataSetChange$
        .pipe(
          debounceTime(500),
          switchMap((variables) => this.offerService.GetAllOffers(variables))
        )
        .subscribe(({ data }) => {
          if (data?.offers) {
            this.dataSource = new MatTableDataSource<any>(data?.offers);
            this.dataSource.paginator = this.paginator;
          }
        })

    );

  }

  UpdateHandlerTable(element: any) {
    this._commonService.setData(element);
    // Navigate to the update page
    this._router.navigate(["admin/offer/update_item"]);
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
