import { AbstractControl, ValidatorFn } from '@angular/forms'
import { FormBuilderValidatorBehaviour } from '@cs-ng/form-builder'

export class ContainPakValidator implements FormBuilderValidatorBehaviour {
  readonly name = 'contain-pak'

  validate(): ValidatorFn {
    return (control: AbstractControl) => {
      return control.value.includes('pak') ? null : { containPak: true }
    }
  }
}
