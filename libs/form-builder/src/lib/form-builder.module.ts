import { CommonModule } from '@angular/common'
import { HttpClientModule } from '@angular/common/http'
import { NgModule } from '@angular/core'
import { ReactiveFormsModule } from '@angular/forms'
import { CsngUtilsModule, RestService } from '@cs-ng/utils'
import { InputComponent } from './components/input/input.component'
import { TemplateComponent } from './components/template/template.component'
import { FormBuilderComponent } from './form-builder.component'
import { FormBuilderChangesTrackerService } from './services/form-builder-changes-tracker.service'
import { FormBuilderService } from './services/form-builder.service'
import { FormBuilderValidatorRegistryService } from './registry/validator/form-builder-validator-registry.service'
import { MessageComponent } from './components/message/message.component'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CsngUtilsModule,
  ],
  declarations: [
    FormBuilderComponent,
    InputComponent,
    TemplateComponent,
    MessageComponent,
  ],
  exports: [
    FormBuilderComponent,
    InputComponent,
    TemplateComponent,
    MessageComponent,
  ],
  providers: [
    RestService,
    FormBuilderService,
    FormBuilderChangesTrackerService,
    FormBuilderValidatorRegistryService,
  ],
})
export class CsngFormBuilderModule {}
