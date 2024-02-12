import { AfterViewInit, ChangeDetectionStrategy, Component, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { CreateOfferService } from "../create-offer.service";
import { BehaviorSubject, Subscription, debounceTime, switchMap } from "rxjs";
import { GetItemEntitiesQueryVariables, CreateManyOffersInput, CreateOfferInput, OfferItemInput } from "apps/arabic-mandi/src/generate-types";
import { MatDialog } from "@angular/material/dialog";
import { OfferItemComponentDialog } from "../components/combo-offer-dailog.component";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";
import { MatTableDataSource } from "@angular/material/table";
import { MatPaginator } from "@angular/material/paginator";
import { ChangeDetectorRef } from '@angular/core';
import { CommonService } from "../../adminCommonsService.service";
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
export class CreateOfferComponent implements OnInit, AfterViewInit, OnDestroy {

  offerForm!: FormGroup;
  offerModel!: OfferForm;
  private dataSourceItems!: any;
  public checked: boolean = false;
  public dataSource!: MatTableDataSource<any>;
  public selectedItems!: any[];
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
    private commonService: CommonService,
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
    // Get the selected items from the offerForm
    const selectedItems = this.offerForm.get('listOfItems')?.value;

    if (selectedItems && selectedItems.length > 0) {
      // Map the dataSourceItems with an additional 'quantity' property
      const dataWithSelected = this.dataSourceItems.itemEntities.map((item: any) => ({ ...item, quantity: 1 }));

      // Filter out items that are already selected
      const mainData = dataWithSelected.filter(
        (item: any) => !selectedItems.some((selectedItem: { id: any; }) => selectedItem.id === item.id)
      );

      // Combine the mainData and selectedItems, reversing the order
      const updatedMainData = mainData.concat(selectedItems).reverse();

      // Open the dialog with the updated data
      const dialogRef = this._dialog.open(OfferItemComponentDialog, {
        data: updatedMainData,
      });

      // Subscribe to the dialog's afterClosed event
      dialogRef.afterClosed().subscribe((data: any[]) => {
        if (data) {
          // Update the offerForm and selectedItems with the returned data
          this.offerForm.get('listOfItems')?.setValue(data);
          this.selectedItems = data;
        }
      });
    } else {
      // Open the dialog with the original dataSourceItems when no items are selected
      const intldialogRef = this._dialog.open(OfferItemComponentDialog, {
        data: this.dataSourceItems,
      });

      // Subscribe to the dialog's afterClosed event
      intldialogRef.afterClosed().subscribe((data: any[]) => {
        if (data) {
          // Update the offerForm and selectedItems with the returned data
          this.offerForm.get('listOfItems')?.setValue(data);
          this.selectedItems = data;
        }
      });
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
    const totalCostAfterDiscount = Math.floor(price - discount);

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

  removeTypename(obj: any) {
    const newObj: any = {};
    for (const key in obj) {
      if (key !== '__typename') {
        newObj[key] = typeof obj[key] === 'object' ? this.removeTypename(obj[key]) : obj[key];
      }
    }
    return newObj;
  }

  /* complex One don't touch*/
  submitTableData() {
    const currentuser = this.commonService.getCurrentUser();

    if (this.offerData) {
      // Map the offerData to create an array of offers
      const data = this.offerData.map((offer: any) => {
        // Remove __typename from each item in listOfItems
        const removedTypeNameItems = offer.listOfItems.map((item: any) => this.removeTypename(item));
        const items: OfferItemInput[] = removedTypeNameItems.map((offer: any) => {
          const obj: OfferItemInput = {
            id: offer.id,
            name: offer.name,
            quantity: offer.quantity,
            selected: offer.selected,
            category: {
              id: offer.category.id,
              name: offer.category.name
            }
          }
          return obj;
        })

        // Create an individual offer
        const singleOffer: CreateOfferInput = {
          items: items,
          createdby: currentuser,
          name: offer.offerName,
          status: true,
          discount: offer.specialDiscount,
          price: offer.price,
          totalPrice: offer.totalCostAfterDiscount
        };

        return singleOffer;
      });

      // Prepare the input for the mutation
      const variablesdata: CreateManyOffersInput = {
        offers: data
      };

      // Call your mutation service with the prepared data
      this.offerService.AddAllOffers(variablesdata);
    }
  }
  ngOnDestroy(): void {
    this.offerData = []
  }
}
