import { Component, OnInit, AfterViewInit } from '@angular/core';
import { comboOffer } from '../../structures/structure';
import { ActivatedRoute, Router } from '@angular/router';
import { BehaviorSubject, Subscription, debounceTime, switchMap } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import * as $ from 'jquery'
import { GetFoodCategoriesQueryVariables, GetItemEntitiesQueryVariables } from 'apps/arabic-mandi/src/generate-types';
import { CreateOrderService } from '../../admin/createOrder/create-order.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { UpdateCategoryComponentDialog } from '../../admin/category/components/update-category-dialog.component';
import { CategoryService } from './category.service';
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
export class CategoryComponent implements OnInit, AfterViewInit {
  sub: Subscription;
  data: any[] = [];
  dataCombo: comboOffer[] = [
    {
      id: 1,
      name: 'Family',
      price: 550,
      imgUrl: '../../../../assets/carousel/bg1.jpeg',
      discription:
        'Special Offer For Students & Family Upto 10% Discount .....................',
      for: 'Sunday',
      discount: '10%',
    },
    {
      id: 2,
      name: 'Friends',
      price: 500,
      imgUrl: '../../../../assets/carousel/bg2.jpeg',
      discription:
        'Special offer for Friends upto 10% discount.....................',
      for: 'Sunday',
      discount: '10%',
    },
  ];

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private _snackBar: MatSnackBar,
    private _dialog: MatDialog,
    private _createService: CreateOrderService,
    private _categoryService: CategoryService,

    ) {
    this.sub = new Subscription();
  }

  private subs = new Subscription();
  private categoriesdataSetChange$ = new BehaviorSubject(<
    GetFoodCategoriesQueryVariables
    >{
      filter: {},
      sorting: [],
      // paging: { limit: 10, offset: 0 },
    });
    private $dataSetChange = new BehaviorSubject(<
      GetItemEntitiesQueryVariables
      >{
        filter: {},
        sorting: [],
        //   paging: { limit: 10, offset: 0 },
      });

  ngOnInit() {
    this.subs.add(
      this.categoriesdataSetChange$
        .pipe(
          debounceTime(500),
          switchMap((variables) => this._createService.find(variables))
        ).subscribe(({ data }) => {
          if (data?.foodCategories) {
            this.data = data.foodCategories;
          } else {
            this._snackBar.open("Something Wrong While getting FoodCategory Data");
            return; // Return early to avoid unnecessary processing
          }
        })
    );
    this.OnInitItemList();

  }
 OnInitItemList(): Promise<boolean> {
    return new Promise<boolean>((resolve) => {
      const storedValue = this._categoryService.getStoredValue();
      if (storedValue && storedValue.length !== 0) {
        resolve(true);
      } else {
        this.sub.add(
          this.$dataSetChange
            .pipe(
              debounceTime(500),
              switchMap((variables) => this._categoryService.find(variables))
            )
            .subscribe(({ data }) => {
              if (data?.itemEntities) {
                this._categoryService.setStoredValue(data.itemEntities);
                resolve(true);
              } else {
                resolve(false);
              }
            })
        );
      }
    });
  }
  onCategoryUpdateHandler(data: any){
    const dialogRef = this._dialog.open(UpdateCategoryComponentDialog, {
      data: data,
    });
  }
  
  /* Navigate to foodview*/
  navigateToDetail(id: any) {
    const encodedId = this._categoryService.encodeId(id);
    this.router.navigate(['food', encodedId], { relativeTo: this.route });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const carouselElement = $('#myCarousel') as any;
      carouselElement.carousel({ interval: 1000 });
    }, 100);
  }
}
