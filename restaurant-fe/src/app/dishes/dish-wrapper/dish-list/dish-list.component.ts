import { ChangeDetectionStrategy, Component, inject } from '@angular/core'
import { DishCardComponent } from '../dish-card/dish-card.component'
import { DishSignalStore } from '@store/dish.store'
import { LoaderComponent } from '@components/loader/loader.component'
import { EmptyStateComponent } from '@components/empty-state/empty-state.component'

@Component({
  selector: 'rst-dish-list',
  standalone: true,
  imports: [DishCardComponent, LoaderComponent, EmptyStateComponent],
  templateUrl: './dish-list.component.html',
  styleUrl: './dish-list.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishListComponent {
  readonly dishStore = inject(DishSignalStore)
}
