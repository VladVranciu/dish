import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Output,
  inject
} from '@angular/core'
import { SearchInputComponent } from '@components/search-input/search-input.component'
import { DISH_CATEGORIES } from '@constants/constants'
import { DishFilter } from '@model/types'
import { DishSignalStore } from '@store/dish.store'

@Component({
  selector: 'rst-dish-filter',
  standalone: true,
  imports: [SearchInputComponent],
  templateUrl: './dish-filter.component.html',
  styleUrl: './dish-filter.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishFilterComponent {
  @Output() filterChanged: EventEmitter<Partial<DishFilter>> = new EventEmitter()
  readonly categories = DISH_CATEGORIES
  readonly dishStore = inject(DishSignalStore)

  selectFilter(category: string) {
    this.filterChanged.emit({ category })
  }

  search(search: string) {
    this.filterChanged.emit({ search })
  }
}
