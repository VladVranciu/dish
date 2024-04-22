import { Injectable } from '@angular/core'
import { Basket } from '@model/types'
import { BaseServiceAgent } from '@services/base.service-agent'

const RESOURCE = 'basket'

@Injectable({
  providedIn: 'root'
})
export class BasketServiceAgent extends BaseServiceAgent<Basket> {
  constructor() {
    super(RESOURCE)
  }
}
