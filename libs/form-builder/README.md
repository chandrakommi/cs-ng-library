# BNSF Angular Form Builder

The BNSF Angular Form Builder component provides individual or grouped form controls covering any input requirements. The component is built to reflect all the GEL form options and relies on theInputControlModel power of Angular's Reactive Form Module.

## Features

### Extensive Input Options

    The form-builder component is intended to cover any and all input options including complex items such as chips, autocomplete/typeahead,

    date pickers, and more.

### Flexible Layout Controls

    On top of the array of input options, the form-builder allows configurations for applying layout control around the inputs using GEL Bootstrap row/

    column layout or flexbox class names.

## How To Implement

#### Install component from BNSF Artifactory.

```sh
npm install @bnsf/bnsf-angular-form-builder --save
```

#### Install peer dependencies note the version of datetime-picker that is expected!

#### For use of the combined date/time picker, add the Google fonts API to your index.html file.

html

<head>
  <link
    href="https://fonts.googleapis.com/icon?family=Material+Icons"
    rel="stylesheet"
  />
</head>

#### Add to app.module

ts
import { BnsfAngularFormBuilderModule } from '@bnsf/bnsf-angular-form-builder';

@NgModule({
imports: [
BnsfAngularFormBuilderModule
],
})

#### Create configuration object with form setup

json
{
"controls": {
"firstName": {
"label": "First Name",
"isUpper": true,
"controlType": "input",
"events": {
"hideWhen": ["first-name-hide-when"],
"disableWhen": ["first-name-disable-when"],
"requiredWhen": ["first-name-req-when"]
}
},
"middleInitial": {
"label": "Middle Initial",
"isUpper": true,
"controlType": "input"
},
"lastName": {
"label": "Last Name",
"isUpper": true,
"controlType": "input"
},
"radioButtons": {
"controlType": "radio-button",
"position": "left",
"label": "Radio Buttons 1",
"groupLabel": "group1",
"options": [
{
"value": "B1",
"displayProp": "Button 1"
},
{
"value": "B2",
"displayProp": "Button 2"
},
{
"value": "B3",
"displayProp": "Button 3"
},
{
"value": "B4",
"displayProp": "Button 4"
},
{
"value": "B5",
"displayProp": "Button 5"
}
]
}
},
"controlSize": "sm",
"validatorMessages": {
"mask": "Minimum 12 digits",
"invalid": "Invalid Input",
"required": "This is a required field",
"max": "Not in max range",
"min": "Not in min range"
},
"layout": {
"container": "container-fluid",
"row-0": {
"container": "row",
"firstName": {
"controlStack": "column",
"label": "col-sm-5",
"control": "col-sm-7"
},
"middleInitial": {
"controlStack": "column",
"label": "col-sm-5",
"control": "col-sm-7"
},
"lastName": {
"controlStack": "column",
"label": "col-sm-5",
"control": "col-sm-7"
},
"radioButtons": {
"controlStack": "column",
"label": "col-sm-5",
"control": "col-sm-7"
}
}
}
}

#### Set a model for the form, if required, to prepopulate the form for any fields necessary.

ts
model: ValueObject<any> = {
firstName: '',
middleInitial: 2,
}

#### Render form in HTML

html
<bnsf-form-builder
[model]="model"
configUrl="/assets/config.json"
(changes)="onChanges($event)"
  (formBuilderIdChanged)="formBuilderId = $event"
  (formControlChanged)="onFormControlChanged($event)"
(formChanged)="formGroup = $event"
(modelChanged)="model = $event"
(enterPressed)="onEnterPressed()"

> </bnsf-form-builder>

## Input/Outputs

### Input Options

### Global Control Options

#### Inputs

---

| Input         | Type               | Required | Default | Use                                                                                                                                                                                                                |
| ------------- | ------------------ | -------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| model         | ValueObject<any>   | No       | {}      | Model values to be used for prepopulating values in the form                                                                                                                                                       |
| configUrl     | string             | Yes      | null    | URL to JSON file containing FormBuilderOptions configuration setup. Preferred method for setting up configuration, or can use below configuration option. Only one (configUrl or configuration) input is required. |
| configuration | FormBuilderOptions | Yes      | null    | JSON object containing form options. Alternatively can be set in a JSON file and referenced using above configUrl input. Only one (configUrl or configuration) input is required.                                  |

#### FormBuilderOptions

---

