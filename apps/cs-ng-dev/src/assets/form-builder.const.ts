import { ComponentsType, FormBuilderOptions } from '@cs-ng/form-builder'

export const formBuilderConfig: FormBuilderOptions = {
  controls: {
    name: {
      label: 'Name',
      placeholder: 'Enter name',
      controlType: ComponentsType.INPUT,
      value: '',
      tooltip: '',
      readonly: false,
      disabled: false,
      validations: { minLength: 3, maxLength: 10, required: true },
      customValidators: ['containIndia'],
      validationMessages: {
        required: 'Name is required',
        minlength: 'Name must be at least 3 characters long',
        maxlength: 'Name cannot be more than 10 characters long',
        containIndia: 'Name must contain india',
      },
    },
    email: {
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
        containIndia: 'Email must contain india',
        containPak: 'Email must contain pak',
      },
      customValidators: ['containIndia', 'contain-pak'],
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
