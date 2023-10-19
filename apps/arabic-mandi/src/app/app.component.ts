import { Component ,AfterViewInit} from '@angular/core';
import { ElementRef, QueryList, ViewChildren } from '@angular/core';


@Component({
 
  selector: 'food-root',
 templateUrl: 'app.component.html',
})
export class AppComponent implements AfterViewInit{
  title = 'arabic-mandi';
  @ViewChildren ('tooltipButton') tooltipButtons!: QueryList<ElementRef> ;
  ngAfterViewInit(): void {
    // Access the DOM elements using QueryList and ElementRef
    this.tooltipButtons.forEach((tooltipButton: ElementRef) => {
    });
  }
}
