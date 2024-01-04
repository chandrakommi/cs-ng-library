import { Pipe, PipeTransform } from '@angular/core'

@Pipe({
  name: 'get',
})
export class GetPipe implements PipeTransform {
  transform(value: any, arg0: string): any {
    if (!value) return []
    return value[arg0]
  }
}
