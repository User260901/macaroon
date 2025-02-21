import {Component, Input} from '@angular/core';
import {ProductType} from '../../types/product.type';

@Component({
  selector: 'product',
  imports: [],
  standalone: true,
  templateUrl: './product.component.html',
  styleUrl: './product.component.scss'
})
export class ProductComponent {
  @Input() product:ProductType = {} as ProductType;

}
