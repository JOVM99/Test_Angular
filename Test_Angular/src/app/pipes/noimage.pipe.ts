//Pipe para colocar una imagen en caso de que no venga en la Api
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noimage',
})
export class NoimagePipe implements PipeTransform {
  transform(image: string | null): string {
    return image ? image : 'assets/img/noimage.png';
  }
}
