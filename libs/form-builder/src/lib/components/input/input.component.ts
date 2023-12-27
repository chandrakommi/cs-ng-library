import { Component, Input, OnInit } from '@angular/core'
import { FormBuilderBaseComponent } from '../../form-builder-base.component'

@Component({
  selector: 'cs-ng-input',
  templateUrl: './input.component.html',
})
export class InputComponent extends FormBuilderBaseComponent implements OnInit {
  @Input() type = ''
  ngOnInit(): void {
    this.getFormControl(this.key)
  }
}
