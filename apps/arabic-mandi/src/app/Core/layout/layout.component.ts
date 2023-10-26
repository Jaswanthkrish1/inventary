import { trigger, transition, style, animate } from '@angular/animations';
import { AfterViewInit, OnInit, Component, ElementRef, HostListener, QueryList, Renderer2, ViewChildren } from '@angular/core';

@Component({
  selector: 'food-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class LayoutComponent implements AfterViewInit , OnInit{
  constructor(private el: ElementRef, private renderer: Renderer2) {}
  navigate(navOption:any){
    const contactSection = document.getElementById(navOption);
    if (contactSection) {
      const yOffset = contactSection.getBoundingClientRect().top + window.pageYOffset;
      this.renderer.setProperty(document.documentElement, 'scrollTop', yOffset);
    }
  }
  scrollToBottom() {
    const contactSection = document.getElementById('location'); // Replace with the actual ID of your "Contact" section

    if (contactSection) {
      const yOffset = contactSection.getBoundingClientRect().top + window.pageYOffset;
      this.renderer.setProperty(document.documentElement, 'scrollTop', yOffset);
    }
  }
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
