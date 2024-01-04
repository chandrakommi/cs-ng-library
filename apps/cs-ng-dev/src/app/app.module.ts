import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import {
  CsngFormBuilderModule,
  FormBuilderValidatorRegistryService,
} from '@cs-ng/form-builder'
import {
  ContainIndiaValidator,
  ContainPakValidator,
} from './validatots/custom-validators.validators'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CsngFormBuilderModule],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(
    private _fbValidatorRegistryService: FormBuilderValidatorRegistryService,
  ) {
    this._fbValidatorRegistryService.register(new ContainIndiaValidator())
    this._fbValidatorRegistryService.register(new ContainPakValidator())
  }
}
