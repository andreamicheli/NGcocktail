import { Injectable } from '@angular/core';
import { Cocktail } from '../types';

@Injectable({
  providedIn: 'root'
})
export class DatakeepService {

  constructor() { }


  cocktailname: string = '';
  ingredientname: string = '';

  cocktail: Cocktail | null;
  cocktails: Cocktail[];

  public setCocktailname = (cname: string) => {
    this.cocktailname = cname;
  }

  public setIngredientname = (iname: string) => {
    this.ingredientname = iname;
  }

  public setCocktail = (cocktailinput: Cocktail | null) => {
    this.cocktail = cocktailinput;
  }

  public setCocktails = (cocktailsinput: Cocktail[]) => {
    this.cocktails = cocktailsinput;
  }

  public getCocktailname = (name: string) => {

  }

}
