import { Injectable } from '@angular/core';
import { Hero } from './hero'
import { HEROES } from './mock-heroes'
import { Observable, of } from 'rxjs'
import { MessageService } from './message.service';
import { HttpClient } from '../../node_modules/@angular/common/http';
import { catchError, map, tap } from 'rxjs/operators'


@Injectable({
  providedIn: 'root'
})
export class HeroService {

constructor(

  private http: HttpClient,
  private messageService: MessageService) { }

  private log(message: string){
    this.messageService.add('HeroesService: $(message)')
  }
  
  private herouesUrl = 'api/heroes';

  getHeroes(): Observable<Hero[]> {
    return this.http.get<Hero[]>(this.herouesUrl).pipe(catchError(this.handleError('getHeroes', []));
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.add("HeroService: fetched hero id=${id}");
    return of(HEROES.find(hero => hero.id === id));
  }

  private handleError<T>(operation = 'opeation', result?: T){
    return (error: any): Observable<T> => {
      console.error(error);
      this.log('$(operation) failed: ${error.message}');
      return of(result as T);
    }
  }
}