import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed,
  inject
} from '@angular/core'
import { IncrementButtonComponent } from '@components/increment-button/increment-button.component'
import { BasketItem } from '@model/types'
import { BasketSignalStore } from '@store/basket.store'

@Component({
  selector: 'rst-basket-card',
  standalone: true,
  imports: [IncrementButtonComponent],
  templateUrl: './basket-card.component.html',
  styleUrl: './basket-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketCardComponent {
  @Input() basketItem: BasketItem | undefined
  readonly basketStore = inject(BasketSignalStore)

  total = computed(() => {
    /** getting data from store due to track by quantity not working */
    const item = this.basketStore
      .basket()
      ?.items.find((dish) => dish.dish.id === this.basketItem?.dish.id)
    if (item) return item?.dish.price * item?.quantity
    return '-'
  })
  updateCart(quantity = 1) {
    this.basketStore.updateCart(this.basketItem?.dish!, quantity)
    this.basketStore.addToCart()
  }
}
