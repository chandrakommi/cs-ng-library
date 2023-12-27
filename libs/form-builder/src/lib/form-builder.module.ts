import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormBuilderComponent } from './form-builder.component'
import { InputComponent } from './components/input/input.component'
import { TemplateComponent } from './components/template/template.component'
import { CsngUtilsModule, RestService } from '@cs-ng/utils'
import { HttpClientModule } from '@angular/common/http'
import { FormBuilderService } from './services/form-builder.service'
import { ReactiveFormsModule } from '@angular/forms'

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    ReactiveFormsModule,
    CsngUtilsModule,
  ],
  declarations: [FormBuilderComponent, InputComponent, TemplateComponent],
  exports: [FormBuilderComponent, InputComponent, TemplateComponent],
  providers: [RestService, FormBuilderService],
})
export class CsngFormBuilderModule {}
