import { Component, Input } from '@angular/core'
import { FormBuilderOptions } from './options/form-builder.options'
import { FormBuilderBaseComponent } from './form-builder-base.component'

@Component({
  template: '',
})
export abstract class FormBuilderControlComponent extends FormBuilderBaseComponent {
  @Input() configUrl = ''
  @Input() configuration: FormBuilderOptions = {} as FormBuilderOptions
  @Input() formBuilderId = ''
}
