import { Injectable } from '@angular/core'
import { FormBuilderOptions } from '../options/form-builder.options'
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms'
import { keysIn } from 'lodash'
import { ValidationOptions } from '../options/validation.options'
@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  private _formGroup: FormGroup
  constructor(private _fb: FormBuilder) {
    this._formGroup = this._fb.group({})
  }
  buildForm(controls: FormBuilderOptions['controls']) {
    keysIn(controls).forEach(key => {
      this._formGroup.addControl(
        key,
        this._fb.control(
          controls[key].value,
          this._buildValidators(controls[key].validations),
        ),
      )
    })
    return this._formGroup
  }

  private _buildValidators(validations: ValidationOptions | undefined) {
    if (!validations) {
      return
    }
    const { required, email, minLength, maxLength, min, max, pattern } =
      validations

    const validators: ValidatorFn[] = []

    if (required) validators.push(Validators.required)
    if (minLength) validators.push(Validators.minLength(minLength))
    if (maxLength) validators.push(Validators.maxLength(maxLength))
    if (min) validators.push(Validators.min(min))
    if (max) validators.push(Validators.max(max))
    if (pattern) validators.push(Validators.pattern(pattern))
    if (email) validators.push(Validators.email)

    return Validators.compose(validators)
  }
}
