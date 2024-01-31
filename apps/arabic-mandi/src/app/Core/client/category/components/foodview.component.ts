import {
  Component,
  OnInit,
  OnDestroy,
  Renderer2,
} from '@angular/core';
import { FoodItem, StaticFoodItem } from '../../../structures/structure';
import { ActivatedRoute } from '@angular/router';
import { BehaviorSubject, Subscription, debounceTime, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FoodDetails } from '../pages/food-details.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { CategoryService } from '../category.service';
import { GetItemEntitiesQueryVariables } from 'apps/arabic-mandi/src/generate-types';
import { HttpClient } from '@angular/common/http';
import { foodItemsJson } from '.static-xlsx/food';
import {foodOfferJson} from '.static-xlsx/offer'
@Component({
  selector: 'food-foodview',
  templateUrl: './foodview.component.html',
  styleUrls: ['./foodview.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class FoodComponent implements OnInit, OnDestroy {
  public sub: Subscription;
  public selectedFoodItem: any;
  public itemName: any
  public isDropdownOpen: boolean = false;
  public selectedFilter: string = '';
  public selectedType: string = '';
  public dataSource: any[] = [];
  private $dataSetChange = new BehaviorSubject(<
    GetItemEntitiesQueryVariables
    >{
      filter: {},
      sorting: [],
      //   paging: { limit: 10, offset: 0 },
    });


  foodTypes: string[] = [];
  structuredFoodType: { [key: string]: FoodItem[] } = {};
  staticStructuredFoodType: { [key: string]: StaticFoodItem[] } = {};
  public FoodItems;

  constructor(
    private route: ActivatedRoute,
    private _dialog: MatDialog,
    private _categoryService: CategoryService,
  ) {
    this.sub = new Subscription();
    this.FoodItems = foodItemsJson;
  }

  openDilog(data: any) {
    this.selectedFoodItem = data;
    this._dialog.open(FoodDetails, {
      width: '500px',
      data: { Item: data },
    });
  }

  applyFilter() {
    // Handle the selected filter here, e.g., emit an event or call a function with this.selectedFilter.
    console.log('Selected Filter: ' + this.selectedFilter);
    this.isDropdownOpen = false; // Close the dropdown after selection.
  }

  async ngOnInit(): Promise<void> {
    this.sub.add(
      await this.OnInitItemList().then(status => {
        if (status) {
          this.route.paramMap.subscribe((params) => {
            const key = params.get('category');
            this.itemName = key
            if (key) {
              this.getFoods(key);
            }
          })
          this.foodTypes = Object.keys(this.staticStructuredFoodType);
        }
      })
    )

  }

  getSizeSuffix(size: any): string {
    switch (size) {
      case 1:
        return ' Single';
      case 2:
        return ' Half';
      case 3:
        return ' Full';
      default:
        return ''; // Handle other cases as needed
    }
  }

  getFoods(key: any) {
    const filteredFoodType = this.FoodItems.filter(
      (item: StaticFoodItem) => item.FoodType?.toLowerCase() === key.toLowerCase()
    );
    this.staticStructuredFoodType = filteredFoodType.reduce((acc, item) => {
      if (!acc[item.Category]) {
        acc[item.Category] = [];
      }
      acc[item.Category].push(item);
      return acc;
    }, {} as { [key: string]: StaticFoodItem[] });
  }

  // Toggle the selected food type
  toggleFoodType(type: string) {
    this.selectedType = type;
  }

  // Check if a food type is selected
  isTypeVisible(type: string): boolean {
    return this.selectedType === type;
  }

  OnInitItemList(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      this.sub.add(
        this.$dataSetChange
          .pipe(
            debounceTime(500),
            switchMap((variables) => this._categoryService.find(variables))
          )
          .subscribe(({ data }) => {
            if (data?.itemEntities) {
              this.dataSource = data.itemEntities;
              resolve(true); // Data is available, resolving the promise with true
            } else {
              resolve(false); // Data is not available, resolving the promise with false
            }
          })
      );
    });
  }


  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
