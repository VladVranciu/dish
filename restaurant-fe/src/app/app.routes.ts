import { Routes } from '@angular/router'
import { DishWrapperComponent } from './dishes/dish-wrapper/dish-wrapper.component'

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dishes',
    pathMatch: 'full'
  },
  {
    path: 'dishes',
    component: DishWrapperComponent
  },
  {
    path: '**',
    redirectTo: 'dishes',
    pathMatch: 'full'
  }
]
