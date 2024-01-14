import { Component, Inject } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
  templateUrl: './update-offer-dailog-component.html',
  styles: [``]
})
export class UpdateOfferDailogComponent {
  constructor(
    public dialogRef: MatDialogRef<UpdateOfferDailogComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,

  ) {
    this.initializeData();
  }

  private initializeData(){

  }
}
