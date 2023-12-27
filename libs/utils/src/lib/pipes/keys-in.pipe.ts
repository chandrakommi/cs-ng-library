import { Pipe, PipeTransform } from '@angular/core'
import { keysIn } from 'lodash'
import { ValueObject } from '../options/value-object.option'

@Pipe({
  name: 'keysIn',
})
export class KeysInPipe implements PipeTransform {
  transform(value: ValueObject<unknown>): any {
    if (!value) return []
    return keysIn(value)
  }
}
