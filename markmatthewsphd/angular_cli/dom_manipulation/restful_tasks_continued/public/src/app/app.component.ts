import {Component, OnInit} from '@angular/core';

import {HttpService} from "./http.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  page_title: string;
  task_list: string;
  tasks = [];

  // pokemon = [];

  constructor(private _httpService: HttpService) {
  }

  ngOnInit() { // ngOnInit runs after the constructor method
    // this.getNewTaskForm();
    this.getTasksFromService();
    this.page_title = 'Restful Tasks API';
    this.task_list = 'All the Tasks:';
    this.tasks = [];

    // this.getPokemonFromService();
    // this.getPokemonWithAbility();
  }

  getTasksFromService() {
    let observable = this._httpService.getTasks();
    observable.subscribe(data => {
      console.log('got our data', data);
      this.tasks = data['data'];
      console.log(data['data'][0].description)
    })
  }

  getNewTaskForm(){
    let observable = this._httpService.getNew();
    observable.subscribe(data => {
      console.log('got new task form', data);
    })
  }

  // getPokemonFromService(){
  //   let observable = this._httpService.getPokemon();
  //   observable.subscribe(pokemon => {
  //     console.log('got our pokemon named:', pokemon.name);
  //     for (let i in pokemon.abilities){
  //       console.log('ability',i,'is', pokemon.abilities[i].ability.name,  pokemon.abilities[i].ability.name);
  //     }
  //     this.pokemon = pokemon['pokemon'];
  //   } )
  // }
  // getPokemonWithAbility(){
  //   let observable = this._httpService.getWithAbility();
  //   observable.subscribe(pokemonAbility => {
  //     var total = (pokemonAbility.pokemon).length;
  //     var abilityName = pokemonAbility.name;
  //     console.log(total, 'pokemon have the ability:', abilityName);
  //
  //     for (let i in pokemonAbility.pokemon){
  //
  //       console.log(pokemonAbility.pokemon[i].pokemon.name)
  //     }
  //
  //   })
  // }

}

