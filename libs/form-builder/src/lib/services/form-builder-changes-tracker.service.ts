import { Injectable } from '@angular/core'
import { FormGroup } from '@angular/forms'

@Injectable({
  providedIn: 'root',
})
export class FormBuilderChangesTrackerService {
  private _formGroup: FormGroup = new FormGroup({})

  async getFormGroup(formGroup: FormGroup): Promise<void> {
    this._formGroup = formGroup
    this._trackChanges()
  }

  private async _trackChanges(): Promise<void> {
    // this._formGroup.valueChanges.subscribe(value => {})
  }
}
