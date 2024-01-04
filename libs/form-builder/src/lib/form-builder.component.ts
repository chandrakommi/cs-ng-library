import { Component, OnInit } from '@angular/core'
import { FormBuilderControlComponent } from './form-builder-control.component'
import { FormBuilderService } from './services/form-builder.service'
import { FormBuilderOptions } from './options/form-builder.options'

@Component({
  selector: 'cs-ng-form-builder',
  templateUrl: './form-builder.component.html',
  styleUrls: ['./form-builder.component.scss'],
})
export class FormBuilderComponent
  extends FormBuilderControlComponent
  implements OnInit
{
  formConfig: FormBuilderOptions = {} as FormBuilderOptions
  constructor(private _fbService: FormBuilderService) {
    super()
  }

  ngOnInit() {
    this._getConfigData()
    this._buildForm()
  }
  private _getConfigData() {
    if (!this.configUrl) {
      this.formConfig = this.configuration
    }
  }
  private _buildForm() {
    if (!this.formConfig.controls) return
    this.formGroup = this._fbService.buildForm(this.formConfig.controls)
  }
}
