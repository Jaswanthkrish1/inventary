export class LocationConfig {
    images!: LocationImage[] ;
  }
  
  export interface LocationImage {
    title: string;
    url: string;
    alt: string;
  }