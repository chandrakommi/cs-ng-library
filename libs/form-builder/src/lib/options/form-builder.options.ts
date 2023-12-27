import { ValueObject } from '@cs-ng/utils'
import { InputControlOptions } from '../components/input/input.options'
import { LayoutOptions } from './layout.options'
import { ControlBaseOptions } from './control-base.options'

export interface FormBuilderOptions {
  controls: ValueObject<ControlBaseOptions>
  validationMessages: ValueObject<string>
  layout: LayoutOptions
}
