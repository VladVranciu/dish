import { Observable } from 'rxjs'
import { Filter } from './types'

export interface CrudOperationsInterface<T> {
  getList(filter?: Filter): Observable<T[]>

  getModel(id: number): Observable<T>

  saveModel(model: T): Observable<T>

  updateModel(id: string, model: T): Observable<T>

  deleteModel(id: string): Observable<T>
}
