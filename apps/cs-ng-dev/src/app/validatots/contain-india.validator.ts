import { AbstractControl, ValidatorFn } from '@angular/forms'
import { FormBuilderValidatorBehaviour } from '@cs-ng/form-builder'

export class ContainIndiaValidator implements FormBuilderValidatorBehaviour {
  readonly name = 'containIndia'

  validate(): ValidatorFn {
    return (control: AbstractControl) => {
      if (control.value.includes('india')) return null
      return { containIndia: true }
    }
  }
}
