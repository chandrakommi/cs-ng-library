import { Pipe, PipeTransform } from '@angular/core'
import { ValueObject } from '../options/value-object.option'

@Pipe({
  name: 'get',
})
export class GetPipe implements PipeTransform {
  transform(value: ValueObject<string>, args: string): any {
    if (!value) return []
    return value[args]
  }
}
