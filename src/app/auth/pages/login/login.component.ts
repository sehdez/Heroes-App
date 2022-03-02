import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Subscriber } from 'rxjs';
import { Auth } from '../../interfaces/auth.interfaces';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [`
    .caja{
      width:100%;
    }
    .formulario{
      width:100%;
    }
    .r{
      float:right;
    }
  `
  ]
})
export class LoginComponent {

  constructor(  private router: Router,
                private authService:AuthService, 
                private fb: FormBuilder, 
                private snackBar: MatSnackBar,
                public dialog: MatDialog ) { }


  miFormulario: FormGroup = this.fb.group({
    user: [ '', [Validators.required]],
    psw: [ '' ,[Validators.required] ],
  })


  mostrarSnackBar( mensaje:string) {
    this.snackBar.open(mensaje,'', {
      duration: 3000,
    });
  }


  
  login(){
    // Ir al backEnd 
    // Un usuario
     this.authService.login(this.miFormulario.controls['user'].value,
                            this.miFormulario.controls['psw'].value)
         .subscribe(auth =>{
          // let valido = false;
          // for (let user in auth) {
          //   let usuario:Auth = auth[user];
          //   if(usuario.user===us&& usuario.psw===psw){
          //     valido = true;
          //     localStorage.setItem( 'token',user );
          //   }
          // }
          if(this.authService.sesionValida){
            
            this.mostrarSnackBar('Sesion Iniciada');
            this.router.navigate(['./heroes']);
          } else{
            this.mostrarSnackBar('Usuario o contraseña invalidos!!');
            return;

          }
         })
      // .subscribe( resp =>{
      //   if(resp[0]===undefined){
      //     this.mostrarSnackBar('Usuario o contraseña invalidos!!');
      //     return;
      //   }

      //   if (resp[0].user===this.miFormulario.controls['user'].value
      //       && resp[0].psw ===this.miFormulario.controls['psw'].value ){
      //         this.mostrarSnackBar('Sesión iniciada');
      //     this.router.navigate(['./heroes']);
      //   }
      // })

    
  }

}
