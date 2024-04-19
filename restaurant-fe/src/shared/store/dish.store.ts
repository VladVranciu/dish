import { inject } from '@angular/core'
import { DishService } from '@app/dishes/service/dish.service'
import { DISH_CATEGORIES } from '@constants/constants'
import {
  DishFilter,
  DishState,
  Filter
} from '@model/types'
import {
  patchState,
  signalStore,
  withHooks,
  withMethods,
  withState
} from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { pipe, switchMap, tap } from 'rxjs'

export const DishSignalStore = signalStore(
  {
    providedIn: 'root'
  },
  withState<DishState>({
    dishes: [],
    isLoading: false,
    filter: {
      category: DISH_CATEGORIES[0],
      search: ''
    }
  }),
  withMethods((store, dishService = inject(DishService)) => ({
    loadDishes: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() =>
          dishService.getList(store.filter() as any).pipe(
            tap((response) => {
              patchState(store, { dishes: response, isLoading: false })
            })
          )
        )
      )
    ),
    setFilters: (partialFilter: Partial<DishFilter>) => {
      const filter = { ...store.filter(), ...partialFilter }
      patchState(store, { filter })
    }
  })),
  withHooks({
    onInit: (store) => {
      store.loadDishes()
    }
  })
)
