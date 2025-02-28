import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  standalone: true,
  name: 'words'
})
export class WordsPipe implements PipeTransform {

  transform(value: string,): string {
    if(value.length < 95){
      return value
    }
    return value.slice(0, 95) + '...'
  }

}
