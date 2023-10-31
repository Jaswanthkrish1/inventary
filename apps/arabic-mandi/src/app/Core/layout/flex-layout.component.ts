import { Component, Renderer2 } from '@angular/core';
import { MenuItem } from './menu';

@Component({
  selector: 'main-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.css'],
  
})
export class MainLayout {
  menuItems: MenuItem[] = [
    {
      label: 'Home',
      icon: '',
      link: '/home',
      header: false,
    },
    {
      label: 'Menu',
      icon: 'help',
      link: '/menu',
      header: false,
    },
    {
      label: 'Combo',
      icon: '',
      link: '/combo',
      header: false,
    },
    {
      label: 'Arabic Mandi',
      icon: '',
      link: '/home',
      header: true,
    },
    {
      label: 'About',
      icon: 'notes',
      link: '/about',
      header:false
    },
    {
      label: 'location',
      icon: 'notes',
      link: '/location',
      header:false
    },
    {
      label: 'Contact',
      icon: 'notes',
      link: '/contact',
      header:false
    },
  ];

  constructor(  private renderer: Renderer2) {}

  ngOnInit(): void {}

  navigate(navOption:any){
   
    const contactSection = document.getElementById(navOption);
    if (contactSection) {
      const yOffset = contactSection.getBoundingClientRect().top + window.pageYOffset;
      this.renderer.setProperty(document.documentElement, 'scrollTop', yOffset);
  }
}
}
