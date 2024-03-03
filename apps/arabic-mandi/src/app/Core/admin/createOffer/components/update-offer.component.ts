import { AfterViewInit, Component, Inject } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from "@angular/material/dialog";
import { AdminCommonService } from "../../adminCommonsService.service";
import { OfferForm } from "../pages/create-offer.component";
import { MatSnackBar } from "@angular/material/snack-bar";
import { OfferItemComponentDialog } from "./combo-offer-dailog.component";
import { Router } from "@angular/router";
import { CreateOfferService } from "../create-offer.service";
import { BehaviorSubject } from "rxjs";
import { Subscription, debounceTime, switchMap } from "rxjs";
import { GetItemEntitiesQueryVariables, OfferItemInput, UpdateOneOfferInput, UpdateOneOfferMutationVariables } from "../../generate-admin-types";


@Component({
  selector: 'offer-update',
  templateUrl: './update-offer.component.html',
  styles: [`
  .formStyle {
    display: grid;
    justify-items: unset;
    padding-top: 10px;
  }

  .outerDivStyle {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  @media (max-width: 480px) {
    .formStyle {
        display: grid;
        justify-items: unset;
    }

    .outerDivStyle {
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }


  @media (min-width: 480px) and (max-width: 1050px) {
    .formStyle {
        display: grid;
        justify-items: unset;
        padding-left: 50px;
    }

    .outerDivStyle {
        display: flex;
        justify-content: center;
        align-items: center;
    }
  }
     `]
})
export class UpdateOfferDailogComponent implements AfterViewInit {
  constructor(
    private readonly _fb: FormBuilder,
    private commonService: AdminCommonService,
    private _dialog: MatDialog,
    private _router: Router,
    private _snackbar: MatSnackBar,
    private _createService: CreateOfferService
  ) {
    this.initializeForm();
  }
  offerForm!: FormGroup;
  offerModel!: OfferForm;

  private dataSetChange$ = new BehaviorSubject(<
    GetItemEntitiesQueryVariables
    >{
      filter: {},
      sorting: [],
      //   paging: { limit: 10, offset: 0 },
    });

  private subs = new Subscription();
  public selectedItems!: any[];
  public offerData: any[] = [];
  public itemList: any[] = [];
  private id!: any;

  initializeForm() {
    this.offerModel = new OfferForm();
    this.offerForm = this._fb.group({
      offerName: [this.offerModel.offerName, Validators.required],
      listOfItems: [this.offerModel.listOfItems, Validators.required],
      price: [this.offerModel.price, [Validators.required, Validators.min(0)]],
      //   specialDiscount: [0, [Validators.required, Validators.min(0)]],
      specialDiscount: [0, [Validators.required, Validators.min(0)]],
      totalCostAfterDiscount: [this.offerModel.totalCostAfterDiscount, Validators.min(0)],
    })
    this.offerForm.get('price')?.valueChanges.subscribe(() => this.calculateTotalCost());
    this.offerForm.get('specialDiscount')?.valueChanges.subscribe(() => this.calculateTotalCost());
    this.initializeData()
  }
  private initializeData() {
    this.commonService.data$.subscribe(
      d => {
        if (d === null) {
          this._router.navigate(['admin/dashboard/offer/View_Offers'])
        } else {
          this.subs.add(
            this.dataSetChange$
              .pipe(
                debounceTime(500),
                switchMap((variables) => this._createService.find(variables))
              )
              .subscribe(({ data }) => {
                if (data?.itemEntities) {
                  this.itemList = data?.itemEntities

                }
              })
          );
          this.selectedItems = d.items
          this.id = d.id
          this.offerForm.get('listOfItems')?.setValue(d.items);
          this.offerForm.get('offerName')?.setValue(d.name);
          this.offerForm.get('price')?.setValue(d.price);
          this.offerForm.get('specialDiscount')?.setValue(d.discount);
          this.offerForm.get('totalCostAfterDiscount')?.setValue(d.totalPrice);

        }
      }
    )

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

  ItemOfferDailogHandlar() {
    // Get the selected items from the offerForm
    const selectedItems = this.offerForm.get('listOfItems')?.value;

    if (selectedItems && selectedItems.length > 0) {
      const dataWithSelected = this.itemList.map((item: any) => ({ ...item, quantity: 1, selected: false }));
      const mainData = dataWithSelected.filter(
        (item: any) => !selectedItems.some((selectedItem: { id: any; }) => parseInt(selectedItem.id) === item.id)
      );
      // Create a new array with the updated quantity property
      const updatedMainData = mainData.concat(selectedItems.map((item: any) => ({ ...item, quantity: item.quantity }))).reverse();

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

  onSubmit() {
    if (this.offerForm.valid) {
      const currentuser = this.commonService.getCurrentUser();
      const offer = this.offerForm.value;

      // Assuming offer.listOfItems is an array
      const removedTypeNameItems = offer.listOfItems.map((item: any) => this.removeTypename(item));
      const items: OfferItemInput[] = removedTypeNameItems.map((offer: any) => {
        const obj: OfferItemInput = {
          id: parseInt(offer.id),
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
      const singleOffer: UpdateOneOfferInput = {
        id: this.id,
        update: {
          name: offer.offerName,
          updatedby: currentuser,
          discount: offer.specialDiscount,
          price: offer.price,
          totalPrice: offer.totalCostAfterDiscount,
          status: true,
          items: items,
        },
      };

      const data: UpdateOneOfferMutationVariables = {
        input: singleOffer
      }
      this._createService.updateOneOffer(data).subscribe(status => {
        if (status) {
          setTimeout(() => {
            this._router.navigateByUrl('admin/dashboard/offer/View_Offers').then(() => {
              // Reload the page after navigation
              location.reload();
            });
          }, 1000);
        }
      });
    }
  }

  ngAfterViewInit(): void {
    // this.initializeData();
  }
}