| Property             | Type                                                                                                                                                                                                                          | Required | Use                                                                                                                                                                                                                            |
| -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| ValidatorMessages    | string                                                                                                                                                                                                                        | Yes      | Validation options tied to the controls in the form.                                                                                                                                                                           |
| layout               | LayoutOptions                                                                                                                                                                                                                 | No       | Layout configurations for the form. Can use Bootstrap's row/column setup or flexbox classes.                                                                                                                                   |
| crossFieldValidators | string[]                                                                                                                                                                                                                      | No       | TBD                                                                                                                                                                                                                            |
| controlSize          | sm \| lg                                                                                                                                                                                                                      | Yes      | Breakpoint option for the form.                                                                                                                                                                                                |
| controls             | ValueObject { InputControlModel \| SelectControlModel \| DateControlModel \| CheckBoxControlModel \| AutoCompleteControlModel \| LabelControlModel \| ChipsControlModel } extending FormBuilderControlBaseOptions (see below) | Yes      | Object containing multiple form input options for each input option required. FormBuilderControlBaseOptions options detailed below are available for all control options, and are extended to the individual model properties. |
| canReset             | boolean                                                                                                                                                                                                                       | No       | Provides an inline reset button to reset the form and clear all validation states.                                                                                                                                             |
| breadCrumbs          | FormBuilderBreadcrumbOptions                                                                                                                                                                                                  | No       | Not to be confused with BNSF Angular Breadcrumb, this configuration is for a lite version of chip elements.                                                                                                                    |

#### FormBuilderControlBaseOptions (all control options have the following configurations available - unique control properties are below)

| Property          | Type                  | Required | Use                                                                                                                           |
| ----------------- | --------------------- | -------- | ----------------------------------------------------------------------------------------------------------------------------- |
| key               | string                | No       | ID value for the input control.                                                                                               |
| controlType       | ControlTypeEnum       | Yes      | Determines what the input control type is. Choose one Enum value out of: INPUT SELECT AUTO_COMPLETE DATE CHECK_BOX LABEL CHIP |
| label             | string                | Yes      | Label description to appear next to the input control.                                                                        |
| required          | boolean               | No       | Flag to determine if control is required in the form. Adds an asterisk next to the label if 'true'.                           |
| value             | string                | No       | Preset value for the input control.                                                                                           |
| hide              | boolean               | No       | Flag to hide input field on initialization.                                                                                   |
| readonly          | boolean               | No       | Flag to set input field as readonly on initialization.                                                                        |
| toolTip           | string                | No       | Description for input field to appear in tooltip on hover over input control.                                                 |
| placeholder       | string                | No       | Description placeholder value for input                                                                                       |
| pattern           | string                | No       | Regex pattern to which input value should conform.                                                                            |
| validatorMessages | ValueObject<string>   |          | Messages to display for each control validation option which are conformed to Angular's Form Validator.                       |
| customValidators  | string[]              | No       | Custom validation options which are conformed to Angular's Form Validator.                                                    |
| events            | EventOptions          | No       | Event configurations to manipulate form based on user interaction.                                                            |
| constraints       | ConstraintOptions     | No       | Constraint configuration to allow or not allow values                                                                         |
| prefillConfigName | string                | No       | Name of configuration file to control mapping of coded values to display values (e.g. 'N' to 'No', 'Y' to 'Yes')              |
| modelIn           | string                | No       | TBD                                                                                                                           |
| modelOut          | string                | No       | TBD                                                                                                                           |
| message           | MessageOptions        | No       | Message options to display for validations.                                                                                   |
| customTemplate    | CustomTemplateOptions | No       | TBD                                                                                                                           |

### Event Options

| Property     | Type     | Required | Use                                                                                |
| ------------ | -------- | -------- | ---------------------------------------------------------------------------------- |
| onChange     | string   | Yes      | Rule registered to occur when change happens on the particular input control.      |
| onBlur       | string   | Yes      | Rule registered to occur when blur effect happens on the particular input control. |
| hideWhen     | string[] | No       | Rule registered to hide input control when criteria is met.                        |
| disableWhen  | string[] | No       | Rule registered to disable input control when criteria is met.                     |
| requiredWhen | string[] | No       | Rule registered to set input control to required state when criteria is met.       |

### ConstraintOptions

| Property   | Type     | Required | Use                                                                                                                               |
| ---------- | -------- | -------- | --------------------------------------------------------------------------------------------------------------------------------- |
| notAllowed | string[] | No       | Values set to be not allowed in the input control. Used to restrict certain values from being submitted.                          |
| allowed    | string[] | No       | Values set to be allowed in the input control. Used when only certain values should be entered and can't otherwise be controlled. |

