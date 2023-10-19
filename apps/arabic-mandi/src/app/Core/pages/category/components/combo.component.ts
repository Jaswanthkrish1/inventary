import { Component, OnInit, AfterViewInit } from '@angular/core';
import { comboOffer } from '../../../structures/structure';
declare var $: any;
@Component({
  selector: 'food-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.css'],
})
export class FoodComboComponent implements OnInit, AfterViewInit {
  constructor() {}
  data: comboOffer[] = [
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
  ];
  ngAfterViewInit(): void {
    setTimeout(() => {
      const carouselElement = $('#myCarousel') as any;
      carouselElement.carousel({ interval: 1000 });
    }, 100);
  }
  ngOnInit(): void {}
}
