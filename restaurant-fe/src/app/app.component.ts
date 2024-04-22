import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  inject
} from '@angular/core'
import { RouterOutlet } from '@angular/router'
import { ToastModule } from 'primeng/toast'
import { BasketIconComponent } from './basket/basket-icon/basket-icon.component'
import { BasketSignalStore } from '@store/basket.store'
import { BasketRightPanelComponent } from './basket/basket-right-panel/basket-right-panel.component'

@Component({
  selector: 'rst-root',
  standalone: true,
  imports: [
    RouterOutlet,
    ToastModule,
    BasketIconComponent,
    BasketRightPanelComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  readonly basketStore = inject(BasketSignalStore)
  showPanel = true
  title = 'restaurant-fe'

  constructor(private cdr: ChangeDetectorRef) {}

  fillShowPanel(value: boolean) {
    if (value !== this.showPanel) {
      this.showPanel = value
      this.cdr.markForCheck()
    }
  }
}
