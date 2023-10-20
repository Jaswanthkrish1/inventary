import { Component, OnInit, OnDestroy } from '@angular/core';
import { FoodItem } from '../../../structures/structure';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'food-foodview',
  templateUrl: './foodview.component.html',
  styles: [
    `
    
    `,
  ],
})
export class FoodComponent implements OnInit, OnDestroy {
  public sub: Subscription;
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

  constructor(private route: ActivatedRoute) {
    this.sub = new Subscription();
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