### MessageOptions

| Property | Type             | Required | Use                                               |
| -------- | ---------------- | -------- | ------------------------------------------------- |
| text     | string           | Yes      | Message text to be displayed.                     |
| type     | 'info' \| 'warn' | Yes      | Contextual type to highlight message.             |
| hideWhen | string           | Yes      | Rule for hiding the message when criteria is met. |

### CustomTemplateOptions

| Property | Type   | Required | Use                              |
| -------- | ------ | -------- | -------------------------------- |
| name     | string | Yes      | Class name for primary container |

### Layout Options

| Property      | Type             | Required | Use                                             |
| ------------- | ---------------- | -------- | ----------------------------------------------- |
| container     | string           | Yes      | Class name for primary container for the form.  |
| [key: string] | LayoutRowOptions | Yes      | Objects for individual sections of form layout. |

### LayoutRowOptions

| Property      | Type             | Required | Use                                             |
| ------------- | ---------------- | -------- | ----------------------------------------------- |
| container     | string           | Yes      | Class name for primary container for the form.  |
| [key: string] | LayoutRowOptions | Yes      | Objects for individual sections of form layout. |

### LayoutWrapperOptions

| Property     | Type             | Required | Use                                                                                      |
| ------------ | ---------------- | -------- | ---------------------------------------------------------------------------------------- |
| controlStack | 'row' \|'column' | Yes      | Determines if form control should be vertical or horizontal - column or row - in layout. |
| label        | string           | Yes      | Class to determine spacing of label element. e.g. 'col-6'                                |
| control      | string           | Yes      | Class to determine spacing of control element. e.g. 'col-6'                              |
| width        | string           | No       | Optional class to provide specific width restrictions to the element.                    |
| container    | string           | No       | Class name for tertiary container for the form.                                          |
| wrapper      | string           | No       | Optional class name for providing styling around the individual control input.           |

### FormBuilderBreadcrumbOptions

| Property    | Type    | Required | Use                                                |
| ----------- | ------- | -------- | -------------------------------------------------- |
| canRemove   | boolean | No       | If chip is removable. Gives 'x' button if 'true'.  |
| icon        | string  | No       | Icon name to display for individual chip.          |
| image       | string  | No       | Image name to display for individual chip.         |
| displayProp | string  | No       | Display text property name on the individual chip. |
| editIcon    | string  | No       | Icon name for edit purpose.                        |
| editImage   | string  | No       | Image name for edit purpose.                       |
| toolTip     | string  | No       | Text to display in tooltip on hover over chip.     |

### Input Type Unique Control Options

#### InputControlModel

| Property  | Type        | Required | Use                                                                                           |
| --------- | ----------- | -------- | --------------------------------------------------------------------------------------------- |
| type      | string      | No       | Input type to assign to HTML 'type' property, such as textarea. Default is basic 'text' type. |
| row       | number      | No       | Number of rows to set height on textarea input type.                                          |
| minLength | number      | No       | Minimum value length allowed.                                                                 |
| min       | number      | No       | Minimum value allowed.                                                                        |
| maxLength | number      | No       | Maximum value length allowed. \*\*Required for date input types to allow manual entry.        |
| max       | number      | No       | Maximum value allowed.                                                                        |
| mask      | MaskOptions | No       | Masking option for input value.                                                               |
| isUpper   | boolean     | No       | Flag to determine if value is displayed in all uppercase.                                     |

### SelectControlModel

| Property        | Type          | Required | Use                                                                                                      |
| --------------- | ------------- | -------- | -------------------------------------------------------------------------------------------------------- |
| options         | DataOptions[] | Yes      | List of data for options to be displayed in the select box.                                              |
| order           | number        | No       | Number value for order of input control within the form.                                                 |
| multiSelect     | boolean       | No       | Determines if select box is single-select or multi-select. Defaults to 'false' to provide single-select. |
| disabledOptions | string[]      | No       | List of options to be disabled.                                                                          |

### RadioButtonControlModel

| Property   | Type                          | Required | Use                                                                                                                                                                                                |
| ---------- | ----------------------------- | -------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| options    | DataOptions[]                 | Yes      | List of data used to display radio buttons.                                                                                                                                                        |
| position   | "left" \| "inline" \| "right" | No       | Controls the orientation of the radio buttons. Defaults to "left" if position is not provided.                                                                                                     |
| groupLabel | string                        | Yes      | Name used to separate radio button group click events. If "groupLabel" is not provided and there are multiple radio button groups, then the selected button will apply to all radio button groups. |

