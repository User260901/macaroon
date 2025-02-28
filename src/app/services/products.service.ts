import {Injectable} from '@angular/core';
import {ProductType} from '../types/product.type';

@Injectable()
export class ProductsService {
  constructor() {}

  getProducts(): ProductType[] {
    return [
      {
        title: "Макарун с малиной",
        image: "1",
        price: 170
      },
      {
        title: "Макарун с манго",
        image: "2",
        price: 150
      },
      {
        title: "Пирог с ванилью",
        image: "3",
        price: 140
      },
      {
        title: "Пирог с фисташками",
        image: "4",
        price: 180
      },
    ]
  }


}
