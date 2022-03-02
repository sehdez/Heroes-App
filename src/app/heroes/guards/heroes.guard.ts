import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, RouterStateSnapshot, UrlSegment, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { HeroesService } from '../services/heroes.service';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroesGuard implements CanLoad, CanActivate{

  constructor( private heroesService:HeroesService,
                private router:Router) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean>| Promise<boolean> | boolean{
      
      return this.heroesService.verificaAutentificacion()
                .pipe(
                  tap( estaAutenticado =>{
                    if ( !estaAutenticado ){
                      this.router.navigate(['./heroes/listado'])
                    }
                  } )
                )
      if( this.heroesService.auth.user ){
        return false;
      }else{
        return true;
      }
  }


  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean> | Promise<boolean> | boolean {
    
      return this.heroesService.verificaAutentificacion()
                  .pipe(
                    tap( estaAutenticado =>{
                      if ( !estaAutenticado ){
                        this.router.navigate(['./heroes/listado'])
                      }
                    } )
                  )


      if( this.heroesService.auth.user ){
        return false;
      }else{
        return true;
      }

  }
}
