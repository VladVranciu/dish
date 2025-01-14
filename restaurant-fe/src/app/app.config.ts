import { ApplicationConfig } from '@angular/core'
import { provideAnimations } from '@angular/platform-browser/animations'
import { provideRouter } from '@angular/router'

import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { APIInterceptor } from '@interceptors/api.interceptor'
import { MessageService } from 'primeng/api'
import { routes } from './app.routes'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([APIInterceptor])),
    provideAnimations(),
    MessageService
  ]
}
