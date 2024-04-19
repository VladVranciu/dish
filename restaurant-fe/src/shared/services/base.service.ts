import { CrudOperationsInterface } from '@model/crud-operations.interface'
import { Filter } from '@model/types'
import { Observable } from 'rxjs'
import { BaseServiceAgent } from './base.service-agent'

export abstract class BaseService<T> implements CrudOperationsInterface<T> {
  constructor(private serviceAgent: BaseServiceAgent<T>) {}

  getList(filter?: Filter): Observable<T[]> {
    return this.serviceAgent.getList(this.computeFilters(filter))
  }

  getModel(id: number): Observable<T> {
    return this.serviceAgent.getModel(id)
  }

  protected computeFilters(storeFilters?: Filter) {
    return storeFilters
  }
}
