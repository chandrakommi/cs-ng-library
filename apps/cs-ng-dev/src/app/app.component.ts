import { Component } from '@angular/core'
import { FormBuilderOptions } from '@cs-ng/form-builder'
import { ComponentsType } from '@cs-ng/form-builder'
@Component({
  selector: 'cs-ng-library-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cs-ng-dev'

  formBuilderConfig: FormBuilderOptions = {
    controls: {
      name: {
        // type: 'text',
        label: 'Name',
        placeholder: 'Enter name',
        controlType: ComponentsType.INPUT,
        value: '',
        tooltip: '',
        readonly: false,
        disabled: false,
        validationMessages: {
          required: 'Name is required',
          minlength: 'Name must be at least 3 characters long',
          maxlength: 'Name cannot be more than 10 characters long',
        },
        customValidators: [],
        validations: { required: true, minLength: 3, maxLength: 10 },
      },
      email: {
        // type: 'email',
        label: 'Email',
        placeholder: 'Enter email',
        controlType: ComponentsType.INPUT,
        value: '',
        tooltip: '',
        readonly: false,
        disabled: false,
        validationMessages: {
          required: 'Email is required',
          email: 'Email must be a valid email address',
        },
        customValidators: [],
        validations: { email: true, required: true },
      },
    },
    validationMessages: {
      required: 'Input is required',
    },
    layout: {
      container: 'container',
      rows: {},
    },
  }
}
