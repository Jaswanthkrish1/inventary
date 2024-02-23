import { CommonModule } from "@angular/common";
import { AfterViewInit, Component } from "@angular/core";
import { comboOffer } from "../../../../structures/structure";
import { CarouselModule } from 'ngx-bootstrap/carousel';
declare var $: any; 
@Component({
    standalone : true,
    imports:[CommonModule,CarouselModule],
    selector: 'carousel-app',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements AfterViewInit{
    dataCombo: comboOffer[] = [
        {
          id: 1,
          name: 'Family',
          price: 550,
          imgUrl: '../../../../assets/carousel/bg1.jpeg',
          discription:
            'Special Offer For Students & Family Upto 10% Discount .....................',
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
      ];
    constructor(){}
    ngAfterViewInit(): void {
        $(document).ready(() => {
            $('.carousel').carousel();
          });
    }
}