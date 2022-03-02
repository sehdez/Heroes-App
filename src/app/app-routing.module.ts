import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { AuthGuard } from './auth/guards/auth.guard';
import { HeroesGuard } from './heroes/guards/heroes.guard';

const routes: Routes = [
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule ),
    canLoad:[ HeroesGuard ],
    canActivate:[ HeroesGuard ]
    
  },
  {
    path: 'heroes',
    loadChildren: () => import( './heroes/heroes.module' ).then( m => m.HeroesModule ),
    canLoad:[ AuthGuard ],
    canActivate:[ AuthGuard ]
  },
  // {
  //   path: '404',
  //   component: ErrorPageComponent
  // },
  {
    path: '**',
    // component: ErrorPageComponent
    redirectTo: 'auth'
  },
  
]

@NgModule({
  imports: [
    RouterModule.forRoot( routes, { useHash:true } )
  ],
  exports: [
    RouterModule
  ]

})
export class AppRoutingModule { }
