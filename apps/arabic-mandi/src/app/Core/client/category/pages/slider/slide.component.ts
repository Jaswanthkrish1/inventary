import { AfterViewInit, Component, OnInit } from "@angular/core";
import { comboOffer } from "../../../../structures/structure";
declare var $: any;

@Component({
    selector: 'food-slide',
    templateUrl: './slide.component.html',
    styleUrls: ['./slide.component.css'],
})
export class SlideComponent implements OnInit{
  ngOnInit(): void {
    setTimeout(() => {
      const carouselElement = $('#myCarousel') as any;
      carouselElement.carousel({ interval: 100 });
    }, 100);
  }


  dataCombo: comboOffer[] = [
    {
      id: 1,
      name: 'Family',
      price: 550,
      imgUrl: '../../../../assets/carousel/bg1.jpeg',
      discription:
        'Special offer for family upto 10% discount.....................',
      for: 'Sunday',
      discount: '10%',
    },
    {
      id: 2,
      name: 'Friends',
      price: 500,
      imgUrl: '../../../../assets/carousel/bg2.jpeg',
      discription:
        'Special offer for Friends upto 10% discount.....................',
      for: 'Sunday',
      discount: '10%',
    },
    {
      id: 3,
      name: 'Childran',
      price: 450,
      imgUrl: '../../../../assets/Combo/Combo2.gif',
      discription:
        'Special offer for Childran upto 10% discount.....................',
      for: 'Sunday',
      discount: '10%',
    },
    {
      id: 4,
      name: 'Childran',
      price: 450,
      imgUrl: '../../../../assets/Combo/Combo2.gif',
      discription:
        'Special offer for Childran upto 10% discount.....................',
      for: 'Sunday',
      discount: '10%',
    },
    {
      id: 5,
      name: 'data',
      price: 450,
      imgUrl: '../../../../assets/Combo/Combo2.gif',
      discription:
        'Special offer for Childran upto 10% discount.....................',
      for: 'Sunday',
      discount: '10%',
    },
  ];
   
   
  
} 