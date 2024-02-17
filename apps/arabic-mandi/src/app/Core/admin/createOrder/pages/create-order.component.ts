import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  HostListener,
  OnDestroy,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { CreateCategoryComponentDialog } from '../../category/components/create-category-dialog.component';
import { MatDialog, } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CreateOrderService } from '../create-order.service';
import {
  CreateItemInput,
  FoodCategoryInput,
  FoodSizeInput,
  FoodSizesQuery,
  FoodSizesQueryVariables,
  FoodTypeInput,
  FoodTypesQuery,
  FoodTypesQueryVariables,
  GetFoodCategoriesQuery,
  GetFoodCategoriesQueryVariables,
  UserInput,
} from 'apps/arabic-mandi/src/generate-types';
import {
  BehaviorSubject,
  Subscription,
  debounceTime,
  switchMap,
} from 'rxjs';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';
import { Router } from '@angular/router';
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
export class CreateOrderComponent implements OnInit, OnDestroy {

  @ViewChild('stepper') stepper!: MatStepper;
  private subs = new Subscription();
  private ItemId!: number;
  private draftSave!: CreateItemInput[];
  private nextId: number = 1;
  private categoryItem: any;
  private initialFoodtype: any;
  private dataSetChange$ = new BehaviorSubject(<
    GetFoodCategoriesQueryVariables
    >{
      filter: {},
      sorting: [],
      // paging: { limit: 10, offset: 0 },
    });
  private FooddataSetChange$ = new BehaviorSubject(<
    FoodTypesQueryVariables
    >{
      filter: {},
      sorting: [],
      // paging: { limit: 10, offset: 0 },
    });
    private foodSizedataSetChange$ = new BehaviorSubject(<
      FoodSizesQueryVariables
      >{
          filter: {},
          sorting: [],
          // paging: { limit: 10, offset: 0 },
      });
  private selectedCategoryId: number | null = null;
  private selectedFoodtypeId: number | null = null;
  private selectedFoodSizeId: number | null = null;

  public foodSize: any[] = ['Single', 'Half', 'Full']
  public isLoading = true;
  public form!: FormGroup;
  public isHorizontal = false;
  public draftItems: any[] = [];
  public displayedColumns: string[] = [
    'category',
    'image',
    'name',
    'price',
    'type',
    'foodtype',
    'size',
    'actions',
  ];
  public imagePreview: string | null = null;
  public dataSource!: any;
  public updateStatus!: boolean;
  public submitStatus = true;
  public slideValue = false; // Default to Non-Veg
  /* for Food category data */
  public dataSet: GetFoodCategoriesQuery['foodCategories'] = [];
  public FoodtypeSet: FoodTypesQuery['foodTypes'] = [];
  public foodSizeSet: FoodSizesQuery['foodSizes'] = []

