import { AfterViewInit, Component, OnInit, ViewChild } from "@angular/core";
import { CreateOfferService } from "../create-offer.service";
import { MatSnackBar } from "@angular/material/snack-bar";
import { MatPaginator } from "@angular/material/paginator";
import { BehaviorSubject, Subscription, debounceTime, switchMap } from "rxjs";
import { MatTableDataSource } from "@angular/material/table";
import { GetAlloffersQueryVariables } from "apps/arabic-mandi/src/generate-types";

@Component({
  selector: 'offer-view',
  templateUrl: './offer-view.component.html',
})
export class OfferViewComponent implements OnInit, AfterViewInit {
  private dataSetChange$ = new BehaviorSubject(<
    GetAlloffersQueryVariables
    >{
      filter: {},
      sorting: [],
      // paging: { limit: 10, offset: 0 },
    });
  private dataSourceItems!: any;
  public checked: boolean = false;
  public dataSource!: MatTableDataSource<any>;
  public selectedItems!: any[];
  public offerData: any[] = [];
  public displayedColumns: string[] = ['offerName', 'listOfItems', "price", 'specialDiscount', 'totalCostAfterDiscount', 'delete'];

  private subs = new Subscription();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(
    private _snackbar: MatSnackBar,
    private offerService: CreateOfferService) { }

  ngAfterViewInit(): void {
  }
  ngOnInit(): void {

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
}
