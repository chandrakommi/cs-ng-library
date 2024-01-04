import { AbstractControl, ValidatorFn } from '@angular/forms'
import { FormBuilderValidatorBehaviour } from '@cs-ng/form-builder'

export class ContainIndiaValidator implements FormBuilderValidatorBehaviour {
  readonly name = 'containIndia'

  validate(): ValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value.trim() as string
      if (!value) return null
      if (value.toLocaleLowerCase().includes('india')) return null
      return { containIndia: true }
    }
  }
}

export class ContainPakValidator implements FormBuilderValidatorBehaviour {
  readonly name = 'contain-pak'

  validate(): ValidatorFn {
    return (control: AbstractControl) => {
      const value = control.value.trim() as string
      if (!value) return null
      return value.toLocaleLowerCase().includes('pak')
        ? null
        : { containPak: true }
    }
  }
}
