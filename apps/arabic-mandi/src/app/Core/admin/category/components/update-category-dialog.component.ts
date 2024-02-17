import {
  Component,
  Inject,
  OnDestroy,
  OnInit,
  Output,
  EventEmitter,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Subscription } from 'rxjs';
import { FormBuilder, Validators } from '@angular/forms';
import {
  GetFoodCategoriesQuery,
  UpdateOneFoodCategoryInput,
  UpdateOneFoodCategoryMutationVariables,
} from 'apps/arabic-mandi/src/generate-types';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from '../../../client/category/category.service';
import { AdminCategoryService } from '../category.service';


@Component({
  templateUrl: './update-category-dialog.component.html',
})
export class UpdateCategoryComponentDialog implements OnInit, OnDestroy {
  private subs = new Subscription();
  private responce: any = {};

  newCategory = this._fb.group({
    id:[0],
    category_name: ['', Validators.required],
    category_image: ['', Validators.required],
    category_status:[ true ]
  });
  public dataSet!: GetFoodCategoriesQuery['foodCategories'];

  @Output() categoryCreated = new EventEmitter<void>();
  constructor(
    public dialogRef: MatDialogRef<UpdateCategoryComponentDialog>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private readonly _fb: FormBuilder,
    private _adminCategoryService: AdminCategoryService,
    private _snackBar: MatSnackBar
  ) {
  this.initForm()
  }

  initForm(){
    this.newCategory.setValue({
      id: this.data?.id,
      category_image: this.data?.category_image,
      category_name: this.data?.name,
      category_status: this.data?.isActive
    })
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

    if (this.newCategory.valid ) {
      const input: UpdateOneFoodCategoryInput = {
        id: data?.id,
        update: {
          category_image: data?.category_image,
          isActive: data?.category_status,
          name: data?.category_name,
        }
      };
      this.subs.add(
        this._adminCategoryService.updateSingleCategory(input).subscribe(
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

  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }

  closeModal() {
    this.subs.unsubscribe();
    this.dialogRef.close(this.responce);
  }
  ngOnInit(): void {}

}
