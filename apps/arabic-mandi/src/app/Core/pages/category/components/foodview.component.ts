import { Component, OnInit, OnDestroy, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { FoodItem } from '../../../structures/structure';
import { ActivatedRoute ,Router} from '@angular/router';
import { Subscription } from 'rxjs';
@Component({
  selector: 'food-foodview',
  templateUrl: './foodview.component.html',
  styles: [
    `
.list-group {
    display: flex;
    /* flex-direction: column; */
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: 0.25rem;
    flex-wrap: wrap;
    align-items: center;
    height: fit-content;
}
.list-group-item {
    position: relative;
    display: block;
    padding: 0.5rem 1rem;
    color: #212529;
    text-decoration: none;
    background-color: #fff;
    margin: 3px;
}
@media (min-width: 700px ) {
  
  .list-group {
    display: flex;
    /* flex-direction: column; */
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: 0.25rem;
    flex-wrap: wrap;
    align-items: center;
    height: fit-content;
    justify-content: space-evenly;
}
}
@media (max-width: 500px ) {
  
  .list-group {
    display: flex;
    flex-direction: row;
    padding-left: 0;
    margin-bottom: 0;
    border-radius: 0.25rem;
    flex-wrap: nowrap;
    align-items: center;
    height: fit-content;
}
}


    `,
  ],
})
export class FoodComponent implements OnInit, OnDestroy {


  public sub: Subscription;
  selectedFoodItem: any; 
  
  public isDropdownOpen: boolean = false;
  public selectedFilter: string = '';
  showModal: boolean = false;

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

  constructor(private route: ActivatedRoute, private renderer: Renderer2) {
    this.sub = new Subscription();
  }

  showFoodItemDetails(foodItem: any) {
    
    this.selectedFoodItem = foodItem;
    
    setTimeout(() => {
      // Trigger the modal by adding the data-bs-toggle and data-bs-target attributes
      const modal = document.getElementById('exampleModal');
      console.log(modal)
      if(modal){
        
      modal.setAttribute('data-bs-toggle', 'modal');
      modal.setAttribute('data-bs-target', '#exampleModal');
      }
    }, 1000); // Delay for 1000 milliseconds (adjust this as needed)
  }
 

@ViewChild('exampleModal') modal!: ElementRef; // Reference to the modal element
 // Assuming this is the selected food item

// Method to open the modal with a delay
openModalWithDelay() {

  setTimeout(() => {
    if(this.modal.nativeElement){
    const modal = this.modal.nativeElement;
    modal.show(); // Use Bootstrap's .show() method to display the modal
    }
  }, 1000); // Adjust the delay time (in milliseconds) as needed
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
