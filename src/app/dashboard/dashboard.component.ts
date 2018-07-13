import { Component, OnInit } from '@angular/core';
import { Hero } from "src/app/hero";
import { HeroService } from "src/app/hero.service";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  
  getHeroes(): void{
    this.heroServices.getHeroes().subscribe(heroes => this.heroes = heroes.slice(1,5));
  }

  heroes: Hero[] = [];

  constructor(private heroServices: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

}
