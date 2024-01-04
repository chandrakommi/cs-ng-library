import { ValidatorFn } from '@angular/forms'

export interface FormBuilderValidatorBehaviour {
  readonly name: string
  validate(): ValidatorFn
}
