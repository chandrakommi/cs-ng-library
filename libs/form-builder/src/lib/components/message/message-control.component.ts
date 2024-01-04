import { Component, Input } from '@angular/core'
import { MessageControlOptions } from './message-control.options'
import { FormBuilderOptions } from '../../options/form-builder.options'
import { FormGroup } from '@angular/forms'

@Component({
  template: ``,
})
export abstract class MessageControlComponent implements MessageControlOptions {
  @Input() formGroup: FormGroup = new FormGroup({})
  @Input() key = ''
  @Input() controls: FormBuilderOptions = {} as FormBuilderOptions
}
