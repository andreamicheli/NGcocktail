import { Injectable } from '@angular/core';
import { Cocktail, Ingredient } from '../types';

@Injectable({
  providedIn: 'root'
})
export class DatakeepService {

  constructor() { }


  cocktailname: string = '';
  ingredientname: string = '';

  cocktail: Cocktail | null;
  cocktails: Cocktail[];
  ingredient: Ingredient | null;

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

  public setIngredient = (ingredientinput: Ingredient | null) => {
    this.ingredient = ingredientinput;
  }

  public getCocktailname = (name: string) => {

  }

}
