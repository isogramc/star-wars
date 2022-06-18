import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'films'
})
export class FactsPipe implements PipeTransform {

  transform(args:string[]) : any {

    console.log(args);

    let film = {
      title: "",
      episode_id: 0,
      opening_crawl: "",
      director: "",
      producer: "",
      release_date: "",
      characters: [],
      planets: [],
      starships: [],
      vehicles: [],
      species: [],
      created: "",
      edited: "",
      url: ""
    };

    let films = [];

    for (let key in args) {
      if(args[key]){
        console.log(key);
        if(key==="results"){
           for (const [k, v] of Object.entries(args[key])) {
             let film = v;
             films.push(film);
           }
        }
      }
    }
    return films;
  }

}
