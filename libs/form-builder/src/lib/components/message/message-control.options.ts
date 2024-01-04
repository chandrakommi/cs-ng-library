import { FormGroup } from '@angular/forms'
import { FormBuilderOptions } from '../../options/form-builder.options'

export interface MessageControlOptions {
  key: string
  formGroup: FormGroup
  controls: FormBuilderOptions
}
