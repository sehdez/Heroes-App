import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { Publisher, Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ConfirmarComponent } from '../../components/confirmar/confirmar.component';


@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  
  styles: [`
    img{
      width:100%;
      border-radius: 5px;
    }
  `
  ]
})
export class AgregarComponent implements OnInit {


  publishers= [
    {
      id:'DC Comics',
      desc: 'Dc - Comics'
    },
    {
      id:'Marvel Comics',
      desc: 'Marvel - Comics'
    }
  ]

  heroe:Heroe={
    superhero:'',
    alter_ego:'',
    characters:'',
    first_appearance:'',
    publisher:Publisher.DCComics,
    alt_img: ''
  }
  




  constructor(  private heroesService:HeroesService ,
                private activatedRoute:ActivatedRoute,
                private router: Router,
                private snackBar: MatSnackBar,
                public dialog: MatDialog ) { }

  ngOnInit(): void {

    if(!this.router.url.includes('editar') ){
      
      return
    }

    
    this.activatedRoute.params
      .pipe(
        switchMap( ({ id }) => this.heroesService.getHeroePorId( id ) )
      )
      .subscribe( heroe => this.heroe = heroe );
      console.log(this.heroe.alt_img);

  }

  guardar(){
    if(this.heroe.alt_img?.trim().length ===0){this.heroe.alt_img='assets/no-image.png'}
    if(this.heroe.superhero.trim().length===0){return}
    

    if (this.heroe.id){
      //actualizar
      this.heroesService.actualizarHeroe( this.heroe , this.heroe.id )
      .subscribe( heroe => {
        this.mostrarSnackBar('Registro Actualizado');
        this.router.navigate(['/heroes/listado']);
      });
    }
    else{
      //crear nuevo registro
      this.heroesService.agregarHeroe( this.heroe )
      .subscribe(  heroe => {
        this.mostrarSnackBar('Registro Creado');
        this.router.navigate(['/heroes/listado']);
      });
    }   
    
  }
  eliminar(){
      //llamamos al confirmar Component
    const dialog = this.dialog.open(ConfirmarComponent,{
      width: '300px',
      data: this.heroe.superhero
    });

    dialog.afterClosed().subscribe(
      (result)=>{
        if ( result ) {
           this.heroesService.eliminarHeroe(this.heroe.id!)
            .subscribe (resp =>{
              this.router.navigate([ '/heroes/listado']);
              this.mostrarSnackBar('Registro eliminado');
            });
        }
      }
    )
  }
  
  mostrarSnackBar( mensaje:string) {
    this.snackBar.open(mensaje,'', {
      duration: 3000,
    });
  }

  

}
