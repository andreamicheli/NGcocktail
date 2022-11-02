import { createReducer, on } from '@ngrx/store';
import { Cocktail } from '../types';
import { retrievedCocktail } from './cocktail.actions';


export const initialState: Readonly<Cocktail> = { name: '', category: '', type: '', glass: '', ingredients: [{ name: '', measure: '' }] };

export const cocktailsReducer = createReducer(
    initialState,
    on(retrievedCocktail, (state, { cocktail }) => {
        console.log('in reducer ', cocktail);
        return cocktail
    })
);
