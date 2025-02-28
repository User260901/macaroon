import {Component, EventEmitter, Input, Output,} from '@angular/core';
import {ProductType} from '../../types/product.type';
import {CartProductsService} from '../../services/cart-products.service';
import {CoolButtonDirective} from '../../directives/cool-button.directive';
import {CurrencyPipe, registerLocaleData} from '@angular/common';
import localeRu from '@angular/common/locales/ru';

registerLocaleData(localeRu, 'ru')
@Component({
  selector: 'product',
  imports: [
    CoolButtonDirective,
    CurrencyPipe
  ],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent{
  @Input() product:ProductType = {} as ProductType;
  @Output() eventEmitter: EventEmitter<any> = new EventEmitter<any>()

  constructor(private _CartProductsService: CartProductsService) {}

  addToCart(){
    this._CartProductsService.itemsInCart++
    this._CartProductsService.totalPrice += this.product.price
    this.eventEmitter.emit(this.product.title)
  }

}
