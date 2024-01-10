import { AfterViewInit, Component, Inject, OnInit, ViewChild } from "@angular/core";
import { FormBuilder, FormControl, Validators } from "@angular/forms";
import { MAT_DIALOG_DATA, MatDialogRef } from "@angular/material/dialog";
import { MatPaginator } from "@angular/material/paginator";
import { MatTableDataSource } from "@angular/material/table";
import { Subscription } from "rxjs";

@Component({
    selector: 'Offer-item-dailog-view',
    templateUrl: './combo-offer-dailog.component.html',
    styles: [`
    .mat-mdc-table {
        max-width: 100%;
        max-height: 250px;
        overflow: scroll;
      }

     `]
})
export class OfferItemComponentDialog implements AfterViewInit, OnInit {
    private subs = new Subscription();
    public searchItems = new FormControl(null);

    dataSource = new MatTableDataSource<any>([]);
    public filteredDataSource: any;
    public displayedColumns: string[] = ['select', 'name', 'quantity'];
    public selectedItems: any[] = [];
    public update: boolean = false;
    @ViewChild(MatPaginator) paginator!: MatPaginator;

    constructor(
        public dialogRef: MatDialogRef<OfferItemComponentDialog>,
        @Inject(MAT_DIALOG_DATA)
        public data: any,

    ) {
        if(data?.itemEntities){
            const dataWithSelected = data?.itemEntities.map((item: any) => ({ ...item, selected: false }));
            this.filteredDataSource = dataWithSelected.filter((item: any) => item.status);
        }else{
            this.filteredDataSource = data?.itemEntities.filter((item: any) => item.status);
            console.log(data?.itemEntities)
            this.update = true;
        }
    }

    ngOnInit(): void {
        this.init()
    }

    onCheckboxChange(event: any, row: any): void {
        const indexInSelectedItems = this.selectedItems.findIndex(item => item === row);

        if (event.checked) {
          if (indexInSelectedItems === -1) {
            this.selectedItems.push(row);
          }
        } else {
          if (indexInSelectedItems !== -1) {
            this.selectedItems.splice(indexInSelectedItems, 1);
          }
        }

        const indexInFilteredDataSource = this.filteredDataSource.findIndex((item: any) => item === row);

        if (indexInFilteredDataSource !== -1) {
          this.filteredDataSource[indexInFilteredDataSource].selected = event.checked;
        }
      }
    updateChange(data: any){
        this.dialogRef.close(data);
    }
    onAddItemsClick(): void {
        const filter = this.filteredDataSource.filter((item: any) => item.selected);
          if(this.update){
            if(this.selectedItems.length !=-1){
                const updatedData = [...filter, ...this.selectedItems]
                this.updateChange(updatedData)
            }else{
                const updatedData = [...filter]
                this.updateChange(updatedData)
            }
          } else{
            this.dialogRef.close(this.selectedItems)
          }
    }
    private init() {
        this.dataSource = new MatTableDataSource<any>(this.filteredDataSource);
        this.subs.add(
          this.searchItems.valueChanges.subscribe((v: any) => {
            if (!this.filteredDataSource) {
              this.filteredDataSource = [...this.dataSource.data];
            }
            if (v) {
              this.dataSource.data = this.filteredDataSource.filter((item: any) => {
                const itemName = String(item.name).toLowerCase();
                const search = String(v).toLowerCase();
                return itemName.includes(search);
              });
            } else {
              // If search input is empty, reset dataSource to the full dataset
              this.dataSource.data = this.filteredDataSource;
            }

            // Reapply paginator after filtering
            this.dataSource.paginator = this.paginator;
          })
        );
      }
    ngAfterViewInit() {
        this.dataSource.paginator = this.paginator;
    }
}
