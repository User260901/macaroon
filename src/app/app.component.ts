import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {CurrencyPipe, NgForOf, NgIf} from '@angular/common';
import {ProductType} from './types/product.type';
import {FormsModule} from '@angular/forms';
import {ProductComponent} from './components/product/product.component';
import {ProductsService} from './services/products.service';
import {CartProductsService} from './services/cart-products.service';
import {AdvantagesComponent} from './components/advantages/advantages.component';
import {AdvantagesType} from './types/advantages.type';
import {CoolButtonDirective} from './directives/cool-button.directive';
import localeRu from '@angular/common/locales/ru';
import {ValidPhoneNPipe} from './pipes/valid-phone-n.pipe';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf, FormsModule, NgIf, ProductComponent, AdvantagesComponent, CoolButtonDirective, CurrencyPipe, ValidPhoneNPipe],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  providers: [{provide: ProductsService}]
})
export class AppComponent implements OnInit{
  advantages:AdvantagesType[] = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты ароматизаторы и красители. Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты ароматизаторы и красители. Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты ароматизаторы и красители',
    },
    {
      title: 'Много вкусов',
      description: ' Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок..',

    },
    {
      title: 'Бисквитное тесто',
      description: ' Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!.',
    },
    {
      title: ' Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.',
    },
  ]
  products: ProductType[] = []

  productItems: number = 0
  productPrice: number = 0

  constructor(private _ProductService:ProductsService, private _CartProductsService: CartProductsService) {
    this.productItems = this._CartProductsService.itemsInCart
  }

  ngOnInit() {
    this.products = this._ProductService.getProducts()
  }

  public formValues = {
    productTitle: '',
  }

  changes(item:string){
    this.productItems = this._CartProductsService.itemsInCart
    this.productPrice = this._CartProductsService.totalPrice
    alert(item + " добавлен в корзину!")
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  }

  // public addToCart(product: ProductType, target:HTMLElement ):void {
  //   this.scrollTo(target)
  //   this.formValues.productTitle = product.title
  // }

  showPresent = true
  href = 'https://instagram.com'
  phoneNumber = '375293689868'
}
