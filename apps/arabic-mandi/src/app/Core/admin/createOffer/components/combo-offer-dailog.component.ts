import { AfterViewInit, Component, Inject, OnDestroy, OnInit, ViewChild } from "@angular/core";
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
      .quantity-container {
        display: flex;
        align-items: center;
      }

      input {
        width: 45px;
        text-align: center;
        -moz-appearance: textfield;
      }

     `]
})
export class OfferItemComponentDialog implements AfterViewInit, OnInit, OnDestroy {
  private subs = new Subscription();
  public searchItems = new FormControl(null);

  dataSource = new MatTableDataSource<any>([]);
  public filteredDataSource: any;
  public displayedColumns: string[] = ['select', 'name', 'quantity'];
  public selectedItems: any[] = [];
  public update: boolean = false;
  public showQuantityInput: boolean = false;
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<OfferItemComponentDialog>,
    @Inject(MAT_DIALOG_DATA)
    public data: any,

  ) {
    this.initializeData();
  }

  private initializeData() {
    if (this.data?.itemEntities) {
      const dataWithSelected = this.data.itemEntities.map((item: any) => ({ ...item, selected: false, quantity: 1 }));
      this.filteredDataSource = dataWithSelected.filter((item: any) => item.status);
    } else {
      this.filteredDataSource = this.data.filter((item: any) => item.status);
      this.update = true;
    }
  }
  ngOnInit(): void {
    this.init()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  onCheckboxChange(event: any, row: any): void {
    const indexInSelectedItems = this.selectedItems.findIndex(item => item === row);
    const indexInFilteredDataSource = this.filteredDataSource.findIndex((item: any) => item.id === row.id);

    if (event.checked) {
      if (indexInSelectedItems === -1) {
        // Initialize the quantity property for the selected item
        const newItem = { ...row, selected: true, quantity: 1 }; // Adjust the initial value as needed
        this.selectedItems.push(newItem);
      }

      if (indexInFilteredDataSource !== -1 && Object.isExtensible(this.filteredDataSource[indexInFilteredDataSource])) {
        this.filteredDataSource[indexInFilteredDataSource].selected = true;
      }
    } else {
      if (indexInSelectedItems !== -1) {
        this.selectedItems.splice(indexInSelectedItems, 1);
      }

      if (indexInFilteredDataSource !== -1 && Object.isExtensible(this.filteredDataSource[indexInFilteredDataSource])) {
        this.filteredDataSource[indexInFilteredDataSource].selected = false;
      }
    }
  }


  onQuantityChange(row: any): void {
    const indexInSelectedItems = this.selectedItems.findIndex(item => item.id === row.id);
    if (indexInSelectedItems !== -1) {
      // Update the quantity in the 'selectedItems' array
      this.selectedItems[indexInSelectedItems].quantity = row.quantity;
    }
  }

  updateChange(data: any) {
    this.dialogRef.close(data);
  }

  onAddItemsClick(): void {
    const filter = this.filteredDataSource.filter((item: any) => item.selected);
    if (this.update) {
      if (this.selectedItems.length != -1) {
        const updatedData = Array.from(
          new Map([...filter, ...this.selectedItems].map(item => [item.id, item])).values()
        );
        this.updateChange(updatedData)
      } else {
        const updatedData = Array.from(
          new Map([...filter, ...this.selectedItems].map(item => [item.id, item])).values()
        );
        this.updateChange(updatedData)
      }
    } else {
      const updatedData = Array.from(
        new Map([...this.selectedItems].map(item => [item.id, item])).values()
      );
      this.dialogRef.close(updatedData)
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


  ngOnDestroy() {
    this.subs.unsubscribe();
  }
}
