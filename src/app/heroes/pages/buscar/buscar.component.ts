import { Component, OnInit } from '@angular/core';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { Heroe } from '../../interfaces/heroes.interfaces';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-buscar',
  templateUrl: './buscar.component.html',
  styles: [
  ]
})
export class BuscarComponent implements OnInit {

  termino:string = "";
  heroes: Heroe[] = [];
  heroesFiltrados: Heroe[] = [];
  heroeSeleccionado: Heroe|undefined;
  sugerencia: boolean = true;

  constructor( private heroesService: HeroesService ) { }

  ngOnInit(): void {
    
  }

  buscando(){
    this.heroes=[];
    this.heroesService.getHeroes()
      .subscribe(heroes => {
        for (let i in heroes) {
            let heroe :Heroe = heroes[i];
            this.heroes.push(heroe)    
        }
        this.heroesFiltrados=[];
        this.heroes.forEach( heroe => {
          const heroeLower = heroe.superhero?.toLowerCase();
          
          if ( heroeLower.indexOf(this.termino.toLowerCase()) >=0 && this.heroesFiltrados.length <5){
            this.heroesFiltrados.push(heroe)
          }
        })
      });
  }

  opcionSeleccionada(event: MatAutocompleteSelectedEvent ){
    if (this.heroesFiltrados.length ==0 ){
      this.heroeSeleccionado = undefined;
      return
    }
    const heroe: Heroe = event.option.value;
    this.termino = heroe.superhero;
    this.heroesService.getHeroePorId( heroe.id! )
      .subscribe( heroe=> this.heroeSeleccionado = heroe );
  }

}
