import { Injectable } from '@angular/core'
import { FormBuilderOptions } from '../options/form-builder.options'
import { FormBuilder, FormGroup, ValidatorFn, Validators } from '@angular/forms'
import { keysIn } from 'lodash'
import { ValidationOptions } from '../options/validation.options'
import { FormBuilderChangesTrackerService } from './form-builder-changes-tracker.service'
import { FormBuilderValidatorRegistryService } from '../registry/validator/form-builder-validator-registry.service'
import { ControlBaseOptions } from '../options/control-base.options'
@Injectable({
  providedIn: 'root',
})
export class FormBuilderService {
  private _formGroup: FormGroup

  constructor(
    private _fb: FormBuilder,
    private _fbChangesTrackerService: FormBuilderChangesTrackerService,
    private _fbValidatorRegistryService: FormBuilderValidatorRegistryService,
  ) {
    this._formGroup = this._fb.group({})
  }

  /**
   * Build form group from FormBuilderOptions controls object and return FormGroup instance with FormBuilderChangesTrackerService attached to it for tracking changes in form group values and form group validity status changes as well.
   *
   * @param controls - The controls object from FormBuilderOptions.
   * @returns The FormGroup instance representing the built form group.
   */
  buildForm(controls: FormBuilderOptions['controls']): FormGroup {
    keysIn(controls).forEach(key => {
      this._formGroup.addControl(
        key,
        this._fb.control(
          controls[key].value,
          Validators.compose([
            this._buildValidators(controls[key]),
            this._buildCustomValidators(controls[key]),
          ]),
        ),
      )
    })

    this._fbChangesTrackerService.getFormGroup(this._formGroup)

    return this._formGroup
  }

  /**
   * Get the FormGroup instance representing the built form group.
   *
   * @returns The FormGroup instance representing the built form group.
   */
  getFormGroup(): FormGroup {
    return this._formGroup
  }

  private _buildValidators(control: ControlBaseOptions): ValidatorFn | null {
    const { validations } = control
    if (!validations) {
      return null
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

    return validators.length > 0 ? Validators.compose(validators) : null
  }

  private _buildCustomValidators(
    control: ControlBaseOptions,
  ): ValidatorFn | null {
    const { customValidators } = control

    if (!customValidators) return null

    const validators: ValidatorFn[] = []

    if (customValidators) {
      customValidators.forEach(customValidator => {
        validators.push(
          this._fbValidatorRegistryService.get(customValidator).validate(),
        )
      })
    }
    return validators.length > 0 ? Validators.compose(validators) : null
  }
}
