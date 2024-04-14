import { Pipe, PipeTransform } from '@angular/core';
import { User } from '../../../app/interfaces/user.interface';

@Pipe({
  name: 'filter',
  pure: false
})
export class FilterPipe implements PipeTransform {

  transform<T>(items: User[], filterBy: number):User[]{
    if (!items || !filterBy) {
      return items;
  }
  return items.filter(item => item.id == filterBy);
  }

}
