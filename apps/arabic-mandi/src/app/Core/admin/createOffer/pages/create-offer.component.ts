import { AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CreateOfferService } from "../create-offer.service";
import { BehaviorSubject, Subscription, debounceTime, switchMap } from "rxjs";
import { GetItemEntitiesQueryVariables } from "apps/arabic-mandi/src/generate-types";
import { MatDialog } from "@angular/material/dialog";
import { OfferItemComponentDialog } from "../components/combo-offer-dailog.component";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { ChangeDetectorRef } from '@angular/core';
export class OfferForm {
  offerName: string;
  listOfItems: any[];
  price: number;
  specialDiscount: number;
  totalCostAfterDiscount: number;

  constructor() {
    this.offerName = '';
    this.listOfItems = [];
    this.price = 0;
    this.specialDiscount = 0;
    this.totalCostAfterDiscount = 0;
  }
}
@Component({
  selector: 'food-create-offer',
  templateUrl: './create-offer.component.html',
  styleUrls: ['./create-offer.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CreateOfferComponent implements OnInit,AfterViewInit {

  offerForm!: FormGroup;
  offerModel!: OfferForm;
  private dataSourceItems!: any;
  public checked: boolean = false;
  public dataSource!: MatTableDataSource<any>;
  public selectedItems!: any;
  public offerData: any[] = [];
  public displayedColumns: string[] = ['offerName', 'listOfItems', "price", 'specialDiscount', 'totalCostAfterDiscount', 'delete'];
  private dataSetChange$ = new BehaviorSubject(<
    GetItemEntitiesQueryVariables
    >{
      filter: {},
      sorting: [],
      //   paging: { limit: 10, offset: 0 },
    });
  private subs = new Subscription();
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  constructor(private formBuilder: FormBuilder,
    private _dialog: MatDialog,
    private _snackbar: MatSnackBar,
    private cdr: ChangeDetectorRef,
    private offerService: CreateOfferService) { }
  ngAfterViewInit(): void {
    this.updateTable();
  }

  ngOnInit() {
    this.initializeForm();
    this.subscribeCategoryChanges();
  }
  subscribeCategoryChanges() {
    this.subs.add(
      this.dataSetChange$
        .pipe(
          debounceTime(500),
          switchMap((variables) => this.offerService.find(variables))
        )
        .subscribe(({ data }) => {

          if (data?.itemEntities) {
            this.dataSourceItems = data
          }
        })
    );
  }

  ItemOfferDailogHandlar() {
    const selectedItems = this.offerForm.get('listOfItems')?.value
      this.selectedItems = selectedItems;
    if(this.selectedItems.length){
      const selectedItems = this.offerForm.get('listOfItems')?.value
      this.selectedItems = selectedItems;
      const data = this.dataSourceItems
      const maindata = data?.itemEntities.filter((item: any) => !selectedItems.some((selectedItem: { id: any; }) => selectedItem.id === item.id));
      const updatedMaindata = maindata.concat(selectedItems).reverse()
      const dialogRef = this._dialog.open(OfferItemComponentDialog, {
        data: updatedMaindata,
      });
      dialogRef.afterClosed().subscribe(
        data => {
          this.offerForm.get('listOfItems')?.setValue(data);
          const selectedItems = this.offerForm.get('listOfItems')?.value
          this.selectedItems = selectedItems;
        }
      )
    } else {
      console.log("data")
      const dialogRef = this._dialog.open(OfferItemComponentDialog, {
        data: this.dataSourceItems,
      });
      dialogRef.afterClosed().subscribe(
        data => {
          this.offerForm.get('listOfItems')?.setValue(data);
          const selectedItems = this.offerForm.get('listOfItems')?.value
          this.selectedItems = selectedItems;
        }
      )

  }
  }
  onDeleteClick(row: any): void {
    const config = new MatSnackBarConfig();
    config.horizontalPosition = 'center';
    config.verticalPosition = 'top';

    const snackbarRef = this._snackbar.open('Are you sure you want to delete this item?', 'Yes', config);

    // Show "Undo" option with a duration
    const undoSnackbarRef = this._snackbar.open('Item deleted', 'Undo', { duration: 5000 });

    snackbarRef.afterDismissed().subscribe((dismissedAction) => {
      if (dismissedAction.dismissedByAction === true) {
        // If dismissed by "Yes", show "Undo" snackbar
        undoSnackbarRef.dismiss();
      }
    });

    undoSnackbarRef.afterDismissed().subscribe((dismissedAction) => {
      if (dismissedAction.dismissedByAction === true) {
        // If dismissed by "Undo", show message
        this._snackbar.open('Item is not removed', 'OK', config);
      } else {
        // If not dismissed by "Undo", proceed with delete action
        const indexInOfferData = this.offerData.findIndex(item => item === row);
        if (indexInOfferData !== -1) {
          this.offerData.splice(indexInOfferData, 1);
        }
        this.updateTable();
      }
    });
  }

  private updateTable(): void {
    // Update the table within Angular zone

      this.dataSource = new MatTableDataSource(this.offerData);
      this.dataSource.paginator = this.paginator;
      // Explicitly mark for change detection
      this.cdr.detectChanges();

  }


  private initializeForm() {
    this.offerModel = new OfferForm();

    this.offerForm = this.formBuilder.group({
      offerName: [this.offerModel.offerName, Validators.required],
      listOfItems: [this.offerModel.listOfItems, Validators.required],
      price: [this.offerModel.price, [Validators.required, Validators.min(0)]],
      //   specialDiscount: [0, [Validators.required, Validators.min(0)]],
      specialDiscount: [0, [Validators.required, Validators.min(0)]],
      totalCostAfterDiscount: [this.offerModel.totalCostAfterDiscount, Validators.min(0)],
    })
    this.offerForm.get('price')?.valueChanges.subscribe(() => this.calculateTotalCost());
    this.offerForm.get('specialDiscount')?.valueChanges.subscribe(() => this.calculateTotalCost());
  }

  private calculateTotalCost() {
    const price = this.offerForm.get('price')?.value;
    const specialDiscount = this.offerForm.get('specialDiscount')?.value;

    // Calculate the discount based on percentage
    const discount = (specialDiscount / 100) * price;

    // Calculate the total cost after discount
    const totalCostAfterDiscount = price - discount;

    // If the special discount is greater than or equal to the price, set totalCostAfterDiscount to the total value
    if (specialDiscount >= price) {
      this.offerForm.get('totalCostAfterDiscount')?.setValue(price);
    } else {
      // Set the calculated value to the totalCostAfterDiscount control
      this.offerForm.get('totalCostAfterDiscount')?.setValue(totalCostAfterDiscount);
    }
  }


  onSubmit() {
    if (this.offerForm.valid) {
      this.offerData.push(this.offerForm.value);
      this.updateTable();
      this.selectedItems = [];
      this.offerForm.reset();
    } else {
      this._snackbar.open("Select Items ", "close")
    }
  }


}
