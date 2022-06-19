import { Component, OnInit } from '@angular/core';
import {FactsService} from "../../facts.service";
import {ActivatedRoute} from "@angular/router";
import IPlanet from "../../types/typings";

@Component({
  selector: 'app-planet-detail',
  templateUrl: './planet-detail.component.html',
  styleUrls: ['./planet-detail.component.scss']
})
export class PlanetDetailComponent implements OnInit {

  constructor(private factsService: FactsService,
              private activatedRoute: ActivatedRoute) { }

  planet: IPlanet | undefined;
  subscription: any;
  id: string | null = "";
  loading: boolean = false;

  formatTime(timestamp: any) {
    if(timestamp){
      return timestamp.split('T')[0];
    }else{ return null; }
  }

  showImage(nameEval: any) {
    if(nameEval){
      return nameEval.toLowerCase()==='hoth';
    }else {return null;}
  }

  getPlanetDetail(id: string){
    this.subscription = this.factsService.getPlanetDetail(id).subscribe(
      data => {
        this.planet = data;
        this.loading = false;
        this.subscription.unsubscribe();
      },
      err => console.error(err), () => console.log('get Planet Detail completed')
    )
  }

  ngOnInit(): void {
    this.loading = true;
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.getPlanetDetail(this.id);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
