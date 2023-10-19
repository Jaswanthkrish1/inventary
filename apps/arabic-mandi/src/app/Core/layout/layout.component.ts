import { AfterViewInit, OnInit, Component, ElementRef, HostListener, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'food-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
})
export class LayoutComponent implements AfterViewInit , OnInit{
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  ngOnInit(): void {
  this.onWindowScroll();
  
  }
  isScrolled = false;
  @HostListener('window:scroll', [])
 
  onWindowScroll() {
    if (window.scrollY > 100) {
      this.isScrolled = true;
    } else {
      this.isScrolled = false;
    }
  }
   @ViewChildren ('tooltipButton') tooltipButtons!: QueryList<ElementRef> ;
  ngAfterViewInit(): void {
    // Access the DOM elements using QueryList and ElementRef
    this.tooltipButtons.forEach((tooltipButton: ElementRef) => {
    });
    
  }
}
