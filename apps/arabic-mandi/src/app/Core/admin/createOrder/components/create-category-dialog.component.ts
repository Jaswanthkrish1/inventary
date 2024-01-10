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
  CreateOneFoodCategoryInput,
  GetFoodCategoriesQuery,
} from 'apps/arabic-mandi/src/generate-types';
import { CreateOrderService } from '../create-order.service';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'food-create-dailog-view',
  templateUrl: './create-category-dialog.component.html',
})
export class CreateCategoryComponentDialog implements OnInit, OnDestroy {
  private subs = new Subscription();
  public dataSet!: GetFoodCategoriesQuery['foodCategories'];

  @Output() categoryCreated = new EventEmitter<void>();
  constructor(
    public dialogRef: MatDialogRef<CreateCategoryComponentDialog>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
    private readonly _fb: FormBuilder,
    private _createService: CreateOrderService,
    private _snackBar: MatSnackBar
  ) {
    // console.log(data);
  }
  private responce: any = {};

  newCategory = this._fb.group({
    category_name: ['', Validators.required],
  });

  onSubmitHandler(data: any) {
    if (this.newCategory.valid) {
      const input: CreateOneFoodCategoryInput = {
        foodCategory: {
          name: data.category_name,
        },
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
            // console.log(error);
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

  ngOnInit(): void {}

  closeModal() {
    this.subs.unsubscribe();
    this.dialogRef.close(this.responce);
  }
}
