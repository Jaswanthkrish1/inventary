import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FoodItem, StaticFoodItem, ViewStructureInput } from '../../../structures/structure';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription, debounceTime, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FoodDetails } from '../pages/food-details.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { CategoryService } from '../category.service';
import { CreateItemInput, CreateOneItemEntityInput, GetItemEntitiesQueryVariables } from 'apps/arabic-mandi/src/generate-types';
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
export class FoodComponent implements  OnDestroy {
  public sub: Subscription;
  public selectedFoodItem: any;
  public itemName: any;
  public loading = true;
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
  staticStructuredFoodType: { [key: string]: CreateItemInput[] } = {};

  constructor(
    private route: ActivatedRoute,
    private _router: Router,
    private _dialog: MatDialog,
    private _categoryService: CategoryService,
  ) {
    this.sub = new Subscription();
    this.sub.add(
      this.route.paramMap.subscribe((params) => {
        const key = params.get('category');
        this.itemName = key;
        if (key) {
          this.loading = true;
          const encodedId = this._categoryService.decodeId(key);
          this.getFoods(encodedId);
        }
      })
    );
  }

  openDilog(data: any) {
    this.selectedFoodItem = data;
    this._dialog.open(FoodDetails, {
      width: '500px',
      data: data ,
    });
  }

  applyFilter() {
    // Handle the selected filter here, e.g., emit an event or call a function with this.selectedFilter.
    this.isDropdownOpen = false; // Close the dropdown after selection.
  }

  getFoods(key: any) {
    const id = +key // converting string to number using " + "
    this.sub.add(
      this.$dataSetChange.pipe(
        debounceTime(500),
        switchMap(variable => {
          // Create a new filter object based on the category key
          const filter = { category: { id: { eq: id } } };
          // Merge the filter into the existing variables
          const newVariables = { ...variable, filter };
          // Call the find method with the updated variables
          return this._categoryService.find(newVariables);
        })
      ).subscribe(({ data }) => {
        if (data?.itemEntities) {
          this.dataSource = data?.itemEntities;
          this.itemName = this.dataSource[0].category.name;
          this.staticStructuredFoodType = this.dataSource.reduce((acc, item) => {
            if (!acc[item.foodtype?.name]) {
              acc[item.foodtype?.name] = [];
            }
            acc[item.foodtype?.name].push(item);
            return acc;
          }, {} as { [key: string]: ViewStructureInput[] });
        }
      })
    )
    setTimeout(() => {
      this.foodTypes = Object.keys(this.staticStructuredFoodType);
      if (this.foodTypes.length > 0) {
        this.loading = false;
      } else {
        this.loading = false;
        this._router.navigate(['/'])
      }
    },2000)
  }


  // Toggle the selected food type
  toggleFoodType(type: string) {
    this.selectedType = type;
  }

  // Check if a food type is selected
  isTypeVisible(type: string): boolean {
    return this.selectedType === type;
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }
}
