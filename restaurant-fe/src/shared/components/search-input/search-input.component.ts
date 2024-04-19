import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output
} from '@angular/core'
import { FormsModule } from '@angular/forms'
import { INPUT_DEBOUNCE } from '@constants/constants'
import { debounceTime, throttle } from 'rxjs'

@Component({
  selector: 'rst-search-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-input.component.html',
  styleUrl: './search-input.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SearchInputComponent {
  @Input() placeholder = 'Search'
  @Output() onSearchChanged: EventEmitter<string> = new EventEmitter()
  search = ''

  searchChanged(event: string) {
    this.onSearchChanged.emit(event)
  }
}
