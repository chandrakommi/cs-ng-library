import { Component, Input } from '@angular/core'
import { ControlBaseOptions } from './options/control-base.options'
import { ComponentsType } from './enums/components.enum'
import { FormBuilderControlOptions } from './options/form-builder-control.options'
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  template: '',
})
export abstract class FormBuilderBaseComponent
  implements ControlBaseOptions, FormBuilderControlOptions
{
  @Input() label = ''
  @Input() value: string | number | boolean = ''
  @Input() tooltip = ''
  @Input() placeholder = ''
  @Input() readonly = false
  @Input() disabled = false
  @Input() controlType =
    ComponentsType.CHECKBOX ||
    ComponentsType.INPUT ||
    ComponentsType.RADIO ||
    ComponentsType.SELECT ||
    ComponentsType.TEXTAREA
  @Input() validations = {}
  @Input() customValidators: string[] = []
  @Input() validationMessages: Record<string, string> = {}

  @Input() formGroup: FormGroup = new FormGroup({})
  @Input() formControl: any = new FormGroup({})
  @Input() key = ''
  @Input() control: ControlBaseOptions = {} as ControlBaseOptions

  getFormControl(key: string) {
    this.formControl = this.formGroup.get(key) as FormControl
  }
}
