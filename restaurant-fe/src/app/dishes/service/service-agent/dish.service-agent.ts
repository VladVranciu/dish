import { Injectable } from '@angular/core';
import { Dish } from '@model/types';
import { BaseServiceAgent } from '@services/base.service-agent';

const RESOURCE = 'dishes'

@Injectable({
  providedIn: 'root'
})
export class DishServiceAgent extends BaseServiceAgent<Dish>{

  constructor() {
    super(RESOURCE)
   }
}
