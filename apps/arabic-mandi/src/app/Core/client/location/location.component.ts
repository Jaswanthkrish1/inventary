import { trigger, transition, style, animate } from '@angular/animations';
import { Component, AfterViewInit, OnInit } from '@angular/core';
import {
  LocationConfig,
  LocationImage,
} from '../../client/structure_config/location';
import * as L from 'leaflet';

@Component({
  selector: 'layout-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css'],
  animations: [
    trigger('fadeIn1', [
      transition(':enter', [
        style({ opacity: 0 }),
        animate('3000ms', style({ opacity: 1 })),
      ]),
    ]),
  ],
})
export class LocationComponent implements OnInit, AfterViewInit {
  private map!: L.Map;
  public galleryImg!: LocationImage[];

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
       <img src="../../../../assets/location/wellcome.jpg" alt="Image Alt Text" width="200px">
       <p>Location Name: Arabic Mandi</p>
       <a href="https://www.google.com/search?sca_esv=570249222&hl=en-IN&gl=IN&sxsrf=AM9HkKkNj0QhtYkxZOzbd4y4JSLwuycE4Q:1696305904287&q=Arabic+Mandi+Multicuisine+Restaurent&ludocid=17657452288862018514&ibp=gwp;0,7&lsig=AB86z5XYk3dnQIsM2nhK_UEc0TrJ&kgs=a5b8c4b76716e17a&shndl=-1&shem=lbsc,lsp&source=sh/x/kp/local/m1/2">Navigate</a>
       
       </div>
       `;
    marker.bindPopup(popupContent);
  }
  ngAfterViewInit(): void {
    this.initMap();
  }

  ngOnInit(): void {
    this.galleryImg = [
      {
        url: '../../../../assets/location/wellcome.jpg',
        alt: 'photo1',
        title: '',
      },
      {
        url: '../../../../assets/location/Rooms.jpg',
        alt: 'photo1',
        title: '',
      },
      {
        url: '../../../../assets/location/waitingarea.jpg',
        alt: 'photo1',
        title: '',
      },
      {
        url: '../../../../assets/location/firstRoom.jpg',
        alt: 'photo1',
        title: '',
      },
      {
        url: '../../../../assets/location/tables.jpg',
        alt: 'photo1',
        title: '',
      },
    ];
  }
}
