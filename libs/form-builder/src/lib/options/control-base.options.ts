import { ValueObject } from '@cs-ng/utils'
import { ComponentsType } from '../enums/components.enum'
import { ValidationOptions } from './validation.options'

export interface ControlBaseOptions {
  label: string
  value: string | number | boolean
  tooltip: string
  placeholder: string
  readonly: boolean
  disabled: boolean
  controlType:
    | ComponentsType.CHECKBOX
    | ComponentsType.INPUT
    | ComponentsType.RADIO
    | ComponentsType.SELECT
    | ComponentsType.TEXTAREA
  validations?: ValidationOptions
  customValidators?: string[]
  validationMessages?: ValueObject<string>
}