### DateControlModel

| Property           | Type    | Required | Use                                                               |
| ------------------ | ------- | -------- | ----------------------------------------------------------------- |
| order              | number  | No       | Number value for order of input control within the form.          |
| isDefaultToCurrent | boolean | No       | Determines if the default date value starts with the current day. |
| max                | Date    | No       | Maximum date value allowed to be selected.                        |
| min                | Date    | No       | Minimum date value allowed to be selected.                        |
| maxLength          | number  | No       | Max length of the date or date/time value.                        |
| showTime           | boolean | No       | Converts date picker to date/time combined picker.                |

### CheckBoxControlModel

| Property | Type              | Required | Use                                                      |
| -------- | ----------------- | -------- | -------------------------------------------------------- |
| order    | number            | No       | Number value for order of input control within the form. |
| position | 'left' \| 'right' | No       | Determines alignment of checkbox next to label.          |

### AutoCompleteControlModel

| `Property`      | `Type`                | `Required` | `Use`                                                                                        |
| --------------- | --------------------- | ---------- | -------------------------------------------------------------------------------------------- |
| order           | number                | No         | Number value for order of input control within the form.                                     |
| maxLength       | number                | No         | Max length of input allowed.                                                                 |
| minLength       | number                | No         | Min length of input allowed.                                                                 |
| options         | DataOptions[]         | Yes        | Data list of options to be searched through autocomplete dropdown.                           |
| api             | FormBuilderApiOptions | No         | API information to provide data list of options for autocomplete dropdown.                   |
| acceptsAnyValue | boolean               | No         | Determines if any value is allowed without matching to item from dropdown list.              |
| inputFormat     | string                | No         | Regex to control format of input.                                                            |
| cache           | boolean               | No         | Determines if dropdown list items are cached for performance.                                |
| prefillMatchOn  | string                | No         | Prefill autocomplete with value matching from data list provided through 'options' or 'api'. |
| filterBy        | string                | No         | TBD                                                                                          |

### ChipsControlModel

| `Property` | `Type`      | `Required` | `Use`                                                     |
| ---------- | ----------- | ---------- | --------------------------------------------------------- |
| order      | number      | No         | Number value for order of input control within the form.  |
| mask       | MaskOptions | No         | Masking option for input value.                           |
| min        | number      | No         | Minimum value allowed.                                    |
| max        | number      | No         | Maximum value allowed.                                    |
| minLength  | number      | No         | Minimum value length allowed.                             |
| maxLength  | number      | No         | Maximum value length allowed.                             |
| isUpper    | boolean     | No         | Flag to determine if value is displayed in all uppercase. |
| row        | number      | No         | Number of rows to set height on textarea input type.      |
| maxAllowed | number      | No         | Maximum allowed chips.                                    |

### DataOptions

| `Property`  | `Type`        | `Required` | `Use`                                          |
| ----------- | ------------- | ---------- | ---------------------------------------------- |
| value       | string \| any | Yes        | Value for individual select option.            |
| displayProp | string        | Yes        | Display text for the individual select option. |

### MaskOptions

| `Property` | `Type` | `Required` | `Use`                               |
| ---------- | ------ | ---------- | ----------------------------------- |
| rule       | any    | Yes        | Value for individual select option. |

### OutputOptions

| `Property`           | `Type`                     | `Required` | `Use`                                                                                                  |
| -------------------- | -------------------------- | ---------- | ------------------------------------------------------------------------------------------------------ |
| formChanged          | FormGroup                  | No         | Emits changes to the FormGroup object.                                                                 |
| modelChanged         | ValueObject\<any\>         | No         | Emits changes to the model.                                                                            |
| changes              | ValueObject\<any\>         | No         | Emits changes made to the form.                                                                        |
| enterPressed         | ValueObject\<any\>         | No         | Emits notice that the 'ENTER' key has been pressed. Ideally used to handle form submission on 'ENTER'. |
| formBuilderIdChanged | string                     | No         | Emits new ID after change.                                                                             |
| formControlChanged   | ValueObject\<FormControl\> | No         | Emits changes to the form control layout options.                                                      |
| loaded               | void                       | No         | Emits notice that the form-builder view has completed rendering.                                       |

## Example Implementations

### Inline Form Format

