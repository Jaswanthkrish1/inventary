import { Component, Inject, OnDestroy } from "@angular/core";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";

@Component({
    templateUrl: './offer-details-dailog.component.html',
})
export class OfferDetailsDailogComponent implements OnDestroy{
    public offerData: any = [];

    constructor(
        public dialogRef: MatDialogRef<OfferDetailsDailogComponent>,
        @Inject(MAT_DIALOG_DATA)
        public data: any,
    ) {
        this.initOfferData();
    }
   
    initOfferData() {
        this.offerData = this.data
    }
     ngOnDestroy(): void {
        this.offerData = [];
    }
}