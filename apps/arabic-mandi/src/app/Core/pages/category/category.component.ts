import { Component, OnInit, AfterViewInit } from '@angular/core';
import * as L from 'leaflet';
import { Categories, comboOffer } from '../../structures/structure';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { trigger, transition, style, animate } from '@angular/animations';
declare var $: any;

@Component({
  selector: 'food-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.css'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('1000ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3000ms', style({ opacity: 1 })),
      ]),
    ]),
    trigger('fadeIn1', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('4000ms', style({ opacity: 1 })),
      ]),
    ]),
    
  ],
})
export class CategoryComponent implements OnInit, AfterViewInit {
  private map!: L.Map;
  sub: Subscription;
  data: Categories[] = [
    {
      id: 1,
      name: 'Mandi',
      imgUrl: '../../../../assets/dynamicimg/mandi.jpeg',
      avilable: true,
      price: 500,
    },
    {
      id: 2,
      name: 'Staters',
      imgUrl: '../../../../assets/dynamicimg/mandi.jpeg',
      avilable: true,
      price: 500,
    },
    {
      id: 3,
      name: 'Juices',
      imgUrl: '../../../../assets/dynamicimg/mandi.jpeg',
      avilable: true,
      price: 500,
    },
    {
      id: 4,
      name: 'MockTails',
      imgUrl: '../../../../assets/dynamicimg/mandi.jpeg',
      avilable: true,
      price: 500,
    },
    {
      id: 4,
      name: 'MockTails',
      imgUrl: '../../../../assets/dynamicimg/mandi.jpeg',
      avilable: true,
      price: 500,
    },
  ];
  dataCombo: comboOffer[] = [
    {
      id: 1,
      name: 'Family',
      price: 550,
      imgUrl: '../../../../assets/Combo/combo1.jpeg',
      discription:
        'Special offer for family upto 10% discount.....................',
    },
    {
      id: 2,
      name: 'Friends',
      price: 500,
      imgUrl: '../../../../assets/Combo/Combo3.jpeg',
      discription:
        'Special offer for Friends upto 10% discount.....................',
    },
    {
      id: 3,
      name: 'Childran',
      price: 450,
      imgUrl: '../../../../assets/Combo/Combo2.gif',
      discription:
        'Special offer for Childran upto 10% discount.....................',
    },
    {
      id: 3,
      name: 'Childran',
      price: 450,
      imgUrl: '../../../../assets/Combo/Combo2.gif',
      discription:
        'Special offer for Childran upto 10% discount.....................',
    },
    {
      id: 3,
      name: 'data',
      price: 450,
      imgUrl: '../../../../assets/Combo/Combo2.gif',
      discription:
        'Special offer for Childran upto 10% discount.....................',
    },
  ];

  constructor(private router: Router, private route: ActivatedRoute) {
    this.sub = new Subscription();
  }

  ngOnInit() {}
  /* Navigate to foodview*/
  navigateToDetail(categoryName: any) {
    this.router.navigate(['food', categoryName], { relativeTo: this.route });
  }
  initMap() {
    this.map = L.map('map').setView([13.7496064, 79.689494], 20);
    // Add an OpenStreetMap tile layer
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: 'Arabic Mandi : 13.7496064 , 79.6894940',
    }).addTo(this.map);
    const marker = L.marker([13.7496064, 79.689494]).addTo(this.map);
    // initial popup
    const customPopup = L.popup().setContent(`
     <div>
       <img src="../../../../assets/Combo/wellcome.jpg" alt="Image Alt Text" width="100">
       <p>Location Name: Arabic Mandi</p>
       <a herf="https://www.google.com/search?sca_esv=570249222&hl=en-IN&gl=IN&sxsrf=AM9HkKkNj0QhtYkxZOzbd4y4JSLwuycE4Q:1696305904287&q=Arabic+Mandi+Multicuisine+Restaurent&ludocid=17657452288862018514&ibp=gwp;0,7&lsig=AB86z5XYk3dnQIsM2nhK_UEc0TrJ&kgs=a5b8c4b76716e17a&shndl=-1&shem=lbsc,lsp&source=sh/x/kp/local/m1/2">Navigate</a>
     </div>
   `);

    // Bind the custom HTML element to the marker and open it by default
    marker.bindPopup(customPopup).openPopup();

    // after Click PopUp
    const popupContent = `
      <div>
        <img src="../../../../assets/Combo/wellcome.jpg" alt="Image Alt Text" width="200px">
        <p>Location Name: Arabic Mandi</p>
       <a href="https://www.google.com/search?sca_esv=570249222&hl=en-IN&gl=IN&sxsrf=AM9HkKkNj0QhtYkxZOzbd4y4JSLwuycE4Q:1696305904287&q=Arabic+Mandi+Multicuisine+Restaurent&ludocid=17657452288862018514&ibp=gwp;0,7&lsig=AB86z5XYk3dnQIsM2nhK_UEc0TrJ&kgs=a5b8c4b76716e17a&shndl=-1&shem=lbsc,lsp&source=sh/x/kp/local/m1/2">Navigate</a>
      
      </div>
    `;
    marker.bindPopup(popupContent);
  }
  ngAfterViewInit(): void {
    this.initMap();
    setTimeout(() => {
      const carouselElement = $('#myCarousel') as any;
      carouselElement.carousel({ interval: 100 });
    }, 100);
  }
}
