import { Component, OnInit } from '@angular/core';
import { HeroesService } from '../../services/heroes.service';
import { Heroe, Heroes } from '../../interfaces/heroes.interfaces';
import { KeyValuePipe } from '@angular/common';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styles: [
    `
    mat-card{
      margin-top:20px
    }
    `
  ]
})
export class ListadoComponent implements OnInit {

  constructor( private heroesService: HeroesService ) { }

  heroes: Heroe[]=[]
  

  ngOnInit(): void {

    this.heroesService.getHeroes()
      .subscribe( heroes => {
        for (let heroe in heroes){
          let her:Heroe = heroes[heroe];
          if(!her.id){
            const id ={'id':heroe};
            her = Object.assign(id,her);
            this.heroesService.actualizarHeroe(her,heroe)
              .subscribe()
          }
          this.heroes.push(her);
        }
      });
  }
}
