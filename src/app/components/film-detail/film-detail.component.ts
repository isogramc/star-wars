import { Component, OnInit } from '@angular/core';
import {FactsService} from "../../facts.service";
import {ActivatedRoute} from '@angular/router';
import IFilm from "../../types/typings";

@Component({
  selector: 'app-film-detail',
  templateUrl: './film-detail.component.html',
  styleUrls: ['./film-detail.component.scss']
})
export class FilmDetailComponent implements OnInit {

  constructor(
    private factsService: FactsService,
    private activatedRoute: ActivatedRoute
  ) {}

  film: IFilm | undefined;
  subscription: any;
  id: string | null = "";

  getFilm(id: string) {
    this.subscription = this.factsService.getFilm(id).subscribe(
      data => {
        this.film = data;
        this.subscription.unsubscribe();
      },
      err => console.error(err), () => console.log('get Film Detail completed')
    )
  }

  ngOnInit(): void {}

  ngAfterContentInit(){
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if(this.id){
      this.getFilm(this.id);
    }
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
