import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'validPhoneN',
  standalone: true
})
export class ValidPhoneNPipe implements PipeTransform {

  transform(value: string | number,): string {
    return value.toString().replace(/^(\d{3})(\d{2})(\d{3})(\d{2})(\d{2})$/, '+$1 ($2) $3-$4-$5');
  }

}
