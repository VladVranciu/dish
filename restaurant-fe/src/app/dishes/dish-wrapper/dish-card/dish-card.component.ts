import {
  ChangeDetectionStrategy,
  Component,
  Input,
  inject
} from '@angular/core'
import { AddToCartButtonComponent } from '@components/add-to-cart-button/add-to-cart-button.component'
import { IncrementButtonComponent } from '@components/increment-button/increment-button.component'
import { Dish } from '@model/types'
import { BasketSignalStore } from '@store/basket.store'

@Component({
  selector: 'rst-dish-card',
  standalone: true,
  imports: [AddToCartButtonComponent, IncrementButtonComponent],
  templateUrl: './dish-card.component.html',
  styleUrl: './dish-card.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DishCardComponent {
  @Input({ required: true }) dish: Dish | undefined
  readonly basketStore = inject(BasketSignalStore)

  get quantity() {
    return this.basketStore.getQuantity(this.dish?.id)
  }

  updateCart(quantity = 1) {
    this.basketStore.updateCart(this.dish!, quantity)
    this.basketStore.addToCart()
  }
}
