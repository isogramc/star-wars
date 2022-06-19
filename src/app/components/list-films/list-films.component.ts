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
        localStorage.setItem("films", JSON.stringify(data));
        this.numberOfRecords = Number(data.count);
        this.subscription.unsubscribe();
        },
      err => console.error(err), () => console.log('get Films List completed')
    );
  }

  ngOnInit(): void {
    this.checkCachedData();
    this.getFilms();
  }

  checkCachedData():void{
    let cachedData = localStorage.getItem('films');
    if(cachedData){
      let parsedCachedData = JSON.parse(cachedData);
      this.films = parsedCachedData;
      this.numberOfRecords = Number(parsedCachedData.count);
    }
  }

  navigateTo(index: number){
    this.router.navigate([`/film/${index+1}`], {});
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
