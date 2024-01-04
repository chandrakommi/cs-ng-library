import { ComponentsType } from '../../enums/components.enum'
import { ControlBaseOptions } from '../../options/control-base.options'

export interface InputControlOptions extends ControlBaseOptions {
  controlType: ComponentsType.INPUT
  type?: 'text' | 'email' | 'number' | 'password'
}
