export default interface IFilm{
  title: string,
  episode_id: number,
  opening_crawl: string,
  director: string,
  producer: string,
  release_date: string,
  characters: string[],
  planets: string[],
  starships: string[],
  vehicles: string[],
  species: string[],
  created: string,
  edited: string,
  url: string
}

export default interface IFilms{
  count: number,
  next: null,
  previous: null,
  results: IFilm[]
}

export default interface ICharacter{
  name: string,
  height: string,
  mass: string,
  hair_color: string,
  skin_color: string,
  eye_color: string,
  birth_year: string,
  gender: string,
  homeworld: string,
  films: [],
  species: string[],
  vehicles: string[],
  starships: string[],
  created: string,
  edited: string,
  url: string
}

export default interface IPlanet{
  name: string,
  rotation_period: number,
  orbital_period: number,
  diameter: string,
  climate: string,
  gravity: string,
  terrain: string,
  surface_water: string,
  population: string,
  residents: [],
  films: [],
  created: string,
  edited: string,
  url: string
}

/*
export default interface IPlanets{
  count: number,
  next: string,
  previous: null,
  results: IPlanet[]
}*/
