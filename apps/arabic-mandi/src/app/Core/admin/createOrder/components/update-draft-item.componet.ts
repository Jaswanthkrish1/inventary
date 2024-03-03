import { CommonModule } from "@angular/common";
import { Component, Inject } from "@angular/core";
import { CoreModule } from "@angular/flex-layout";
import { FormBuilder, ReactiveFormsModule, Validators } from "@angular/forms";
import { MatOptionModule } from "@angular/material/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatFormFieldModule } from "@angular/material/form-field";
import { MatSelectModule } from "@angular/material/select";
import { MaterialModule } from "../../../material.module";
import { MatSlideToggleChange } from "@angular/material/slide-toggle";
import { MatSnackBar, MatSnackBarModule } from "@angular/material/snack-bar";

@Component({
    templateUrl: './update-draft-item.component.html',
    standalone: true,
    imports: [
        CommonModule,
        CoreModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatSelectModule,
        MatOptionModule,
        MaterialModule,
        MatSnackBarModule
    ]
})
export class UpdateDraftTableComponentDailog {
    constructor(
        public dialogRef: MatDialogRef<UpdateDraftTableComponentDailog>,
        @Inject(MAT_DIALOG_DATA)
        public data: any,
        private readonly _fb: FormBuilder,
        private _snakBar: MatSnackBar

    ) {
        this.setItem();
    }
    updatedDraftItem = this._fb.group({
        category: [0, Validators.required],
        name: ['', Validators.required],
        price: [0, Validators.required],
        img: ['',],
        type: [false],
        size: [0],
        foodtype: [0, Validators.required]
    });
    public slideValue: boolean = true;
    public imageUrl: string = '';
    public status: boolean = true;
    public dataSet: any[] = [];
    setItem() {
        const category = this.data.foodCategory
        const foodType = this.data.data?.fId;
        const matchingFoodType = this.data?.foodtype.find((res: any) => res?.id === foodType);
        const matchingFoodSize = this.data?.foodSize.find((res: any) => res?.id === this.data.data.size);
        const itemCategoryId = this.data.data.cId;
        const matchingCategory = this.data?.foodCategory.find((res: any) => res?.id === itemCategoryId);
        this.slideValue = this.data.data.type;
        this.imageUrl = this.data.data.image_data;
        this.status = this.data.data.status;
        this.updatedDraftItem.patchValue({
            foodtype: matchingFoodType?.id,
            category: matchingCategory?.id,
            size: matchingFoodSize?.id,
            name: this.data.data.name,
            price: parseInt(this.data.data.price),
            type: this.data.data.type,
        });
        this.dataSet = category;
    }

    handleFileInput(event: any): void {
        const selectedFile = event.target.files[0];
        const maxSizeMB = 5;
        const targetWidth = 800;
        const targetHeight = 800;

        if (selectedFile) {
            const fileSizeMB = selectedFile.size / (1024 * 1024);
            if (fileSizeMB > maxSizeMB) {
                this.updatedDraftItem.get('img')?.setValue(null);
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
                        this.updatedDraftItem.get('img')?.setValue(resizedDataURL);
                    };
                    img.src = e.target!.result as string;
                };
                reader.readAsDataURL(selectedFile);
            }
        }
    }

    onSubmitHandler() {
        if (this.updatedDraftItem.valid) {
            if (this.updatedDraftItem.get('img')?.value != '') {
                this.dialogRef.close(this.updatedDraftItem.value);
                this._snakBar.open("Draft Item Is Updated")
            } else {
                this._snakBar.open("Plese Add Image It Required")
            }
        } else {
            this._snakBar.open("Please fill all required fields")
        }
    }
    onTypeToggleChange(event: MatSlideToggleChange) {
        this.updatedDraftItem.get('type')?.setValue(event.checked);
        this.slideValue = event.checked;
    }

    removeImage() {
        this.imageUrl = '';
        this.updatedDraftItem.get('img')?.setValue('');
        const fileInput = document.getElementById('imageUpload') as HTMLInputElement;
        if (fileInput) {
            fileInput.value = ''; // Clear the selected file
        }
    }

    closeModal() {
        this.dialogRef.close();
    }
}