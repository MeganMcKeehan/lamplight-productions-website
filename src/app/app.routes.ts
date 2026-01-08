import { Routes } from '@angular/router';
import { CartPage } from './pages/cartPage/cartPage.component';
import { MainPage } from './pages/mainPage/mainPage.component';
import { AdminPage } from './pages/adminPage/adminPage.component';

export const routes: Routes = [
  {
    path: '',
    component: MainPage,
  },
  {
    path: 'cart',
    component: CartPage,
  },
  {
    path: 'admin',
    component: AdminPage,
  },
];
