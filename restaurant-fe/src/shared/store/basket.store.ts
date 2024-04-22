import { computed, inject } from '@angular/core'
import { BasketService } from '@app/basket/service/basket.service'
import { BasketItem, BasketState, Dish } from '@model/types'
import {
  patchState,
  signalStore,
  withComputed,
  withHooks,
  withMethods,
  withState
} from '@ngrx/signals'
import { rxMethod } from '@ngrx/signals/rxjs-interop'
import { catchError, of, pipe, switchMap, tap } from 'rxjs'
import { tapResponse } from '@ngrx/operators'

export const BasketSignalStore = signalStore(
  {
    providedIn: 'root'
  },
  withState<BasketState>({
    basket: null,
    toUpdateBasket: null,
    isLoading: false
  }),
  withMethods((store, basketService = inject(BasketService)) => ({
    loadBasket: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() =>
          /** Hardcoded basket id due to lack of authetication flow */
          basketService.getModel(1).pipe(
            tapResponse({
              next: (response) =>
                patchState(store, { basket: response, isLoading: false }),
              error: () => {},
              finalize: () => patchState(store, { isLoading: false })
            })
          )
        )
      )
    ),
    saveNewBasket: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() =>
          basketService.saveModel({ id: '1', items: [] }).pipe(
            tapResponse({
              next: (response) =>
                patchState(store, { basket: response, isLoading: false }),
              error: () => {},
              finalize: () => patchState(store, { isLoading: false })
            })
          )
        )
      )
    ),
    addToCart: rxMethod<void>(
      pipe(
        tap(() => patchState(store, { isLoading: true })),
        switchMap(() =>
          basketService
            .updateModel(store.toUpdateBasket()!.id, store.toUpdateBasket()!)
            .pipe(
              tapResponse({
                next: (response) =>
                  patchState(store, { basket: response, isLoading: false }),
                error: () => {},
                finalize: () => patchState(store, { isLoading: false })
              })
            )
        )
      )
    ),
    updateCart: (dish: Dish, quantity: number) => {
      const toUpdateBasket = store.basket()
      const hasDish = toUpdateBasket?.items.find(
        (item) => item.dish.id === dish.id
      )
      if (!hasDish) {
        toUpdateBasket?.items.push({
          dish,
          quantity
        })
        patchState(store, { toUpdateBasket })
        return
      }

      const currentQuantity = hasDish.quantity + quantity
      if (currentQuantity !== 0) {
        hasDish.quantity = currentQuantity
        patchState(store, { toUpdateBasket })
        return
      }

      const items =
        toUpdateBasket?.items.filter((item) => item.dish.id !== dish.id) || []
      patchState(store, { toUpdateBasket: { id: toUpdateBasket?.id!, items } })
    },
    getQuantity: (dishId?: string) =>
      store.basket()?.items.find((item) => item.dish.id === dishId)?.quantity
  })),
  withComputed((store) => ({
    allQuantity: computed(() =>
      store.basket()?.items.reduce((acc: number, curr: BasketItem) => {
        acc += curr.quantity
        return acc
      }, 0)
    ),
    subtotal: computed(() =>
      store.basket()?.items.reduce((acc: number, curr: BasketItem) => {
        acc += curr.dish.price * curr.quantity
        return acc
      }, 0)
    )
  })),

  withHooks({
    onInit: (store) => {
      const hasBasket = localStorage.getItem('hasBasket')
      if (hasBasket) {
        store.loadBasket()
        return
      }
      store.saveNewBasket()
      localStorage.setItem('hasBasket', 'true')
    }
  })
)
