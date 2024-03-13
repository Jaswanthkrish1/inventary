import {
  Component,
  Inject,
  OnDestroy,
  Output,
  EventEmitter,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatSnackBar } from '@angular/material/snack-bar';
import { CoreModule } from '@angular/flex-layout';
import { MaterialModule } from '../../../material.module';
import { CommonModule } from '@angular/common';
import { CreateFoodCategoryInput, CreateOneFoodCategoryInput, GetFoodCategoriesQuery } from '../../generate-admin-types';
import { AdminCategoryService } from '../../../admin/category/category.service';


@Component({
  selector: 'food-create-dailog-view',
  templateUrl: './create-category-dialog.component.html',
  styles: [`
  
  `],
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    CoreModule,
    ReactiveFormsModule
  ]
})
export class CreateCategoryComponentDialog implements OnDestroy {
  private subs = new Subscription();
  private responce: any = {};

  newCategory = this._fb.group({
    category_name: ['', Validators.required],
    category_image: ['', Validators.required]
  });
  public dataSet!: GetFoodCategoriesQuery['foodCategories'];
  @Output() categoryCreated = new EventEmitter<void>();

  constructor(
    public dialogRef: MatDialogRef<CreateCategoryComponentDialog>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private readonly _fb: FormBuilder,
    private _createService: AdminCategoryService,
    private _snackBar: MatSnackBar
  ) {
  }


  onFileSelected(event: any): void {
    const selectedFile = event.target.files[0];
    const maxSizeMB = 5;
    const targetWidth = 800;
    const targetHeight = 800;
    if (selectedFile) {
      // Check file size
      const fileSizeMB = selectedFile.size / (1024 * 1024);
      if (fileSizeMB > maxSizeMB) {
        this.newCategory.get('category_image')?.setValue(null);
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
            this.newCategory.get('category_image')?.setValue(resizedDataURL);
          };
          img.src = e.target!.result as string;
        };
        reader.readAsDataURL(selectedFile);
      }
    }
  }

  onSubmitHandler(data: any) {
    // console.log(data)
    if (this.newCategory.valid) {
      const foodcategory: CreateFoodCategoryInput = {
        name: data.category_name,
        category_image: this.newCategory.get('category_image')?.value
      }
      const input: CreateOneFoodCategoryInput = {
        foodCategory: foodcategory
      };
      this.subs.add(
        this._createService.addSingleCategory(input).subscribe(
          (res) => {
            this.responce = { ...res };
            this.closeModal()
            // this.newCategory.setValue({ category_name: '' });
            this._snackBar.open('Category Has Been Added');
          },
          (error) => {
            this.newCategory.reset();
            this.newCategory.setErrors(Validators.required);
            this._snackBar.open('Category Is Already exited');
          }
        )
      );
    }
  }

  closeModal() {
    this.subs.unsubscribe();
    this.dialogRef.close(this.responce);
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
