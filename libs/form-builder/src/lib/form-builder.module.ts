import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { FormBuilderComponent } from './form-builder.component'
import { InputComponent } from './components/input/input.component'
import { TemplateComponent } from './components/template/template.component'

@NgModule({
  imports: [CommonModule],
  declarations: [FormBuilderComponent, InputComponent, TemplateComponent],
  exports: [FormBuilderComponent, InputComponent, TemplateComponent],
})
export class CsngFormBuilderModule {}
