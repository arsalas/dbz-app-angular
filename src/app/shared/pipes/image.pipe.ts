import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environments';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(image: string, type: string, skin?: number): string {
    const baseUrl = environment.apiUrl;
    if (!skin) skin = 0;
    switch (type) {
      case 'avatar':
        return `${baseUrl}/cdn/img/champion/${image}.png`;
      case 'loading':
        return `${baseUrl}/cdn/img/champion/loading/${image}_${skin}.jpg`;
      case 'splash':
        return `${baseUrl}/cdn/img/champion/splash/${image}_${skin}.jpg`;
      case 'spell':
        return `${baseUrl}/cdn/13.13.1/img/spell/${image}`;
      case 'passive':
        return `${baseUrl}/cdn/13.13.1/img/passive/${image}`;
      default:
        break;
    }

    return 'null';
  }
}
