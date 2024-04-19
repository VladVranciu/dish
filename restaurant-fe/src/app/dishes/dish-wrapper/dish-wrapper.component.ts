import { Component, OnInit, inject } from '@angular/core'
import { ContentContainerComponent } from '@components/content-container/content-container.component'
import { DishFilterComponent } from './dish-filter/dish-filter.component'
import { DishSignalStore } from '@store/dish.store'
import { DishFilter } from '@model/types'

@Component({
  selector: 'rst-dish-wrapper',
  standalone: true,
  imports: [ContentContainerComponent, DishFilterComponent],
  templateUrl: './dish-wrapper.component.html',
  styleUrl: './dish-wrapper.component.scss'
})
export class DishWrapperComponent {
  readonly dishStore = inject(DishSignalStore)

  handleFilterChanged(filter: Partial<DishFilter>) {
    this.dishStore.setFilters(filter)
    this.dishStore.loadDishes()
  }
}
