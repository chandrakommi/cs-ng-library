import { FormControl, FormGroup } from '@angular/forms'
import { ControlBaseOptions } from './control-base.options'

export interface FormBuilderControlOptions {
  formGroup: FormGroup
  formControl: FormControl
  key: string
  control: ControlBaseOptions
}
