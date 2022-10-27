import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { API } from '../types';





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

  // getCocktailletter(letter: string): Cocktail[] {
  //   let entries: Cocktail[] = [];
  //   this.getHTTPCocktailletter(letter).subscribe((response: { drinks: Cocktail[] }) => {
  //     response.drinks.forEach(drink => {
  //       entries.push({
  //         name: drink['strDrink'],
  //         category: drink['strCategory'],
  //         type: drink['strAlcoholic'],
  //         glass: drink['strGlass'],
  //         ingredients: [
  //           {
  //             name: drink['strIngredient1'],
  //             measure: drink['strMeasure1'],
  //           },
  //           {
  //             name: drink['strIngredient2'],
  //             measure: drink['strMeasure2'],
  //           },
  //           {
  //             name: drink['strIngredient3'],
  //             measure: drink['strMeasure3'],
  //           },
  //           {
  //             name: drink['strIngredient4'],
  //             measure: drink['strMeasure4'],
  //           },
  //           {
  //             name: drink['strIngredient5'],
  //             measure: drink['strMeasure5'],
  //           },
  //           {
  //             name: drink['strIngredient6'],
  //             measure: drink['strMeasure6'],
  //           },
  //           {
  //             name: drink['strIngredient7'],
  //             measure: drink['strMeasure7'],
  //           },
  //           {
  //             name: drink['strIngredient8'],
  //             measure: drink['strMeasure8'],
  //           },
  //           {
  //             name: drink['strIngredient9'],
  //             measure: drink['strMeasure9'],
  //           },
  //           {
  //             name: drink['strIngredient9'],
  //             measure: drink['strMeasure9'],
  //           },
  //           {
  //             name: drink['strIngredient9'],
  //             measure: drink['strMeasure9'],
  //           },
  //           {
  //             name: drink['strIngredient10'],
  //             measure: drink['strMeasure10'],
  //           },
  //           {
  //             name: drink['strIngredient11'],
  //             measure: drink['strMeasure11'],
  //           },
  //           {
  //             name: drink['strIngredient12'],
  //             measure: drink['strMeasure12'],
  //           },


  //         ],
  //         image: drink['strDrinkThumb']
  //       })
  //     })
  //   }
  //   )
  //   return entries;
  // }

}

