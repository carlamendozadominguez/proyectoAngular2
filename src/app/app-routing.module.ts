import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import  {AddEventComponent } from './add-event/add-event.component';
import { HeroesComponent }      from './heroes/heroes.component';

const routes: Routes = [
    { path: '', redirectTo: '/heroes', pathMatch: 'full' },
    { path: 'heroes', component: HeroesComponent },
    { path: 'addevent', component: AddEventComponent },
  ];

  @NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ]
  })
  export class AppRoutingModule {}
  