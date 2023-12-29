import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RestService } from './services/rest.service'
import { HttpClientModule } from '@angular/common/http'
import { KeysInPipe } from './pipes/keys-in.pipe'
import { GetPipe } from './pipes/get.pipe'
@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [KeysInPipe, GetPipe],
  exports: [KeysInPipe, GetPipe],
  providers: [RestService],
})
export class CsngUtilsModule {}
