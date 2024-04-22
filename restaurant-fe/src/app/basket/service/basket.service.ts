import { Injectable } from '@angular/core'
import { Basket } from '@model/types'
import { BaseService } from '@services/base.service'
import { BasketServiceAgent } from './service-agent/basket.service-agent'

@Injectable({
  providedIn: 'root'
})
export class BasketService extends BaseService<Basket> {
  constructor(private basketServiceAgent: BasketServiceAgent) {
    super(basketServiceAgent)
  }
}
