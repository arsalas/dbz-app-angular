import { Pipe, PipeTransform } from '@angular/core';
import { environment } from 'src/environments/environments';

@Pipe({
  name: 'image',
})
export class ImagePipe implements PipeTransform {
  transform(image: string, type: string): string {
    const baseUrl = environment.apiUrl;

    switch (type) {
      case 'loading':
        return `${baseUrl}/cdn/img/champion/loading/${image}_0.jpg`;

      default:
        break;
    }

    return 'null';
  }
}
