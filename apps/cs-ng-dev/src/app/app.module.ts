import { NgModule } from '@angular/core'
import { BrowserModule } from '@angular/platform-browser'

import { AppComponent } from './app.component'
import { CsngFormBuilderModule } from '@cs-ng/form-builder'

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CsngFormBuilderModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
