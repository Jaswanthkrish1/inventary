import { Component,OnDestroy, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Subscription } from 'rxjs';


interface FoodItem {
  id: number;
  name: string;
  price: number;
  category: string;
}
@Component({
  selector: 'food-view-order',
  templateUrl: './view-order.component.html',
  styles: [`
  .icon {
    padding: 0px!important ;
    box-sizing: content-box;
}
.button_action:hover{
 background-color: red;
}
  `],
})
export class ViewOrderComponent implements OnInit, OnDestroy {
  constructor(private _snakbar: MatSnackBar){}
  private subs = new Subscription();
  public searchItems = new FormControl(null);
  public displayedColumns: string[] = ['category', 'name', 'price', 'actions'];
  public dataSource: any;

  ELEMENT_DATA: FoodItem[] = [
    { id: 1,name: 'Garlic Bread', price: 5.99, category: 'Starters' },
    { id: 2,name: 'Caesar Salad', price: 8.99, category: 'Salads' },
    { id: 3,name: 'Margherita Pizza', price: 12.99, category: 'Pizza' },
    { id: 5,name: 'Chicken Alfredo Pasta', price: 15.99, category: 'Pasta' },
    { id: 6,name: 'Grilled Salmon', price: 18.99, category: 'Seafood' },
    { id: 7,name: 'Chocolate Brownie', price: 6.99, category: 'Desserts' },
    { id: 8,name: 'Soft Drinks', price: 2.49, category: 'Beverages' },
    { id: 9,name: 'Vegetable Biryani', price: 14.99, category: 'Main Course' },
    { id: 10,name: 'Tandoori Chicken', price: 16.99, category: 'Tandoori' },
    { id: 11,name: 'Mango Lassi', price: 3.99, category: 'Beverages' },
  ]


  ngOnInit(): void {
    this.dataSource = this.ELEMENT_DATA;
    this.subs.add(
      this.searchItems.valueChanges.subscribe((v: any) => {
        if (v) {
          this.dataSource = this.ELEMENT_DATA.filter((item) => {
            const itemName = String(item.category).toLowerCase();
            const search = String(v).toLowerCase();
            return itemName.includes(search);
          });
        } else {
          this.dataSource = this.ELEMENT_DATA;
        }
      })
    );
  }

  onDeleteHandler(id:any):any{
   return  this._snakbar.open('Cannonball!!');
  }
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  } 

}
