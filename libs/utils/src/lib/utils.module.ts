import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RestService } from './services/rest.service'
import { HttpClientModule } from '@angular/common/http'
import { KeysInPipe } from './pipes/keys-in.pipe'
@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [KeysInPipe],
  exports: [KeysInPipe],
  providers: [RestService],
})
export class CsngUtilsModule {}
