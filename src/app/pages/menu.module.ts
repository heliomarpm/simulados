import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { MenuComponent } from './menu.component';

const routes: Routes = [
   {
      path: 'page',
      component: MenuComponent,
      children: [
         {
            path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomePageModule)
         },
      ]
   },
   {
      path: '', redirectTo: '/page/home', pathMatch: 'full'
   }
];

@NgModule({
   imports: [
      CommonModule,
      IonicModule,
      RouterModule.forChild(routes)
   ],
   declarations: [MenuComponent]
})
export class MenuModule { }
