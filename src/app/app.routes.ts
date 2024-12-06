import { Routes } from '@angular/router';
import { SidebarComponent } from './sidebar/sidebar.component';
// import { AuthComponent } from './auth/auth.component';

export const routes: Routes = [
   {
    path : '',
    loadChildren : () => import('./auth/auth.module').then(x => x.AuthModule)
   },
   {
      path : '',
      component : SidebarComponent,
      children : [
         {
            path : 'category' , loadChildren : () => import('./dashboard/dashboard.module').then(x => x.DashboardModule)
         }
      ]
      // loadChildren : () => import('./')

   }
];
