import { Component, OnInit } from '@angular/core';
import { ViewStructureInput  } from '../../../structures/structure';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription, debounceTime, switchMap } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { GetFoodCategoriesClientQueryVariables, GetItemEntitiesClientQueryVariables } from '../../generate-client-types';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCategoryComponentDialog } from '../../../admin/category/components/update-category-dialog.component';
import { CategoryService } from '../category.service';
import { FoodDetails } from '../components/food-details.component';

@Component({
  selector: 'food-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3000ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeIn1', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('4000ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class CategoryComponent implements OnInit {
  sub: Subscription;
  data: any[] = [];
  viewArrayOne: ViewStructureInput[] = [];
  viewArrayTwo: ViewStructureInput[] = [];
  categoryNameOne: any;
  categoryNameTwo: any;
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    private _categoryService: CategoryService,

  ) {
    this.sub = new Subscription();
  }

  private subs = new Subscription();
  protected user: any
  private $categoriesdataSetChange = new BehaviorSubject(<
    GetFoodCategoriesClientQueryVariables
    >{
      filter: {},
      sorting: [],
      // paging: { limit: 10, offset: 0 },
    });
  private $dataSetChange = new BehaviorSubject(<
    GetItemEntitiesClientQueryVariables
    >{
      filter: {},
      sorting: [],
      //   paging: { limit: 10, offset: 0 },
    });
  ngOnInit() {
    this.subs.add(
      this.$categoriesdataSetChange
        .pipe(
          debounceTime(500),
          switchMap((variables) => {
            if (this._categoryService.getCurrentUser() === null) {
              const filter = {
                isActive: { is: true }
              }
              // Merge the filter into the existing variables
              const newVariables = { ...variables, filter };
              // Call the find method with the updated variables
              return this._categoryService.FoodCategoryfind(newVariables);
            } else {
              return this._categoryService.FoodCategoryfind(variables);
            }
          })
        ).subscribe(({ data }) => {
          if (data?.foodCategories) {
            const user = this._categoryService.getCurrentUser();
            if (user?.id) {
              this.user = user;
              this.data = data.foodCategories;
            } else {
              this.data = data.foodCategories?.filter((v) => v.isActive);
            }
          } else {
            this._snackBar.open("Something Wrong While getting FoodCategory Data");
            return; // Return early to avoid unnecessary processing
          }
        })
    );
    this.OnInitItemList();

  }
  OnInitItemList() {
    this.subs.add(
      this.$dataSetChange
        .pipe(
          debounceTime(500),
          switchMap((variables) => {
            const filter = {
              category: {
                clientView: {
                  is: true
                }
              }
            }
            // Merge the filter into the existing variables
            const newVariables = { ...variables, filter };
            // Call the find method with the updated variables
            return this._categoryService.find(newVariables);
          })
        ).subscribe(({ data }) => {
          if (data?.itemEntities) {
            const foodCategories = data?.itemEntities
            const group = foodCategories.reduce((acc: { [key: string]: ViewStructureInput[] }, item: any) => {
              if (item?.category?.id) {
                if (!acc[item?.category?.id]) {
                  if (Object.keys(acc).length < 2) { // Check if the number of unique keys is less than 2
                    acc[item?.category?.id] = [];
                  }
                }
                // Push the item into the array associated with the category ID
                if (acc[item?.category?.id]) {
                  acc[item?.category?.id].push(item);
                }
              }
              return acc;
            }, {});
            const arrays = Object.values(group);
            this.viewArrayOne = arrays.length > 0 ? arrays[0] : [];
            this.viewArrayTwo = arrays.length > 1 ? arrays[1] : [];
            this.categoryNameOne = this.viewArrayOne[1]?.category;
            this.categoryNameTwo = this.viewArrayTwo[1]?.category;
          } else {
            this._snackBar.open("Something Wrong While getting FoodCategory Data");
            return; // Return early to avoid unnecessary processing
          }
        })
    );
  }
  onCategoryUpdateHandler(data: any) {
    const dialogRef = this._dialog.open(UpdateCategoryComponentDialog, {
      data: data,
    });
  }

  openDilog(data: any) {
    this._dialog.open(FoodDetails, {
      width: '500px',
      data: data,
    });
  }

  /* Navigate to foodview*/
  navigateToDetail(id: any) {
    const encodedId = this._categoryService.encodeId(id);
    this.router.navigate(['food', encodedId], { relativeTo: this.route });
  }
}
