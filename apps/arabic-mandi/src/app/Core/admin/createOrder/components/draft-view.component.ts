import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Subscription, findIndex } from 'rxjs';
import { CreateOrderComponent } from '../pages/create-order.component';
import { UpdateOrderComponent } from '../pages/update-order.component';
interface MenuItem {
  category: string;
  gst: null | number;
  img: null | string;
  name: string;
  price: string;
}

@Component({
  selector: 'food-draft-view',
  templateUrl: './draft-view.component.html',
})
export class DraftViewComponent implements OnInit, AfterViewInit {
  public draftItem: any[] = [];
  public displayedColumns: string[] = ['category', 'name', 'price', 'actions'];
  public dataSource!: MenuItem[];
  private subs = new Subscription();
  public simplfy!: MenuItem[];

  constructor(
    public dialogRef: MatDialogRef<DraftViewComponent>,
    @Inject(MAT_DIALOG_DATA)
    public data: MenuItem[],
    private cdr: ChangeDetectorRef,
    private _dialog: MatDialog
  ) {}
  onDeleteHandler(data: MenuItem) {
    const index = this.data.indexOf(data);
    if (index !== -1) {
      this.data.splice(index, 1);
      if (this.data.length === 0) {
        // If there is no data left, close the dialog
        this.closeModal();
      } else {
        this.dataSource = [...this.data];
        this.cdr.detectChanges();
        this.dataSource = this.data;
      }
    }
  }
  onUpdateHandler(data: MenuItem){
   
  }
 
  ngAfterViewInit(): void {}

  ngOnInit(): void {
    this.initTable();
  }
  closeModal() {
    this.dialogRef.close();
  }
  initTable() {
    this.dataSource = this.data;
  }
}
