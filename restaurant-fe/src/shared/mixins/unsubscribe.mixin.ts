import { OnDestroy } from '@angular/core'
import { Subject } from 'rxjs'

export function UnsubscribeMixin() {
  return class implements OnDestroy {
    onDestroy$: Subject<void> = new Subject<void>()

    ngOnDestroy(): void {
      this.onDestroy$.next()
      this.onDestroy$.complete()
    }
  }
}
