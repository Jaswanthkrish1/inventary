import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  ElementRef,
  Renderer2,
} from '@angular/core';
import { FoodItem } from '../../../structures/structure';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { FoodDetails } from '../pages/food-details.component';
import { animate, style, transition, trigger } from '@angular/animations';
@Component({
  selector: 'food-foodview',
  templateUrl: './foodview.component.html',
  styles: [
    `
    .grid {
  display: grid;
  gap: 2rem;
  grid-template-columns: repeat(auto-fit, minmax(100px,0.3fr));
  justify-items: center;
  margin-bottom: 20px;
}
.grid-item {
  position: relative;
}

.card-food {
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-align: center;
  width:fit-content;
}
.card-content {
  padding: 10px;
  text-align: center;
}
.price,
.description {
  margin: 10px;
  z-index: 2; /* Place the text above the overlay */
}

.img {
  max-width: 100%;
  max-height: 100%;
  object-fit: cover; /* Maintain aspect ratio and cover the entire space */
}

body {
  margin: 2rem;
}

@media (max-width: 500px) {
  .grid {
    display: grid;
    gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
    margin-bottom: 10px;
  }
  .img {
    max-width: 100%;
    max-height: 100%;
    object-fit: cover; /* Maintain aspect ratio and cover the entire space */
  }

  .card {
    background: #fff;
    border: 1px solid #ccc;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    overflow: hidden;
    text-align: center;
  }
  .card-content {
    padding: 0px;
    text-align: center;
  }
  .price,
  .description {
    margin: 0px;
    z-index: 2; /* Place the text above the overlay */
  }

  body {
    margin: 1rem;
    padding:1rem
  }
}

    `,
  ],
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
  selectedFoodItem: any;

  public isDropdownOpen: boolean = false;
  public selectedFilter: string = '';

  foodTypes: string[] = [];
  structuredFoodType: { [key: string]: FoodItem[] } = {};
  foodType: FoodItem[] = [
    {
      category: 'staters',
      type: 'wet',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'staters',
      type: 'wet',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'staters',
      type: 'dry',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'staters',
      type: 'dry',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'staters',
      type: 'dry',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'staters',
      type: 'veg',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'staters',
      type: 'veg',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'staters',
      type: 'veg',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'staters',
      type: 'wet',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'Mandi',
      type: 'JuiceMandi',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'Mandi',
      type: 'FryMandi',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'Mandi',
      type: 'FryMandi',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'mandi',
      type: 'FryMandi',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'mandi',
      type: 'JuiceMandi',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'mandi',
      type: 'JuiceMandi',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'Mandi',
      type: 'JuiceMandi',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'Mandi',
      type: 'FryMandi',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'Mandi',
      type: 'FryMandi',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'mandi',
      type: 'FryMandi',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'mandi',
      type: 'JuiceMandi',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'mandi',
      type: 'JuiceMandi',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'MockTails',
      type: 'juice',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'MockTails',
      type: 'juice',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
    {
      category: 'MockTails',
      type: 'juice',
      name: 'dragonchiken',
      url: '../../../../assets/dynamicimg/mandi.jpeg',
      price: 100,
    },
  ];

  constructor(
    private route: ActivatedRoute,
    private renderer: Renderer2,
    private _dialog: MatDialog
  ) {
    this.sub = new Subscription();
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
  ngOnInit(): void {
    this.sub.add(
      this.route.paramMap.subscribe((params) => {
        const key = params.get('category');
        if (key) {
          this.getFoods(key);
        }
      })
    );
    this.foodTypes = Object.keys(this.structuredFoodType);
  }

  getFoods(key: any) {
    const filteredFoodType = this.foodType.filter(
      (item) => item.category.toLowerCase() === key.toLowerCase()
    );
    this.structuredFoodType = filteredFoodType.reduce((acc, item) => {
      if (!acc[item.type]) {
        acc[item.type] = [];
      }
      acc[item.type].push(item);
      return acc;
    }, {} as { [key: string]: FoodItem[] });
  }

  selectedType: string = '';
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
