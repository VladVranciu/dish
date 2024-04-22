import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject
} from '@angular/core'
import { ContentContainerComponent } from '@components/content-container/content-container.component'
import { DishFilterComponent } from './dish-filter/dish-filter.component'
import { DishSignalStore } from '@store/dish.store'
import { DishFilter } from '@model/types'
import { DishListComponent } from './dish-list/dish-list.component'
import { BasketIconComponent } from '@app/basket/basket-icon/basket-icon.component'
import { BasketSignalStore } from '@store/basket.store'
import { Subject, debounceTime, takeUntil } from 'rxjs'
import { UnsubscribeMixin } from '@mixins/unsubscribe.mixin'
import { INPUT_DEBOUNCE } from '@constants/constants'

@Component({
  selector: 'rst-dish-wrapper',
  standalone: true,
  imports: [
    ContentContainerComponent,
    DishFilterComponent,
    DishListComponent,
    BasketIconComponent
  ],
  templateUrl: './dish-wrapper.component.html',
  styleUrl: './dish-wrapper.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishWrapperComponent extends UnsubscribeMixin() implements OnInit {
  readonly dishStore = inject(DishSignalStore)
  readonly basketStore = inject(BasketSignalStore)
  private _debouncer$ = new Subject<void>()

  ngOnInit(): void {
    this._debouncer$
      .pipe(takeUntil(this.onDestroy$), debounceTime(INPUT_DEBOUNCE))
      .subscribe(() => this.dishStore.loadDishes())
  }

  handleFilterChanged(filter: Partial<DishFilter>) {
    this.dishStore.setFilters(filter)
    this._debouncer$.next()
  }
}
