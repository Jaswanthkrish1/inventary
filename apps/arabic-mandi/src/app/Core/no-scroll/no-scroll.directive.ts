import { Directive, HostListener } from '@angular/core';

@Directive({
  // eslint-disable-next-line @angular-eslint/directive-selector
  selector: '[nxNoScroll]'
})
export class NoScrollDirective {
  
 @HostListener('wheel', ['$event'])
  onWheel(event: Event) {
    event.preventDefault();
  }
}
