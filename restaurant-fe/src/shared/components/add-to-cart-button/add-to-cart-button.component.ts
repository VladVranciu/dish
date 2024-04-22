import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'

@Component({
  selector: 'rst-add-to-cart-button',
  standalone: true,
  imports: [],
  templateUrl: './add-to-cart-button.component.html',
  styleUrl: './add-to-cart-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddToCartButtonComponent {
  @Input() text: string | undefined
  @Output() onClick = new EventEmitter()

}
