import { HttpClient } from '@angular/common/http'
import { Injectable } from '@angular/core'

@Injectable({
  providedIn: 'root',
})
export class RestService {
  constructor(private _http: HttpClient) {}

  getAsync<T>(url: string) {
    return this._http.get<T>(url)
  }
}
