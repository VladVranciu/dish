import { ApplicationConfig } from '@angular/core'
import { provideRouter } from '@angular/router'

import { routes } from './app.routes'
import { MessageService } from 'primeng/api'
import { provideHttpClient, withInterceptors } from '@angular/common/http'
import { APIInterceptor } from '@interceptors/api.interceptor'

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideHttpClient(withInterceptors([APIInterceptor])),
    MessageService
  ]
}
