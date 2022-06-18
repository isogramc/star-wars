import { Component, OnInit } from '@angular/core';
import { FactsService } from '../../facts.service';

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.html',
  styleUrls: ['./list-films.scss']
})
export class ListFilmsComponent implements OnInit {

  constructor(
    private factsService: FactsService
  ) {}

  films: any | undefined;
  subscription: any;
  page: number = 1;
  numberOfRecords: number = 0;

  getFilms() {
       this.subscription = this.factsService.getFilms().subscribe(
      data => {
        this.films = data;
        this.numberOfRecords = Number(data.count);
        this.subscription.unsubscribe();
        },
      err => console.error(err), () => console.log('get Films List completed')
    );
  }

  ngOnInit(): void { }

  ngAfterContentInit(){
    this.getFilms();
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
