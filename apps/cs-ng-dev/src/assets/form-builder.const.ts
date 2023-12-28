import { ComponentsType, FormBuilderOptions } from '@cs-ng/form-builder'

export const formBuilderConfig: FormBuilderOptions = {
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
      validations: { minLength: 3, maxLength: 10 },
      customValidators: ['containIndia'],
      validationMessages: {
        required: 'Name is required',
        minlength: 'Name must be at least 3 characters long',
        maxlength: 'Name cannot be more than 10 characters long',
        containIndia: 'Name must contain india',
      },
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
        containIndia: 'Name must contain india',
      },
      customValidators: ['containIndia'],
      validations: { email: true },
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
