import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CreateCategoryComponentDialog } from '../components/create-category-dialog.component';
import {
  MAT_DIALOG_DATA,
  MatDialog,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateOrderService } from '../create-order.service';
import {
  CreateItemInput,
  FoodCategoryInput,
  GetFoodCategoriesQuery,
  GetFoodCategoriesQueryVariables,
  UserInput,
} from 'apps/arabic-mandi/src/generate-types';
import {
  BehaviorSubject,
  Subscriber,
  Subscription,
  debounce,
  debounceTime,
  map,
  switchMap,
} from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
interface MenuItem {
  category: string;
  gst: null | string;
  img: null | string;
  name: string;
  price: string;
}
@Component({
  selector: 'food-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class CreateOrderComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('stepper') stepper!: MatStepper;
  private subs = new Subscription();
  private ItemId!: number;
  private draftSave!: CreateItemInput[];
  private nextId: number = 1;
  private categoryItem: any;
  private dataSetChange$ = new BehaviorSubject(<
    GetFoodCategoriesQueryVariables
  >{
    filter: {},
    sorting: [],
    // paging: { limit: 10, offset: 0 },
  });
  private selectedCategoryId: number | null = null;

  public isLoading = false;
  public form!: FormGroup;
  public isHorizontal = false;
  public draftItems: any[] = [];
  public displayedColumns: string[] = [
    'category',
    'name',
    'price',
    'type',
    'actions',
  ];
  public dataSource!: any;
  public updateStatus!: boolean;
  public submitStatus = true;
  public slideValue = false; // Default to Non-Veg
  /* for Food category data */
  public dataSet!: GetFoodCategoriesQuery['foodCategories'];

  constructor(
    private readonly _fb: FormBuilder,
    private _dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private _snackBar: MatSnackBar,
    private _createService: CreateOrderService
  ) {}

  firstCategory = this._fb.group({
    InitialCategory: ['', Validators.required],
  });
  firstFormGroup = this._fb.group({
    name: ['', Validators.required],
  });
  secondFormGroup = this._fb.group({
    price: ['', Validators.required],
    img: [null],
    gst: [''],
  });
  ngOnInit(): void {
    this.updateStepperMode();
    this.subscribeCategoryChanges();
  }
  ngOnChanges(changes: SimpleChanges): void {}
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateStepperMode();
  }
  /* getting data from databse list of category items */
  subscribeCategoryChanges() {
    this.subs.add(
      this.dataSetChange$
        .pipe(
          debounceTime(500),
          switchMap((variables) => this._createService.find(variables))
        )
        .subscribe(({ data }) => {
          this.isLoading = false;
          if (data?.foodCategories) {
            this.dataSet = data.foodCategories;
          }
        })
    );
  }
  /* to set the type of food  */
  onSlideToggleChange(event: MatSlideToggleChange) {
    this.slideValue = event.checked;
  }

  /* To fitch the form to save in the static array */
  onSubmitHandler() {
    if (
      this.firstFormGroup.valid &&
      this.secondFormGroup.valid &&
      this.firstCategory.valid
    ) {
      const combinedData = {
        id: this.nextId++,
        type: this.slideValue,
        cId: this.selectedCategoryId,
        ...this.firstCategory.value,
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value,
      };
      // console.log(combinedData);
      const existingItemIndex = this.draftItems.findIndex(
        (item) => item.id === combinedData.id
      );

      if (existingItemIndex !== -1) {
        // Update existing item
        this.draftItems[existingItemIndex] = combinedData;
        this._snackBar.open('Draft item has been Updated');
      } else {
        this.draftItems.push(combinedData);
        this._snackBar.open('New Draft item has been added');
      }
      this.dataSource = [...this.draftItems];
      console.log(this.dataSource);
      setTimeout(() => {
        this.resetFormData();
      }, 2000);
      this.stepper.reset();
    } else {
      if (this.firstCategory.get('InitialCategory')?.invalid) {
        this.firstCategory.get('InitialCategory')?.markAsTouched();
      }
    }
  }
  /* To add new categery  */
  createCategoryHandlerDailog() {
    const dialogRef = this._dialog.open(CreateCategoryComponentDialog, {
      data: { canCreate: true },
    });
    dialogRef.afterClosed().subscribe(() => {
      // this.subscribeCategoryChanges();
      // this.ngOnInit();
      this.cdr.detectChanges();
      // console.log(this.dataSet);
    });
  }
  /* To fitch the category to first category form */
  onSelectCategory(categoryId: any) {
    this.selectedCategoryId = categoryId?.id;
    this.categoryItem = categoryId?.name;
    // console.log(this.firstFormGroup.value);
  }
  /* delete static data based on meniitem data */
  onDeleteHandler(data: MenuItem) {
    const index = this.draftItems.indexOf(data);
    if (index !== -1) {
      this.draftItems.splice(index, 1);
      if (this.draftItems.length === 0) {
        // If there is no data left, close the dialog
        this.stepper.reset();
        this.resetFormData();
        this.updateStatus = false;
        this.submitStatus = true;
      } else {
        this.updateStatus = false;
        this.submitStatus = true;
        this.dataSource = [...this.draftItems];
        this.cdr.detectChanges();
        this.dataSource = this.draftItems;
      }
    }
  }
  /* set form with perticular static data inside the table to update the data  */
  onSetFormUpdateHandler(data: any) {
    // console.log(data)
    this.resetFormData();
    this.updateStatus = true;
    this.submitStatus = false;
    if (data) {
      this.ItemId = data.id;
      this.firstFormGroup.setValue({
        name: data.name,
      });
      this.firstCategory.setValue({
        InitialCategory: data.InitialCategory,
      });
      this.secondFormGroup.setValue({
        price: data.price,
        img: data.img,
        gst: data.gst,
      });
    }
  }
  /* Update handler  which is responce to handile the data in static way */
  onItemUpdateHandler() {
    if (
      this.firstFormGroup.valid &&
      this.secondFormGroup.valid &&
      this.firstCategory.valid
    ) {
      const combinedData = {
        id: this.ItemId,
        type: this.slideValue,
        ...this.firstCategory.value,
        ...this.firstFormGroup.value,
        ...this.secondFormGroup.value,
      };
      const existingItemIndex = this.draftItems.findIndex(
        (item) => item.id === combinedData.id
      );
      if (existingItemIndex !== -1) {
        // Update existing item
        this.draftItems[existingItemIndex] = combinedData;
        this.dataSource = this.draftItems;
        this._snackBar.open('Item has been Updated');
        this.resetFormData();
        this.stepper.reset();
        this.updateStatus = false;
        this.submitStatus = true;
      }
    }
  }
  /* To Save the all draft data into database using graphql */
  onDraftHandler() {
    const CurrentUser: UserInput | null = this._createService.getCurrentUser();
    if (CurrentUser !== null) {
      this.draftSave = this.draftItems.map((draftItem: any) => {
        let image;
        if (draftItem.img !== null) {
          image = draftItem.img;
        }
        const image_ = btoa(image);
        const foodCategory: FoodCategoryInput = {
          id: draftItem.cId,
        };
        const createItemInput: CreateItemInput = {
          category: foodCategory,
          image_data: image_,
          name: draftItem.name,
          price: draftItem.price,
          createdby: CurrentUser,
          type: this.slideValue,
        };
        return createItemInput;
      });
      this._createService.updateManyItems(this.draftSave);
      this.dataSource = [];
      this.draftItems = [];
    } else {
      // impliment the user is Notavilable
    }
  }

  /* Reset the all form data */
  private resetFormData() {
    this.firstCategory.setValue({ InitialCategory: this.categoryItem });
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
  }
  /* convert the stepnner into horizenatal and vertical ways based on divice width*/
  private updateStepperMode(): void {
    // Change the condition based on your desired screen width
    this.isHorizontal = window.innerWidth > 768;
  }

  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];
    const maxSizeMB = 2;
    if (selectedFile) {
      // Check file size
      const fileSizeMB = selectedFile.size / (1024 * 1024);
      if (fileSizeMB > maxSizeMB) {
        this.secondFormGroup.get('img')?.setValue(null);
        // Reset the control and show an error message
        alert(`File size exceeds the limit of ${maxSizeMB} MB`);
      } else {
        // Update the control value
        this.secondFormGroup.get('img')?.setValue(selectedFile);
      }
    }
  }

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
