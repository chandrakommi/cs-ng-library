import { Pipe, PipeTransform } from '@angular/core'
import { keysIn } from 'lodash'
import { ValueObject } from '../options/value-object.option'

@Pipe({
  name: 'keysIn',
})

/**
 *
 * @description  Returns the key names of the own and inherited enumerable string keyed properties of value.
 * @param value any
 * @returns string[]
 *
 */
export class KeysInPipe implements PipeTransform {
  transform(value: any): string[] {
    if (!value) return []
    return keysIn(value)
  }
}
