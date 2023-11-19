import {
  ChangeDetectorRef,
  Component,
  HostListener,
  Inject,
  OnInit,
  ViewChild,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatStepper } from '@angular/material/stepper';
import { DraftViewComponent } from '../components/draft-view.component';
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
  switchMap,
} from 'rxjs';
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
})
export class CreateOrderComponent implements OnInit {
  @ViewChild('stepper') stepper!: MatStepper;
  public isLoading = false;
  public form!: FormGroup;
  public isHorizontal = false;
  public draftItems: any[] = [];
  public displayedColumns: string[] = ['category', 'name', 'price', 'actions'];
  public category = ['Staters', 'Biriyani', 'MockTails'];
  public dataSource!: any;
  public visible = false;
  public updateStatus!: boolean;
  public submitStatus = true;
  private ItemId!: number;
  private draftSave!: CreateItemInput[];
  nextId: number = 1;
  private categoryItem: any;
  public dataSet: GetFoodCategoriesQuery['foodCategories'] = {
    edges: [],
    pageInfo: {
      __typename: undefined,
      hasNextPage: undefined,
      endCursor: undefined,
    },
  };
  public dataSetChange$ = new BehaviorSubject(<GetFoodCategoriesQueryVariables>{
    filter: {},
    // paging: { limit: 10, offset: 0 },
  });
  private subs = new Subscription();
  private selectedCategoryId: number | null = null;

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
    this.SubscribeCategoryChanges();
  }
  @HostListener('window:resize', ['$event'])
  onResize(event: Event): void {
    this.updateStepperMode();
  }

  SubscribeCategoryChanges() {
    this.subs.add(
      this.dataSetChange$
        .asObservable()
        .pipe(debounceTime(500))
        .pipe(switchMap((variables) => this._createService.find(variables)))
        .subscribe(({ data }) => {
          this.isLoading = false;
          if (data?.foodCategories.edges) {
            this.dataSet = data.foodCategories;
          }
        })
    );
  }

  private updateStepperMode(): void {
    // Change the condition based on your desired screen width
    this.isHorizontal = window.innerWidth > 768;
  }
  onSubmitHandler() {
    if (
      this.firstFormGroup.valid &&
      this.secondFormGroup.valid &&
      this.firstCategory.valid
    ) {
      const combinedData = {
        id: this.nextId++,
        cId: this.selectedCategoryId,
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
        this.onNewCategory();
        this.draftItems.push(combinedData);
        this._snackBar.open('New Draft item has been added');
      }
      this.dataSource = [...this.draftItems];
      // this.resetFormData();
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
  onSelectCategory(categoryId: any) {
    this.selectedCategoryId = categoryId?.id;
    this.categoryItem = categoryId?.name;
    // console.log(this.firstFormGroup.value);
  }

  onDeleteHandler(data: MenuItem) {
    const index = this.draftItems.indexOf(data);
    if (index !== -1) {
      this.draftItems.splice(index, 1);
      if (this.draftItems.length === 0) {
        // If there is no data left, close the dialog
        this.stepper.reset();
        this.resetFormData();
        this.visible = true;
      } else {
        this.visible = false;
        this.dataSource = [...this.draftItems];
        this.cdr.detectChanges();
        this.dataSource = this.draftItems;
      }
    }
  }

  onSetFormUpdateHandler(data: any) {
    this.resetFormData();
    this.updateStatus = true;
    this.submitStatus = false;
    if (data) {
      this.ItemId = data.id;
      this.firstFormGroup.setValue({
        name: data.name,
      });
      this.firstCategory.setValue({
        InitialCategory: data?.category,
      });
      this.secondFormGroup.setValue({
        price: data.price,
        img: data.img,
        gst: data.gst,
      });
    }
  }

  onItemUpdateHandler() {
    if (
      this.firstFormGroup.valid &&
      this.secondFormGroup.valid &&
      this.firstCategory.valid
    ) {
      const combinedData = {
        id: this.ItemId,
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
        };
        return createItemInput;
      });
      console.log(this.draftSave);
      this._createService.updateManyItems(this.draftSave);
      this.dataSource = [];
      this.draftItems = [];
    } else {
      // impliment the user is Notavilable
    }
  }

  private onNewCategory() {
    this.category.forEach((e: any) => {
      let newCategory: string | null | undefined =
        this.firstFormGroup.get('category')?.value;

      if (
        typeof newCategory === 'string' &&
        !this.category.includes(newCategory)
      ) {
        this.category.push(newCategory);
        this.category = this.category;
        setTimeout(() => {
          this._snackBar.open('New category Has been added');
        }, 2000);
      }
    });
  }
  private resetFormData() {
    this.firstCategory.setValue({ InitialCategory: this.categoryItem });
    this.firstFormGroup.reset();
    this.secondFormGroup.reset();
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
}
