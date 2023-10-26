import { Component ,AfterViewInit} from '@angular/core';
import { ElementRef, QueryList, ViewChildren } from '@angular/core';


@Component({
 
  selector: 'food-root',
  template: `<router-outlet></router-outlet>`,
})
export class AppComponent {
  title = 'arabic-mandi';
  
}
