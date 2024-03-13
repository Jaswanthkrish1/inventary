import {
  Component,
  OnInit,
  OnDestroy,
  AfterViewInit,
  ChangeDetectorRef,
} from '@angular/core';
import { FoodItem, StaticFoodItem, ViewStructureInput } from '../../../structures/structure';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { BehaviorSubject, Subscription, debounceTime, switchMap } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FoodDetails } from '../components/food-details.component';
import { animate, style, transition, trigger } from '@angular/animations';
import { CategoryService } from '../category.service';
import { CreateItemInput, GetItemEntitiesClientQueryVariables } from '../../generate-client-types';
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
export class FoodComponent implements OnDestroy, AfterViewInit {
  public sub: Subscription;
  public selectedFoodItem: any;
  public itemName: any;
  public loading = true;
  public isDropdownOpen: boolean = false;
  public selectedFilter: string = '';
  public selectedType: string = '';
  public dataSource: any[] = [];
  private $dataSetChange = new BehaviorSubject(<
    GetItemEntitiesClientQueryVariables
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
        if (key) {
          this.loading = true;
          const encodedId = this._categoryService.decodeId(key);
          this.dataSource = []
          this.getFoods(encodedId);
        }
      })
    );
  }
  ngAfterViewInit(): void {

  }

  openDilog(data: any) {
    this.selectedFoodItem = data;
    this._dialog.open(FoodDetails, {
      width: '500px',
      data: data,
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
          const filter = { category: { id: { eq: id }, isActive: { is: true } } };
          // Merge the filter into the existing variables
          const newVariables = { ...variable, filter };
          // Call the find method with the updated variables
          return this._categoryService.findItemForView(newVariables);
        })
      ).subscribe(({ data }) => {
        if (data?.itemEntities) {
          this.dataSource = data?.itemEntities;

          this.staticStructuredFoodType = this.dataSource.reduce((acc, item) => {
            if (!acc[item.foodtype?.name]) {
              acc[item.foodtype?.name] = [];
            }
            acc[item.foodtype?.name].push(item);
            return acc;
          }, {} as { [key: string]: ViewStructureInput[] });
        }
        setTimeout(() => {
          this.foodTypes = Object.keys(this.staticStructuredFoodType);
          this.itemName = this.dataSource[0].category?.name.toUpperCase();
          if (data?.itemEntities.length != undefined) {
            this.loading = false;
          } else {
            this.loading = false;
            this._router.navigateByUrl('/')
          }
        }, 2000)

      })
    )

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
    this.dataSource = []
  }
}
