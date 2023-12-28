import { Component } from '@angular/core'
import { formBuilderConfig as fbConfig } from '../assets/form-builder.const'
@Component({
  selector: 'cs-ng-library-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'cs-ng-dev'
  formBuilderConfig = fbConfig
}
