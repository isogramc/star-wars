import { Component, OnInit } from '@angular/core';
import { FactsService } from '../../facts.service';
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.html',
  styleUrls: ['./list-films.scss']
})
export class ListFilmsComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private factsService: FactsService
  ) {}

  films: any | undefined;
  subscription: any;
  page: number = 1;
  numberOfRecords: number = 0;

  getFilms(): void {
       this.subscription = this.factsService.getFilms().subscribe(
      data => {
        this.films = data;
        this.numberOfRecords = Number(data.count);
        this.subscription.unsubscribe();
        },
      err => console.error(err), () => console.log('get Films List completed')
    );
  }

  ngOnInit(): void {
    this.getFilms();
  }

  navigateTo(index: number){
    this.router.navigate([`/film/${index+1}`], {});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
