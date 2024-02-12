import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Categories, comboOffer } from '../../structures/structure';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
import { foodItemsJson } from '.static-xlsx/food';
import * as $ from 'jquery'
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
  data: any[] = [
    {
      id: 1,
      name: 'Mandi',
      imgUrl: '../../../../assets/foodtype/mutton-mandifull.jpg',
      avilable: true,
      price: 500,
    },
    {
      id: 2,
      name: 'Staters',
      imgUrl: '../../../../assets/foodtype/staters.jpeg',
      avilable: true,
      price: 500,
    },
    {
      id: 3,
      name: 'Biryani',
      imgUrl: '../../../../assets/foodtype/biryani.jpg',
      avilable: true,
      price: 500,
    },
    {
      id: 3,
      name: 'Mixed Mandi',
      imgUrl: '../../../../assets/foodtype/biryani.jpg',
      avilable: true,
      price: 500,
    },
    {
      id: 4,
      name: 'MockTails',
      imgUrl: '../../../../assets/foodtype/mocktials.jpg',
      avilable: false,
      price: 500,
    },
  ];
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

  constructor(private router: Router, private route: ActivatedRoute) {
    this.sub = new Subscription();
  }

  ngOnInit() {

  }

  /* Navigate to foodview*/
  navigateToDetail(categoryName: any) {
    this.router.navigate(['food', categoryName], { relativeTo: this.route });
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      const carouselElement = $('#myCarousel') as any;
      carouselElement.carousel({ interval: 1000 });
    }, 100);
    const data = this.getUniqueValues(foodItemsJson, "FoodType");
    this.data = this.getImgUrlsByNames(this.data, data)

  }

    private getUniqueValues(data: any[], fieldName: string | number) {
      const uniqueValuesSet = new Set(data.map(item => item[fieldName]));
      return Array.from(uniqueValuesSet);
    }

    private getImgUrlsByNames(data: any[], names: string[]): { name: string; imgUrl: string }[] {
      const result:{ name: string; imgUrl: string, avilable: Boolean }[] = [];

      names.forEach(name => {
        const category = data.find(category => category.name === name);
        if (category) {
          result.push({ name: name, imgUrl: category.imgUrl, avilable: true });
        }else{
          result.push({name: name, imgUrl: '../../../../assets/foodtype/MixedMandi.jpeg', avilable: true})
        }
      });
      return result;
    }
}
