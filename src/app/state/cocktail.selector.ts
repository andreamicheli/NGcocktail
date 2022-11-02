import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Cocktail } from '../types';


export const selectCocktails = createFeatureSelector<Readonly<Cocktail>>('reducer');

export const selectCocktailsDef = createSelector(
    selectCocktails,
    (cocktail) => {
        console.log('in selector ', cocktail);
        return cocktail;
    }
);
