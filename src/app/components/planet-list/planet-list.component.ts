import { Component, OnInit } from '@angular/core';
import { FactsService } from "../../facts.service";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: 'app-planet-list',
  templateUrl: './planet-list.component.html',
  styleUrls: ['./planet-list.component.scss']
})
export class PlanetListComponent implements OnInit {

  constructor(
    private factsService: FactsService,
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  planets: any | undefined;
  subscription: any;
  cachedData: string | null = localStorage.getItem('planets');
  page: number = 1;
  numberOfRecords: number = 0;
  baseUrl: string = 'https://swapi.dev/api/planets';
  nextUrl?: any = '';
  prevUrl?: any = '';

  getPlanets(url?: string): void {
    console.log(this.nextUrl, this.prevUrl);
    if(url===undefined){url=this.baseUrl;}
    this.subscription = this.factsService.getPlanets(url).subscribe(
      data => {
        localStorage.setItem("planets", JSON.stringify(data));
        this.planets = data.results;
        this.numberOfRecords = Number(data.count);
        this.nextUrl = data.next;
        this.prevUrl = data.previous;
        this.subscription.unsubscribe();
      },
      err => console.error(err), () => console.log('get Films List completed')
    );
  }

  formatURL(url: string){
    return url.split("/")[5];
  }

  changePage(url: string){
    this.getPlanets(url)
    this.page = Number(url.split("=")[1]);
  }

  ngOnInit(): void {
    if(this.cachedData) {
      this.checkCachedData();
    }else{
      this.getPlanets(this.baseUrl);
      this.page = 1;
    }
  }

  checkCachedData():void{
    if(this.cachedData) {
      let parsedCachedData = JSON.parse(this.cachedData);
      this.planets = parsedCachedData.results;
      this.numberOfRecords = Number(parsedCachedData.count);
      this.nextUrl = parsedCachedData.next;
      this.prevUrl = parsedCachedData.previous;
      if(this.nextUrl){
        this.page = (Number(this.nextUrl.split("=")[1])-1);
      }
    }
  }

  navigateTo(index: number){
    this.router.navigate([`/planet/${index+1}`], {});
  }

  ngOnDestroy(): void {
    if(this.subscription){
      this.subscription.unsubscribe();
    }
  }

}
