import { ValueObject } from '@cs-ng/utils'

export interface LayoutOptions {
  container: 'container' | 'container-fluid'
  rows: ValueObject<string>
}
