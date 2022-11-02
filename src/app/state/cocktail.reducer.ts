import { createReducer, on } from '@ngrx/store';
import { Cocktail } from '../types';
import { retrievedCocktailList } from './cocktail.actions';


export const initialState: ReadonlyArray<Cocktail> = [];

export const cocktailsReducer = createReducer(
    initialState,
    on(retrievedCocktailList, (state, { cocktails }) => {
        console.log('in reducer ', cocktails);
        return cocktails
    })
);
