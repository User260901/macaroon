import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartProductsService {
  itemsInCart: number = 0
  totalPrice: number = 0
  constructor() { }

}
