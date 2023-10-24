import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
    selector: 'food-foodDetils',
    templateUrl: './food-details.component.html',
    styles: []
})

export class FoodDetails {
    
    selectedFoodItem: any;

    constructor(private router: Router, private route: ActivatedRoute) {}
  
    closeModal() {
      // Use Angular router to navigate back to the previous route (food list)
      this.router.navigate([{ outlets: { modal: null } }],{ relativeTo: this.route });
    }
}