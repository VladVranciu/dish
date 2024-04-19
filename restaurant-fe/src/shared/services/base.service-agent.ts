import { HttpClient } from '@angular/common/http'
import { inject } from '@angular/core'
import { CrudOperationsInterface } from '@model/crud-operations.interface'
import { Filter } from '@model/types'
import { Observable } from 'rxjs'

export abstract class BaseServiceAgent<T>
  implements CrudOperationsInterface<T>
{
  private readonly httpClient = inject(HttpClient)

  constructor(private resource: string) {}

  getList(filter?: Filter): Observable<T[]> {
    return this.httpClient.get<T[]>(this.resource, {
      params: filter
    })
  }

  getModel(id: number): Observable<T> {
    return this.httpClient.get<T>(`${this.resource}/${id}`)
  }
}
