import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'food-foodDetils',
  templateUrl: './food-details.component.html',
  styles: [],
})
export class FoodDetails {
  selectedFoodItem: any;

  constructor(

    public dialogRef: MatDialogRef<FoodDetails>,
    @Inject(MAT_DIALOG_DATA)
    public data: { Item: any }
  ) {
    this.selectedFoodItem = data;
  }

  closeModal() {
    this.dialogRef.close();
  }
}
