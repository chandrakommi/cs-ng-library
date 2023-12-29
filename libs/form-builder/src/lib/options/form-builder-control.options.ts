import { FormControl, FormGroup } from '@angular/forms'
import { ControlBaseOptions } from './control-base.options'
import { FormBuilderOptions } from './form-builder.options'

export interface FormBuilderControlOptions {
  formGroup: FormGroup
  formControl: FormControl
  key: string
  control: ControlBaseOptions
  controls: FormBuilderOptions
}
