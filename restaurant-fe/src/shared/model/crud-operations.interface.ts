import { Observable } from 'rxjs';
import { Filter } from './types';

export interface CrudOperationsInterface<T> {
  getList(
    filter?: Filter
  ): Observable<T[]>;

  getModel(id: number): Observable<T>
}
