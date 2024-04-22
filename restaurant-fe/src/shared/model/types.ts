export interface DishFilter {
  category: string
  search?: string
}

export interface Dish {
  id: string
  name: string
  description: string
  image: string
  price: number
  category: string
  popular: boolean
}

export interface DishState {
  dishes: Dish[]
  isLoading: boolean
  filter: DishFilter
}

export interface BasketItem {
  dish: Dish
  quantity: number
}
export interface Basket {
  items: BasketItem[]
  // customer id
  id: string
}

export interface BasketState {
  basket: Basket | null
  toUpdateBasket: Basket | null
  isLoading: boolean
}

export type Filter = Record<string, string | number | boolean>
