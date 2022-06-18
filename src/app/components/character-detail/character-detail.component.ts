import { Component, OnInit } from '@angular/core';
import {FactsService} from "../../facts.service";
import {ActivatedRoute} from "@angular/router";
import ICharacter from "../../types/typings";

@Component({
  selector: 'app-character-detail',
  templateUrl: './character-detail.component.html',
  styleUrls: ['./character-detail.component.scss']
})
export class CharacterDetailComponent implements OnInit {

  constructor(private factsService: FactsService,
              private activatedRoute: ActivatedRoute) { }

  character: ICharacter | undefined;
  subscription: any;
  subscription2: any;
  id: string | null = "";
  homeworld: string = "";
  planet: any;
  planetNum: string = "";

  getCharacter(id: string){
    this.subscription = this.factsService.getCharacter(id).subscribe(
      data => {
        this.character = data;
        this.homeworld = this.character.homeworld;
        this.getHomeWorld(this.character?.homeworld);
        this.subscription.unsubscribe();
      },
      err => console.error(err), () => console.log('get Character Detail completed')
    )
  }

  getHomeWorld(url:string){
    let eal = this.homeworld.split("/");
    let num = eal[5];
    this.planetNum = num;
    this.subscription2 = this.factsService.getPlanet(url).subscribe(data => {
        this.planet = data;
        console.log(this.planet);
        this.subscription2.unsubscribe();
      },
      err => console.error(err), () => console.log('get Character Detail completed')
    )
  }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.getCharacter(this.id);
    }
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
    this.subscription2.unsubscribe();
  }

}
