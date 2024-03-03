import { AfterViewInit, Component, OnDestroy, ViewChild } from "@angular/core";
import { CreateOfferService } from "../create-offer.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatPaginator, MatPaginatorModule } from "@angular/material/paginator";
import { BehaviorSubject, Subscription, debounceTime, switchMap } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { AdminCommonService } from "../../adminCommonsService.service";
import { Router, RouterLink } from "@angular/router";
import { MatDialog } from "@angular/material/dialog";
import { OfferDetailsDailogComponent } from "../components/offer-details-dailog.component";
import { CommonModule } from "@angular/common";
import { MaterialModule } from "../../../material.module";
import { CoreModule } from "@angular/flex-layout";
import { ReactiveFormsModule } from "@angular/forms";
import { GetAlloffersQueryVariables, UpdateOneOfferMutationVariables } from "../../generate-admin-types";

@Component({
  selector: 'offer-view',
  templateUrl: './offer-view.component.html',
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
export class OfferViewComponent implements AfterViewInit, OnDestroy {
  private dataSetChange$ = new BehaviorSubject(<
    GetAlloffersQueryVariables
    >{
      filter: {},
      sorting: [],
      //  paging: { limit: 10, offset: 0 },
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
    private _dialog: MatDialog,
    private _commonService: AdminCommonService,
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
        this._snackbar.open("Offer Is Active Now")
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
        this._snackbar.open("Offer Is Not Active")
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
    this._router.navigate(["admin/dashboard/offer/update_item"]);
  }

  offerItemViewHandler(element: any){
   this._dialog.open(OfferDetailsDailogComponent,{
    data: element.items
   })
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
