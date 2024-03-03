import {
    Component,
    Inject,
    OnDestroy,
    OnInit
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { BehaviorSubject, Subscription, debounceTime, switchMap } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import {
    GetFoodCategoriesQueryVariables,
    UpdateOneItemEntityInput,
    FoodCategoryInput,
    UserInput,
    FoodTypesQueryVariables,
    FoodTypesQuery,
    FoodTypeInput,
    FoodSizesQueryVariables,
    FoodSizesQuery,
    FoodSizeInput
} from '../../generate-admin-types';
import { CreateOrderService } from '../create-order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSlideToggleChange } from '@angular/material/slide-toggle';

@Component({
    selector: 'update-dailog-view',
    templateUrl: './update-order-dailog.component.html',
    styles: [`
.red-dot {
color: red
}
.green-dot {
color: green
}
`]
})
export class UpdateItemComponentDialog implements OnInit, OnDestroy {
    private subs = new Subscription();
    public dataSet: { __typename?: "FoodCategory" | undefined; id: number; name: string; }[] = [];
    // public dataSet!: GetFoodCategoriesQuery['foodCategories'];
    public foodTypes: FoodTypesQuery['foodTypes'] = [];
    public foodSizes: FoodSizesQuery['foodSizes'] = [];

    private dataSetChange$ = new BehaviorSubject(<
        GetFoodCategoriesQueryVariables
        >{
            filter: {},
            sorting: [],
            // paging: { limit: 10, offset: 0 },
        });
    private foodTypeDataSetChange$ = new BehaviorSubject(<
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
    constructor(
        public dialogRef: MatDialogRef<UpdateItemComponentDialog>,
        @Inject(MAT_DIALOG_DATA)
        public data: any,
        private readonly _fb: FormBuilder,
        private _createService: CreateOrderService,
        private _snackBar: MatSnackBar,
    ) {
        this.getFoodType();
        this.getFoodSize();
    }
    slideValue!: boolean;
    status!: boolean;
    imageUrl: string | null = null;
    isloading = true


    updatedItem = this._fb.group({
        category: ['', Validators.required],
        name: ['', Validators.required],
        offer: [''],
        price: [0, Validators.required],
        img: [''],
        type: [false],
        status: [true],
        size: [0],
        foodtype: ['', Validators.required]
    });

    ngOnInit(): void {
        this.subscribeCategoryChanges();
    }

    getFoodType() {
        this.subs.add(
            this.foodTypeDataSetChange$
                .pipe(
                    debounceTime(500),
                    switchMap((variables) => this._createService.findFoodType(variables))
                ).subscribe(({ data }) => {
                    if (data?.foodTypes) {
                        this.foodTypes = data.foodTypes;
                    } else {
                        this._snackBar.open("Something Wrong While getting FoodTypes Data");
                        return; // Return early to avoid unnecessary processing
                    }
                })
        );
    }

    getFoodSize() {
        this.subs.add(
            this.foodSizedataSetChange$
                .pipe(
                    debounceTime(500),
                    switchMap((variables) => this._createService.findFoodSize(variables))
                ).subscribe(({ data }) => {
                    if (data?.foodSizes) {
                        this.foodSizes = data?.foodSizes;
                    } else {
                        this._snackBar.open("Something Wrong While getting FoodSizes Data");
                        return; // Return early to avoid unnecessary processing
                    }
                })
        );
    }


    subscribeCategoryChanges() {
        // this.getFoodCategory();
        this.subs.add(
            this.dataSetChange$
                .pipe(
                    debounceTime(500),
                    switchMap((variables) => this._createService.find(variables))
                )
                .subscribe(({ data }) => {
                    if (!data?.foodCategories) {
                        this._snackBar.open("Something Wrong While getting Category Data");
                        return; // Return early if no food categories are available
                    }
                    const category = data?.foodCategories;
                    const foodType = this.data.foodtype?.id;
                    const matchingFoodType = this.foodTypes.find(res => res?.id === foodType);
                    const matchingFoodSize = this.foodSizes.find(res => res?.id === foodType);
                    const itemCategory = this.data.category.name.toLowerCase() ?? '';
                    const matchingCategory = data.foodCategories.find(res => res.name.toLowerCase() === itemCategory);
                    this.slideValue = this.data.type;
                    this.imageUrl = this.data.image_data;
                    this.status = this.data.status;
                    this.updatedItem.patchValue({
                        foodtype: matchingFoodType?.name,
                        category: (matchingCategory?.name ?? ' ').toString(),
                        size: matchingFoodSize?.id,
                        name: this.data.name,
                        offer: this.data.offer,
                        price: parseInt(this.data.price),
                        type: this.data.type,
                        status: this.data.status
                    });
                    this.dataSet = category;
                    if (this.updatedItem.valid) {
                        this.isloading = false
                    }
                })
        );
    }

    handleFileInput(event: any): void {
        const selectedFile = event.target.files[0];
        const maxSizeMB = 5;
        const targetWidth = 800;
        const targetHeight = 800;

        if (selectedFile) {
            const fileSizeMB = selectedFile.size / (1024 * 1024);
            if (fileSizeMB > maxSizeMB) {
                this.updatedItem.get('img')?.setValue(null);
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
                        const resizedDataURL = canvas.toDataURL(selectedFile.type); // Preserve original image type
                        // Update the image URL and set the form control value
                        this.imageUrl = resizedDataURL;
                        this.updatedItem.get('img')?.setValue(resizedDataURL);
                    };
                    img.src = e.target!.result as string;
                };
                reader.readAsDataURL(selectedFile);
            }
        }
    }

    onSlideToggleChange(event: MatSlideToggleChange) {
        this.updatedItem.get('type')?.setValue(event.checked);
        this.slideValue = event.checked;
    }

    onStatusToggleChange(event: MatSlideToggleChange) {
        this.updatedItem.get('status')?.setValue(event.checked);
        this.status = event.checked;
    }

    onSubmitHandler() {

        const formdata = this.updatedItem.value;
        const selectedCategoryName = formdata.category?.toString().toLowerCase();
        const category = this.dataSet.find(category => category.name.toLowerCase() === selectedCategoryName);
        const foodTypeName: string = this.updatedItem.get('foodtype')?.value || '';
        const foodSizeId: number = this.updatedItem.get('size')?.value || 0;
        if (foodTypeName != '' && foodSizeId != 0) {
            const foodType = this.foodTypes.find(foodtype => foodtype?.name.toLowerCase().replace(/\s/g, '') === foodTypeName.toLowerCase().replace(/\s/g, ''))
            // const foodSize = this.foodSizes.find(foodsize => foodsize?.id === foodSizeId);

            if (this.updatedItem.valid) {
                const foodCategoryInput: FoodCategoryInput = {
                    id: category?.id,
                }
                const foodTypesInput: FoodTypeInput = {
                    id: foodType?.id
                }
                const foodSizeInput: FoodSizeInput = {
                    id: formdata?.size, // form data carryingid as sizes
                }
                const updatedByUserId: UserInput | null = this._createService.getCurrentUser();
                if (updatedByUserId && updatedByUserId.id) {
                    const userIdString: string = String(updatedByUserId.id);
                    const userId: number = parseInt(userIdString, 10);
                    const CurrentUserId: UserInput = {
                        id: userId
                    }
                    const updateData: UpdateOneItemEntityInput = {
                        id: this.data.id,
                        update: {
                            category: foodCategoryInput,
                            image_data: formdata.img === '' ? this.imageUrl : formdata.img,
                            name: formdata.name,
                            offer: formdata.offer,
                            price: formdata.price,
                            type: formdata.type,
                            updatedby: CurrentUserId,
                            foodtype: foodTypesInput,
                            foodsize: foodSizeInput,
                            status: formdata.status
                        }
                    }
                    if (this._createService.updateSingleItem(updateData)) {
                        this.dialogRef.close(true)
                    } else {
                        this.dialogRef.close(false)
                    }

                } else {
                    console.error('Invalid or missing user ID');
                }
            }
        }

    }
    removeImage(): void {
        this.imageUrl = null;
        this.updatedItem.get('img')?.setValue('');
        const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
        if (fileInput) {
            fileInput.value = ''; // Clear the selected file
        }
    }
    ngOnDestroy(): void {
        this.subs.unsubscribe();
    }

    closeModal() {
        this.subs.unsubscribe();
        this.dialogRef.close();
    }
}
