import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'

@Component({
  selector: 'rst-increment-button',
  standalone: true,
  imports: [],
  templateUrl: './increment-button.component.html',
  styleUrl: './increment-button.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class IncrementButtonComponent {
  @Input({ required: true }) quantity: number = 0
  @Output() onClick = new EventEmitter<number>()

  updateQuantity(quantity: number) {
    this.onClick.emit(quantity)
  }
}
