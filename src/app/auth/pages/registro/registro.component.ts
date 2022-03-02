import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AuthService } from '../../services/auth.service';
import { MatDialog } from '@angular/material/dialog';
import { Auth } from '../../interfaces/auth.interfaces';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
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
export class RegistroComponent  {

  constructor(  private router: Router,
    private authService:AuthService, 
    private fb: FormBuilder, 
    private snackBar: MatSnackBar,
    public dialog: MatDialog ) { }


  miFormulario: FormGroup = this.fb.group({
  user: [ '', [Validators.required]],
  psw: [ '' ,[Validators.required] ],
  psw2: [ '' ,[Validators.required] ],
  })


  mostrarSnackBar( mensaje:string) {
  this.snackBar.open(mensaje,'', {
  duration: 3000,
  });
  }

  auth:Auth={
    user: "",
    psw: "",

  }


  registrarse(){

    if( this.miFormulario.controls['psw'].value
        != this.miFormulario.controls['psw2'].value ){
          this.mostrarSnackBar('Las contraseñas no hicieron match');
          return;
        }


    this.auth.user = this.miFormulario.controls['user'].value;  
    this.auth.psw = this.miFormulario.controls['psw'].value;
  
  this.authService.nuevoRegistro( this.auth)
  .subscribe( resp =>{
  this.mostrarSnackBar('Registro Exitoso');
   this.authService.login( this.miFormulario.controls['user'].value ,this.miFormulario.controls['psw'].value )
    .subscribe(resp =>{
      if(this.authService.sesionValida){
            
        this.mostrarSnackBar('Sesion Iniciada');
        this.router.navigate(['./heroes']);
      } else{
        this.mostrarSnackBar('Usuario o contraseña invalidos!!');
        return;

      }
    })
   
  })


  }

}
