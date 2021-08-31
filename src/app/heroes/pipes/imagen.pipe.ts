import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(value: Heroe, ...args: unknown[]): unknown {
    let url = "./assets/heroes"
    if (value != null) {
      // console.log(`${url}/${value}`)
      return `${url}/${value.id}.jpg`
    } else {

      return `${url}/no-imagen.png`
    }

  }

}
