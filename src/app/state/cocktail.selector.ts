import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Cocktail } from '../types';


export const selectCocktails = createFeatureSelector<ReadonlyArray<Cocktail>>('reducer');

export const selectCocktailsDef = createSelector(
    selectCocktails,
    (cocktails) => {
        console.log('in selector ', cocktails);
        return cocktails;
    }
);
