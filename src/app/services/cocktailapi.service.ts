import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, tap } from 'rxjs';
import { API, category, Ingredient } from '../types';





@Injectable({
  providedIn: 'root'
})
export class CocktailapiService {

  constructor(private http: HttpClient) { }

  private Url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php';


  getHTTPCocktailletter(letter: string) {
    return this.http.get<API>(`${this.Url}?f=${letter}`).pipe(
      map((res) => {
        return res.drinks
      }))
  }

  getHTTPCocktailname(name: string) {
    return this.http.get<API>(`${this.Url}?s=${name}`).pipe(
      map((res) => {
        return res.drinks
      }))
  }

  getHTTPIngredientname(name: string) {
    return this.http.get<{ ingredients: Ingredient[] }>(`${this.Url}?i=${name}`).pipe(
      map((res) => {
        return res.ingredients
      })
    )
  }

  getHTTPCategories() {
    return this.http.get<{ drinks: { strCategory: string }[] }>(`https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list`).pipe(
      map((res) => {
        return res['drinks']
      })
    )
  }



}

