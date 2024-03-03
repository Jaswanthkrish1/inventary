import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'food-foodDetils',
  templateUrl: './food-details.component.html',
  styles: [`
  .modal-body{
    display: flex;
    }
  .modal-body_inner{
    display: grid;
    padding-left: 30px;
  }
 `],
})
export class FoodDetails {
  selectedFoodItem: any;
  constructor(
    public dialogRef: MatDialogRef<FoodDetails>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,
  ) {
    this.selectedFoodItem = data;
  }

  closeModal() {
    this.dialogRef.close();
  }
}