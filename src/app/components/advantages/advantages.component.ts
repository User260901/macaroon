import {Component, Input} from '@angular/core';
import {AdvantagesType} from '../../types/advantages.type';
import {WordsPipe} from '../../pipes/words.pipe';

@Component({
  selector: 'advantages',
  imports: [
    WordsPipe
  ],
  standalone: true,
  templateUrl: './advantages.component.html',
  styleUrl: './advantages.component.scss'
})
export class AdvantagesComponent {
  @Input() advantages: AdvantagesType = {} as AdvantagesType
  @Input() index: number = 0

}
