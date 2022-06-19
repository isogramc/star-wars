import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListFilmsComponent } from './components/list-films/list-films.component';
import { FactsPipe } from './pipes/facts.pipe';

import { Routes, RouterModule, Router } from "@angular/router";
import { FilmDetailComponent } from './components/film-detail/film-detail.component';
import { CharacterDetailComponent } from './components/character-detail/character-detail.component';
import { CharactersPipe } from './pipes/characters.pipe';
import { FilmsPipe } from './pipes/films.pipe';
import { PlanetsPipe } from './pipes/planets.pipe';
import { PlanetListComponent } from './components/planet-list/planet-list.component';
import { PlanetDetailComponent } from './components/planet-detail/planet-detail.component';
import { MenuComponent } from './components/menu/menu.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { LoaderComponent } from './components/loader/loader.component';

const routes: Routes = [
  {path:'', redirectTo: '/films', pathMatch:'full'},
  {path:'films', component: ListFilmsComponent},
  {path:'planets', component: PlanetListComponent},
  {path:'planet/:id', component: PlanetDetailComponent},
  {path:'film/:id', component: FilmDetailComponent},
  {path:'character/:id', component: CharacterDetailComponent},
  {path:'**', component: PageNotFoundComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    ListFilmsComponent,
    FactsPipe,
    FilmDetailComponent,
    CharacterDetailComponent,
    CharactersPipe,
    FilmsPipe,
    PlanetsPipe,
    PlanetListComponent,
    PlanetDetailComponent,
    MenuComponent,
    PageNotFoundComponent,
    LoaderComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash:false})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
