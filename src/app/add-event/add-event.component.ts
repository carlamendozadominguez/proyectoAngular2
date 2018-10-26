import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { Hero }         from '../hero';
import { HeroService }  from '../hero.service';
@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  heroes: Hero[];


  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
    .subscribe(heroes => this.heroes = heroes);
  }

  goBack(): void {
    this.location.back();
  }


  add(name: string, lugar:string, fecha:string, details: string): void {
    //Trim quita los espacios en blanco
    name = name.trim();
    lugar = lugar.trim();
    fecha = fecha.trim();
    details = details.trim();
    if (!name || !lugar || !fecha) { return; }
    this.heroService.addHero({ name, lugar,fecha, details} as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
      this.goBack();
  }
}
