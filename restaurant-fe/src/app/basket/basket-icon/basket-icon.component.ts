import { ChangeDetectionStrategy, Component, Input } from '@angular/core'

@Component({
  selector: 'rst-basket-icon',
  standalone: true,
  imports: [],
  templateUrl: './basket-icon.component.html',
  styleUrl: './basket-icon.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BasketIconComponent {
  @Input() quantity: number | undefined
}