```json
{
  "controls": {
    "updateCheckbox": {
      "label": "Agree To The Terms",
      "controlType": "check-box",
      "position": "right"
    },
    "firstName": {
      "label": "First Name",
      "isUpper": true,
      "controlType": "input"
    },
    "country": {
      "label": "Country",
      "controlType": "select",
      "placeholder": "Select One",
      "options": [
        {
          "value": "1",
          "displayProp": "United States"
        },
        {
          "value": "2",
          "displayProp": "Mexico"
        }
      ]
    }
  },
  "layout": {
    "container": "container-fluid",
    "row-0": {
      "container": "row",
      "updateCheckbox": {
        "controlStack": "row",
        "container": "col-2"
      },
      "firstName": {
        "controlStack": "row",
        "container": "col-4",
        "control": "col-6",
        "label": "col-6"
      },
      "country": {
        "controlStack": "row",
        "container": "col-5",
        "label": "col-sm-5",
        "control": "col-sm-7"
      }
    }
  }
}
```

### Custom Validators

    Create your custom validation class, implementing the FormBuilderValidatorBehavior interface. This example will use some lodash and moment functions for ease of comparison.

```ts
import { FormControl, FormGroup, ValidationErrors } from '@angular/forms'
import { keysIn, omit } from 'lodash'
import { FormBuilderValidatorBehavior } from '@bnsf/bnsf-angular-form-builder'
import * as moment from 'moment'

export class StartEndDateCustomValidator
  implements FormBuilderValidatorBehavior
{
  readonly name = 'start-end-date-compare-validator' //name for mapping validator
  readonly error = 'startDate' //error name for message display

  //this method controls when the custom validation can apply to the input control
  canValidate(formGroup: FormGroup, formControl: FormControl): boolean {
    return (
      keysIn(omit(formControl.errors, this.error)).length === 0 &&
      formGroup.controls.endDate.valid
    )
  }

  //logic to perform validation and alter state of the form
  validate(
    formGroup: FormGroup,
    formControl: FormControl,
  ): ValidationErrors | null {
    const startDate = formGroup.controls?.startDate.value
    const endDate = formGroup.controls?.endDate.value

    return moment(startDate).isAfter(endDate) ? { startDate: true } : null
  }
}
```

#### Import your custom validator class in your app.module and register with the FormBuilderValidatorRegistryService.

```ts
import {
  BnsfAngularFormBuilderModule,
  FormBuilderValidatorRegistryService,
} from '@bnsf/bnsf-angular-form-builder'
import { StartEndDateCustomValidator } from './validators/custom/customer-validator'

@NgModule({
  imports: [BnsfAngularFormBuilderModule],
})
export class AppModule {
  constructor(
    private readonly _fbValidatorRegistryService: FormBuilderValidatorRegistryService,
  ) {
    this._fbValidatorRegistryService.register(new StartEndDateCustomValidator())
  }
}
```

#### Map your custom validator with the form input control you would like it to apply towards. Map the custom message to display when the validation criteria is met here.

```json
{
  "controls": {
    "startDate": {
      "label": "Start Date",
      "controlType": "date",
      "customValidators": ["start-end-date-compare-validator"]
    },
    "endDate": {
      "label": "End Date",
      "controlType": "date"
    }
  },
  "validatorMessages": {
    "endDate": "Start Date should always be less than or equal to End Date"
  },
  "layout": {
    "container": "container-fluid ",
    "row-0": {
      "container": "column align-items-center",
      "startDate": {
        "controlStack": "row"
      },
      "endDate": {
        "controlStack": "row"
      }
    }
  }
}
```

## Multiple Inline Inputs (Horizontal Form)

#### You can align multiple input fields horizontally to make up a single field using the following configuration.

```json
{
  "controls": {
    "scac": {
      "label": "SCAC",
      "controlType": "select",
      "placeholder": "SCAC",
      "required": true,
      "options": [
        {
          "value": "BNSF",
          "displayProp": "BNSF"
        },
        {
          "value": "6076",
          "displayProp": "6076"
        }
      ]
    },
    "manifestId": {
      "isUpper": false,
      "controlType": "input",
      "placeholder": "Manifest ID",
      "maxLength": "25"
    }
  },
  "layout": {
    "container": "container-fluid ",
    "row-0": {
      "container": "row",
      "scac": {
        "controlStack": "row",
        "container": "col-2 p-0",
        "control": "col-7",
        "label": "pl-0 col-5"
      },
      "manifestId": {
        "controlStack": "row",
        "container": "col-2 p-0"
      }
    }
  }
}
```

### Contact Us

GitHub URL: https://github.bnsf.com/UU/bnsf-angular-form-builder

For more details connect with UI CoP team : UICOP@BNSF.COM
