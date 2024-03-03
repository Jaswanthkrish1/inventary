import { Component, OnInit, AfterViewInit } from '@angular/core';
import { comboOffer } from '../../structures/structure'
import { MatDialog } from '@angular/material/dialog';
import { trigger, transition, style, animate } from '@angular/animations';
import { FoodDetails } from '../category/components/food-details.component';
declare var $: any;
@Component({
  selector: 'food-combo',
  templateUrl: './combo.component.html',
  styleUrls: ['./combo.component.scss'],
  animations: [
    trigger('slideIn', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('2000ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class FoodComboComponent implements OnInit, AfterViewInit {
  constructor(private _dialog: MatDialog) {}
  structuredFoodType: { [key: string]: comboOffer[] } = {};
  public visible=true
  foodTypes: string[] = [];
  data: comboOffer[] = [
    {
      id: 1,
      name: 'Family',
      price: 550,
      imgUrl: '../../../../../assets/Combo/combo.jpg',
      discription:
        'Special offer for family upto 10% discount.....................',
        discount:'10',
        for:''
    },
    {
      id: 2,
      name: 'Friends',
      price: 500,
      imgUrl: '../../../../assets/dynamicimg/mandi.jpeg',
      discription:
        'Special offer for Friends upto 10% discount.....................',
        discount:'10',
        for:''
    },
    {
      id: 1,
      name: 'Family',
      price: 550,
      imgUrl: '../../../../../assets/Combo/combo.jpg',
      discription:
        'Special offer for family upto 10% discount.....................',
        discount:'10',
        for:''
    },
    {
      id: 2,
      name: 'Friends',
      price: 500,
      imgUrl: '../../../../../assets/Combo/combo.jpeg',
      discription:
        'Special offer for Friends upto 10% discount.....................',
        discount:'10',
        for:''
    },
    {
      id: 1,
      name: 'Family',
      price: 550,
      imgUrl: '../../../../../assets/Combo/combo.jpg',
      discription:
        'Special offer for family upto 10% discount.....................',
        discount:'10',
        for:''
    },
    {
      id: 2,
      name: 'Friends',
      price: 500,
      imgUrl: '../../../../../assets/Combo/combo.jpg',
      discription:
        'Special offer for Friends upto 10% discount.....................',
        discount:'10',
        for:''
    },
    {
      id: 1,
      name: 'Family',
      price: 550,
      imgUrl: '../../../../../assets/Combo/combo.jpg',
      discription:
        'Special offer for family upto 10% discount.....................',
        discount:'10',
        for:''
    },
    {
      id: 2,
      name: 'Friends',
      price: 500,
      imgUrl: '../../../../../assets/Combo/combo.jpg',
      discription:
        'Special offer for Friends upto 10% discount.....................',
        discount:'10',
        for:''
    },
    
  ];


  ngAfterViewInit(): void {}
  openDilog(data: any) {
    this._dialog.open(FoodDetails, {
      width: '500px',
      data: { Item: data },
    });
  }

  getCombo() {
    this.structuredFoodType = this.data.reduce((acc, item) => {
      if (!acc[item.name]) {
        acc[item.name] = [];
      }
      acc[item.name].push(item);
      return acc;
    }, {} as { [key: string]: comboOffer[] });
  }
  ngOnInit(): void {
    this.getCombo();
    this.foodTypes = Object.keys(this.structuredFoodType);
   this.visible=false 
  }
}
