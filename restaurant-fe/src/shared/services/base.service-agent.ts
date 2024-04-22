import { HttpClient } from '@angular/common/http'
import { inject } from '@angular/core'
import { CrudOperationsInterface } from '@model/crud-operations.interface'
import { Filter } from '@model/types'
import { Observable } from 'rxjs'

export abstract class BaseServiceAgent<T>
  implements CrudOperationsInterface<T>
{
  protected readonly httpClient = inject(HttpClient)

  constructor(protected resource: string) {}

  getList(filter?: Filter): Observable<T[]> {
    return this.httpClient.get<T[]>(this.resource, {
      params: filter
    })
  }

  getModel(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.resource}/${id}`)
  }

  saveModel(model: T) {
    return this.httpClient.post<T>(this.resource, model)
  }

  updateModel(id: string, model: T) {
    return this.httpClient.put<T>(`${this.resource}/${id}`, model)
  }

  deleteModel(id: string) {
    return this.httpClient.delete<T>(`${this.resource}/${id}`)
  }
}
