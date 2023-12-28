import { ValueObject } from '@cs-ng/utils'
import { get } from 'lodash'

export abstract class FormBuilderRegistryBehaviour<T> {
   registry: ValueObject<T> = {}

  register(...items: T[]) {
    items.forEach(item => {
      const key = get(item, 'name') as string

      this.registry[key] = item
    })

    console.log(this.registry)
  }

  get(name: string) {
    return get(this.registry, name)
  }
}
