import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CocktailapiService {

  constructor(private http: HttpClient) { }

  private Url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';


  getCocktailletter(letter: string): Observable<any> {
    return this.http.get<any>(`${this.Url}?f=${letter}`)
  }

  getCocktailname(name: string): Observable<any> {
    return this.http.get<any>(`${this.Url}?s=${name}`)
  }

}

