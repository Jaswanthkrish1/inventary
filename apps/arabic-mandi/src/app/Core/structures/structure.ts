export interface comboOffer {
    id: number,
   name : string,
   price: number,
   imgUrl:string,
   discription:string
}
export interface CategoriesOrder {
    id: number,
   name : string,
   price: number,
   imgUrl:string,
   quantity:number,
   avilable:boolean,
   for:string
}
export interface Categories {
    id: number,
   name : string,
   price: number,
   imgUrl:string,
   avilable:boolean,
}

export interface FoodItem {
    category:string,
    type: string;
    name: string;
    url: string;
    price: number;
  }




