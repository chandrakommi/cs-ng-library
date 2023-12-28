import { Injectable } from '@angular/core'
import { FormBuilderRegistryBehaviour } from '../form-builder-registry-behaviour'
import { FormBuilderValidatorBehaviour } from './form-builder-validator-behaviour'

@Injectable({
  providedIn: 'root',
})
export class FormBuilderValidatorRegistryService extends FormBuilderRegistryBehaviour<FormBuilderValidatorBehaviour> {
  constructor() {
    super()
  }
}
