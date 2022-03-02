import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Heroe, Heroes } from '../interfaces/heroes.interfaces';
import { Observable, of } from 'rxjs';
import { environment } from '../../../environments/environment';
import { map } from 'rxjs/operators';
import { Auth } from '../../auth/interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class HeroesService {

  private baseUrl: string = "https://heroesapp-f5f85-default-rtdb.firebaseio.com";
  private _auth: Auth| undefined;

    get auth(): Auth{
      return { ...this._auth! }
    }

  constructor( private http: HttpClient ) { }

  verificaAutentificacion(): Observable<boolean> {

    if( !localStorage.getItem('token' )){
      return of(true);
    }
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/${ localStorage.getItem( 'token' ) }.json`)
                .pipe(
                  map( auth => {
                    if(auth === undefined){
                      return true;
                    }else{
                    this._auth = auth;
                    return false;}
                  } )
                )
  }


  


  getHeroes(): Observable<Heroe[]> {
    return this.http.get<Heroe[]>( `${this.baseUrl}/heroes.json` );
  }

  getHeroePorId( id:string ): Observable<Heroe> {
    return this.http.get<Heroe>(`${this.baseUrl}/heroes/${ id }.json`);
  }

  agregarHeroe(heroe:Heroe):Observable<Heroe>{
    return this.http.post<Heroe>( `${this.baseUrl}/heroes.json`, heroe );
  }

  actualizarHeroe(heroe:Heroe, id:string):Observable<Heroe>{
    return this.http.put<Heroe>( `${this.baseUrl}/heroes/${ id }.json`, heroe );
  }

  eliminarHeroe(id:string):Observable<any>{
    return this.http.delete<any>( `${this.baseUrl}/heroes/${ id }.json`);
  }

}
