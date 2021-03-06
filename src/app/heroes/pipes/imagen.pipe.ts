import { Pipe, PipeTransform } from '@angular/core';
import { Heroe } from '../interfaces/heroes.interface';

@Pipe({
  name: 'imagen',
  pure: false
})
export class ImagenPipe implements PipeTransform {

  transform(value: Heroe, ...args: unknown[]): unknown {
    let url = "./assets/heroes"
    console.log("pipe pipe");
    if (!value.id && !value.alt_img) {
      // console.log(`${url}/${value}`)
      return `./assets/no-image.png`
    } else if (value.alt_img) {
      return value.alt_img;
    }
    return `${url}/${value.id}.jpg`
  }

}
