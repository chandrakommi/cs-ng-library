import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RestService } from './services/rest.service'
import { HttpClientModule } from '@angular/common/http'
import { KeysInPipe } from './pipes/keys-in.pipe'
import { GetPipe } from './pipes/get.pipe'
import { MergePipe } from './pipes/merge.pipe'
@NgModule({
  imports: [CommonModule, HttpClientModule],
  declarations: [KeysInPipe, GetPipe, MergePipe],
  exports: [KeysInPipe, GetPipe, MergePipe],
  providers: [RestService],
})
export class CsngUtilsModule {}
