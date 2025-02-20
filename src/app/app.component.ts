import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {NgForOf, NgIf} from '@angular/common';
import {ProductType} from './types/product.type';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NgForOf, FormsModule, NgIf],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  advantages = [
    {
      title: 'Лучшие продукты',
      description: 'Мы честно готовим макаруны только из натуральных и качественных продуктов. Мы не используем консерванты ароматизаторы и красители.'
    },
    {
      title: 'Много вкусов',
      description: ' Наша задача – предоставить вам широкое разнобразие вкусов. Вы удивитесь, но у нас более 70 вкусов пироженок..'
    },
    {
      title: 'Бисквитное тесто',
      description: ' Все пирожные готовятся на бисквитном тесте с качественным сливочным маслом 82,5%. В составе нет маргарина и дрожжей!.'
    },
    {
      title: ' Честный продукт',
      description: 'Вкус, качество и безопасность наших пирогов подтверждена декларацией о соответствии, которую мы получили 22.06.2016 г.'
    },
  ]

  products: ProductType[] = [
    {
      title:"Макарун с малиной",
    },
    {
      title:"Макарун с манго",
    },
    {
      title:"Пирог с ванилью",
    },
    {
      title:"Пирог с фисташками",
    },
  ]

  public formValues = {
    productTitle: '',
  }

  public scrollTo(target: HTMLElement): void {
    target.scrollIntoView({behavior: "smooth"})
  }

  public addToCart(product: ProductType, target:HTMLElement ):void {
    this.scrollTo(target)
    this.formValues.productTitle = product.title
  }

  showPresent = true
  href = 'https://instagram.com'
  phoneNumber = '+375 (29) 368-98-68'
}
