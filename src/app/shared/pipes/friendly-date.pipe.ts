import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'friendlyDate'
})
export class FriendlyDatePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    
    const dt = new Date(value);
    
    return `${dt.toLocaleDateString('he-IL')} ${dt.toLocaleTimeString('he-IL')}`;
  }

}
