import { Component, Inject } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: 'contact-dailog',
    templateUrl: './contact-dailog.component.html',
})
export class ContactDailog{
    selectedFoodItem: any;
    constructor(
        private route: ActivatedRoute,
    
        public dialogRef: MatDialogRef<ContactDailog>,
        @Inject(MAT_DIALOG_DATA)
        public data: { Item: any }
      ) {
        this.selectedFoodItem = data;
      }
      closeModal() {
        this.dialogRef.close();
      }
}
