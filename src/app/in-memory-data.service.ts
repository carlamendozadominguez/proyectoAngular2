
import { Hero } from './hero';
import { InMemoryDbService } from 'angular-in-memory-web-api';


export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
            { name: "FIESTA", id: 11 , lugar: "Santa Cruz", fecha: "11/02/2019", details: "es en una finca en el norte, y la entrada sale 5 euros" },
            { name: "PLENILUNIO", id: 12 , lugar: "Santa Cruz", fecha: "30/10/2018",  details: "es en una finca en el santa cruz, es gratis y es tooodoooo el dia " },
        ];
        return {heroes};
      }
    

genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}