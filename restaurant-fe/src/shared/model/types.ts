export interface DishFilter {
  category: string
  search?: string
}

export interface Dish {
  id: number
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

export type Filter = Record<string, string | number | boolean>
