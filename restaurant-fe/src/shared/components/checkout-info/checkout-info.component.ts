import {
  ChangeDetectionStrategy,
  Component,
  Input,
  computed
} from '@angular/core'

@Component({
  selector: 'rst-checkout-info',
  standalone: true,
  imports: [],
  templateUrl: './checkout-info.component.html',
  styleUrl: './checkout-info.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CheckoutInfoComponent {
  @Input() label: string | undefined
  @Input() price: number | undefined
}
