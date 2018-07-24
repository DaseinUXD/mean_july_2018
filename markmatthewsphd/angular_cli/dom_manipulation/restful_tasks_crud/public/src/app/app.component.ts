import {Component, OnInit} from '@angular/core';

import {HttpService} from './http.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    page_title: string;
    task_list: string;
    tasks = [];
    task_ids: string;
    task: string;
    newTask: any;
    editTask: any;

    // pokemon = [];

    constructor(private _httpService: HttpService) {
    }

    ngOnInit() { // ngOnInit runs after the constructor method
        // this.getNewTaskForm();
        // this.getTasksFromService();
        this.onPageLoad();
        this.editTask = {title: '', description: ''};
        this.newTask = {title: '', description: ''};
        this.page_title = 'Restful Tasks API';
        this.task_list = 'All the Tasks:';
        this.tasks = [];
        this.task_ids = '';
        this.task = '';

        // this.getPokemonFromService();
        // this.getPokemonWithAbility();
    }

    getTasksFromService() {
        const observable = this._httpService.getTasks();
        observable.subscribe(data => {
            console.log('got our data', data);
            this.tasks = data['data'];
            console.log(data['data'][0].description);
        });
    }

    getNewTaskForm() {
        const observable = this._httpService.getNew();
        observable.subscribe(data => {
            console.log('got new task form', data);
        });
    }

    getEdit(id: string): void {
        console.log('edit data accessed?');
        const observable = this._httpService.getTask(id);
        observable.subscribe(data => {
            this.editTask = data['data'];
            console.log(data['data']);
        });

    }

    onPageLoad(): void {
        console.log('Page Loaded');
        const observable = this._httpService.getTasks();
        observable.subscribe(data => {
            this.tasks = data['data'];
        });
    }

    // onShowClick(id: string): void {
    //     console.log('Show click is working. this is task id:', id);
    //     const observable = this._httpService.getTask(id);
    //     observable.subscribe(data => {
    //         this.task = data['data'];
    //         console.log(data);
    //     });
    // }

    onSubmit() {
        const observable = this._httpService.addTask(this.newTask);
        observable.subscribe(data => {
            console.log('Got data from post back', data);
            this.newTask = {title: '', description: ''};
        });
    }

    onEdit() {
        const observable = this._httpService.updateTask(this.editTask);
        observable.subscribe(data => {
            console.log('Edited data posted back', data);
            this.editTask = {title: '', description: ''};
        });
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

