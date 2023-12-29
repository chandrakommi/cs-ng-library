import { Component, Input } from '@angular/core'
import { MessageControlOptions } from './message-control.options'
import { FormControl } from '@angular/forms'
import { FormBuilderOptions } from '../../options/form-builder.options'

@Component({
  template: ``,
})
export abstract class MessageControlComponent implements MessageControlOptions {
  @Input() key = ''
  @Input() formControl: FormControl = new FormControl()
  @Input() controls: FormBuilderOptions = {} as FormBuilderOptions
}
