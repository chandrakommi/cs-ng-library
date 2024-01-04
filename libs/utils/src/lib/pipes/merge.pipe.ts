import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'merge',
})
export class MergePipe implements PipeTransform {
  transform(obj1: any, obj2: any): any {
    return { ...obj1, ...obj2 }
  }
}
