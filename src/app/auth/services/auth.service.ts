import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { tap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { Auth } from '../interfaces/auth.interfaces';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
      // asegurarse de que se haya importado des de environment nada más sin el '/prod'
    private baseUrl: string  = "https://heroesapp-f5f85-default-rtdb.firebaseio.com";
    private _auth: Auth| undefined;

    get auth(): Auth{
      return { ...this._auth! }
    }

    constructor(private http:HttpClient,
              private router: Router
              ) { }


  verificaAutentificacion(): Observable<boolean> {

    if( !localStorage.getItem('token' )){
      return of(false);
    }
    return this.http.get<Auth>(`${ this.baseUrl }/usuarios/${ localStorage.getItem( 'token' ) }.json`)
                .pipe(
                  map( auth => {
                    if(auth === undefined){
                      return false;
                    }else{
                    this._auth = auth;
                    return true;}
                  } )
                )
  }
  sesionValida = false



  login(us:string, psw:string){
    return this.http.get<Auth[]>(`${this.baseUrl}/usuarios.json`)
                .pipe(
                  tap( auth => {
                    this.sesionValida = false
                    for (let user in auth) {
                      let usuario:Auth = auth[user];
                      if(usuario.user===us&& usuario.psw===psw){
                        this.sesionValida = true;
                        localStorage.setItem( 'token',user );
                      }
                    }
                    if(this.sesionValida){
                      this.router.navigate(['./heroes']);
                    } else{
                      return;
                    }
                  })
                )
              
    //  return this.http.get<any>(`${ this.baseUrl }/usuarios/?usuarios=${ us }&psw=${ psw }`)
    //             .pipe(
    //               tap( auth => {
                    
    //                 this._auth = auth[0];
    //                   if(auth[0]===undefined){return}
    //                   localStorage.setItem( 'token',auth[0].id );
    //                   console.log(this._auth)
    //                 }),
    //               // tap( auth => localStorage.setItem( 'id',auth.id) ),
    //             );
  }

  nuevoRegistro( auth:Auth ){
    return this.http.post<Auth>(`${ this.baseUrl }/usuarios.json`,auth);
  }


}
