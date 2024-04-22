import { Injectable } from '@angular/core'
import { BaseService } from '@services/base.service'
import { DishServiceAgent } from './service-agent/dish.service-agent'
import { Dish, DishFilter, Filter } from '@model/types'
import { DISH_CATEGORIES } from '@constants/constants'

@Injectable({
  providedIn: 'root'
})
export class DishService extends BaseService<Dish> {
  constructor(private dishServiceAgent: DishServiceAgent) {
    super(dishServiceAgent)
  }

  protected override computeFilters(storeFilters?: any) {
    let filters: Filter = {}
    if (storeFilters?.search) {
      filters['name'] = storeFilters.search
    }
    if (storeFilters?.category === DISH_CATEGORIES[0]) {
      filters['popular'] = 1
      return filters
    }
    filters['category'] = storeFilters?.category
    return filters
  }
}
