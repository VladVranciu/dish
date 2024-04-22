import {
  Component,
  EventEmitter,
  Output,
  computed,
  inject
} from '@angular/core'
import { BasketSignalStore } from '@store/basket.store'
import { BasketCardComponent } from '../basket-card/basket-card.component'
import { ButtonComponent } from '@components/button/button.component'
import { CheckoutInfoComponent } from '@components/checkout-info/checkout-info.component'

@Component({
  selector: 'rst-basket-right-panel',
  standalone: true,
  imports: [
    BasketCardComponent,
    ButtonComponent,
    CheckoutInfoComponent,
    ButtonComponent
  ],
  templateUrl: './basket-right-panel.component.html',
  styleUrl: './basket-right-panel.component.scss'
})
export class BasketRightPanelComponent {
  @Output() onClose = new EventEmitter<void>()
  readonly basketStore = inject(BasketSignalStore)
  readonly DELIVERY_FEE = 3
  total = computed(() => (this.basketStore.subtotal() || 0) + this.DELIVERY_FEE)
  orderText = computed(() => `Order (€${this.total().toFixed(2)})`)
}
