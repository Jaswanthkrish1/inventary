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
    GetFoodCategoriesQuery,
    GetFoodCategoriesQueryVariables,
    UpdateOneItemEntityInput,
    FoodCategoryInput,
    UserInput
} from 'apps/arabic-mandi/src/generate-types';
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
    public dataSet!: GetFoodCategoriesQuery['foodCategories'];
    private dataSetChange$ = new BehaviorSubject(<
        GetFoodCategoriesQueryVariables
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
        this.subscribeCategoryChanges();
    }
    slideValue!: boolean;
    status!: boolean;
    imageUrl: string | null = null;

    updatedItem = this._fb.group({
        category: ['', Validators.required],
        name: ['', Validators.required],
        offer: [''],
        price: [0, Validators.required],
        img: [''],
        type: [false],
        status: [true]
    });

    subscribeCategoryChanges() {
        this.subs.add(
            this.dataSetChange$
                .pipe(
                    debounceTime(500),
                    switchMap((variables) => this._createService.find(variables))
                )
                .subscribe(({ data }) => {
                    if (this.data.name) {
                        if (data?.foodCategories) {
                            const category = data.foodCategories;
                            const itemCategory = this.data.category.name.toLowerCase();
                            const matchingCategory = data.foodCategories.find(res => res.name.toLowerCase() === itemCategory);
                            this.slideValue = this.data.type;
                            this.imageUrl = this.data.image_data
                            this.status = this.data.status
                            this.updatedItem.patchValue({
                                category: matchingCategory?.name.toString(), name: this.data.name, offer: this.data.offer, price: parseInt(this.data.price), type: this.data.type, status: this.data.status
                            })

                            this.dataSet = category
                        }
                    }
                })
        );
    }

    handleFileInput(event: any): void {
        const selectedFile = event.target.files[0];
        const maxSizeMB = 0.0488;
        if (selectedFile) {
            const fileSizeMB = selectedFile.size / (1024 * 1024);
            if (fileSizeMB > maxSizeMB) {
                this.updatedItem.get('img')?.setValue(null);
                // Reset the control and show an error message
                alert(`File size exceeds the limit of ${maxSizeMB} kB`);
            } else {
                const reader = new FileReader();

                reader.onload = (e) => {
                    // Update the image URL and set the form control value
                    this.imageUrl = reader.result as string;
                    this.updatedItem.get('img')?.setValue(reader.result as string);
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

        if (this.updatedItem.valid) {
            const foodCategoryInput: FoodCategoryInput = {
                id: category?.id,
                name: category?.name,
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
                        image_data: formdata.img,
                        name: formdata.name,
                        offer: formdata.offer,
                        price: formdata.price,
                        type: formdata.type,
                        updatedby: CurrentUserId,
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

    ngOnInit(): void { }

    closeModal() {
        this.subs.unsubscribe();
        this.dialogRef.close();
    }
}
