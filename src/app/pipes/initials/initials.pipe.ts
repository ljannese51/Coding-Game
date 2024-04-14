import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
  pure: false
})
export class InitialsPipe implements PipeTransform {
  transform<T>(user:string): unknown {
    return user.match(/(^\S\S?|\s\S)?/g)?.map((v: string) => v.trim()).join("").match(/(^\S|\S$)?/g)?.join("").toLocaleUpperCase()

  }

}
