import { FormControl } from '@angular/forms'
import { FormBuilderOptions } from '../../options/form-builder.options'

export interface MessageControlOptions {
  key:string
  formControl: FormControl
  controls: FormBuilderOptions
}