  firstCategory = this._fb.group({
    InitialCategory: ['', Validators.required],
    initialFoodtype: ['', Validators.required]
  });
  firstFormGroup = this._fb.group({
    name: ['', Validators.required],
    size: [0]
  });
  secondFormGroup = this._fb.group({
    price: ['', Validators.required],
    img: [''],
    gst: [''],
  });
  constructor(
    private readonly _fb: FormBuilder,
    private _dialog: MatDialog,
    private cdr: ChangeDetectorRef,
    private _snackBar: MatSnackBar,
    private _createService: CreateOrderService,
    private _router: Router
  ) { }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateStepperMode();
  }

  ngOnInit(): void {
    this.updateStepperMode();
    this.subscribeCategoryChanges();
  }

  // server data updating calling funtions 
  // -----------------------------------------------------------------------------------

  /* getting data from databse list of category items  and foodtypes*/
  subscribeCategoryChanges() {
    this.subs.add(
      this.dataSetChange$
        .pipe(
          debounceTime(500),
          switchMap((variables) => this._createService.find(variables))
        )
        .subscribe(({ data }) => {
          if (data?.foodCategories) {
            this.dataSet = data.foodCategories;
            setTimeout(() => {
              this.isLoading = false
            }, 2000)
          }
        })
    );
    this.subs.add(
      this.FooddataSetChange$
        .pipe(
          debounceTime(500),
          switchMap((variables) => this._createService.findFoodType(variables))
        )
        .subscribe(({ data }) => {
          if (data?.foodTypes) {
            this.FoodtypeSet = data?.foodTypes;
          }
        }, ((error) => {
          console.error(error)
        }))
    )
    this.subs.add(
      this.foodSizedataSetChange$
        .pipe(
          debounceTime(500),
          switchMap((variables) => this._createService.findFoodSize(variables))
        )
        .subscribe(({ data }) => {
          if (data?.foodSizes) {
            this.foodSizeSet = data?.foodSizes;
          }
        }, ((error) => {
          console.error(error)
        }))
    )

  }

  /* To add new categery  and set that category in form field as default */
  createCategoryHandlerDailog() {
    const dialogRef = this._dialog.open(CreateCategoryComponentDialog, {
      data: { canCreate: true },
    });

    dialogRef.afterClosed().subscribe((result: any) => {
      if (result && result.createOneFoodCategory) {
        const newData = Array.from(this.dataSet).concat({
          __typename: result.createOneFoodCategory.__typename,
          id: result.createOneFoodCategory.id,
          name: result.createOneFoodCategory.name,
          isActive: result.createOneFoodCategory.isActive
        });
        this.dataSet = newData;
        this.firstCategory.patchValue({
          InitialCategory: result.createOneFoodCategory.name,
        });
      }
    });

  }
  // under Implemenatation look after some time not in use

  /* To Save the all draft data into database using graphql */
  onDraftTableHandler() {
    const CurrentUser: UserInput | null = this._createService.getCurrentUser();
    if (CurrentUser !== null) {
      this.draftSave = this.draftItems.map((draftItem: any) => {
        let image;
        if (draftItem.img !== null) {
          image = draftItem.img;
        }
        const image_ = image;
        const foodCategory: FoodCategoryInput = {
          id: draftItem.cId,
        };
        const foodSize : FoodSizeInput = {
          id: draftItem.sId
        }

        const foodtype: FoodTypeInput = {
          id: draftItem.fId,
        }
        const createItemInput: CreateItemInput = {
          name: draftItem.name,
          price: draftItem.price,
          type: this.slideValue,
          foodsize: foodSize,
          image_data: image_,
          createdby: CurrentUser,
          category: foodCategory,
          foodtype: foodtype
        };
        return createItemInput;
      });
       this._createService.updateManyItems(this.draftSave);
      this.stepper.reset();
      this.dataSource = [];
      this.draftItems = [];
      location.reload();

    } else {
      // impliment the user is Notavilable
    }
  }

  // server code end

  // ------------------------------------------------------------------

  /* to set the type of food  like veg or nonveg*/
  onSlideToggleChange(event: MatSlideToggleChange) {
    this.slideValue = event.checked;
  }

  /* combining all forms data in combined data , that show represent in table  */
  onSaveToDraftHandler() {
    if (
      this.firstFormGroup.valid &&
      this.secondFormGroup.valid &&
      this.firstCategory.valid
    ) {
      const combinedData = {
        id: this.nextId++,
        type: this.slideValue,
        fId: this.selectedFoodtypeId,
        sId: this.selectedFoodSizeId,
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
        this._snackBar.open('Draft item has been Updated');
      } else {
        this.draftItems.push(combinedData);
        this._snackBar.open('New Draft item has been added');
      }
      this.dataSource = [...this.draftItems];
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

  /* set form with perticular static data inside the table to update the data  */
  onSetFormUpdateHandler(data: any) {
    this.resetFormData();
    this.updateStatus = true;
    this.submitStatus = false;
    if (data) {
      this.ItemId = data.id;
      this.firstFormGroup.setValue({
        name: data.name,
        size: data.size
      });
      this.firstCategory.setValue({
        InitialCategory: data.InitialCategory,
        initialFoodtype: data.initialFoodtype
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
        cId: this.selectedCategoryId,
        fId: this.selectedFoodtypeId,
        sId: this.selectedFoodSizeId,
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
  /* delete static data based on main item data */
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

  /* To fitch the foodtypes form */
  onSelectFoodtype(data: any) {
    this.selectedFoodtypeId = data?.id;
    this.initialFoodtype = data?.name;
  }

  // to fich 
  onSelectFoodsize(data: any) {
    this.selectedFoodSizeId = data?.id;
  }
  /* To fitch the category to first category form */
  onSelectCategory(data: any) {
    this.selectedCategoryId = data?.id;
    this.categoryItem = data?.name;
  }

  /* redusing dimenctions of the img and converting file data into 64byte storing in formcontrol */
  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];
    const maxSizeMB = 5;
    const targetWidth = 800;
    const targetHeight = 800;
    if (selectedFile) {
      // Check file size
      const fileSizeMB = selectedFile.size / (1024 * 1024);
      if (fileSizeMB > maxSizeMB) {
        this.secondFormGroup.get('img')?.setValue(null);
        // Reset the control and show an error message
        alert(`File size exceeds the limit of ${maxSizeMB} MB`);
      } else {
        const reader = new FileReader();
        reader.onload = (e) => {
          const img = new Image();
          img.onload = () => {
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d')!;
            canvas.width = targetWidth;
            canvas.height = targetHeight;
            ctx.drawImage(img, 0, 0, targetWidth, targetHeight);
            const resizedDataURL = canvas.toDataURL(selectedFile.type);
            // Update the control value with the Data URL
            this.imagePreview = resizedDataURL;
            this.secondFormGroup.get('img')?.setValue(resizedDataURL);
          };
          img.src = e.target!.result as string;
        };
        reader.readAsDataURL(selectedFile);
      }
    }
  }

  /* Reset the all form data */
  private resetFormData() {
    this.firstCategory.setValue({ InitialCategory: this.categoryItem, initialFoodtype: this.initialFoodtype });
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
  }
  /* convert the stepnner into horizenatal and vertical ways based on divice width*/
  private updateStepperMode(): void {
    // Change the condition based on your desired screen width
    this.isHorizontal = window.innerWidth > 768;
  }


  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
