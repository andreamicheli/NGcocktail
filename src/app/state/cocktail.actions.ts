import { createAction, props } from '@ngrx/store';
import { Cocktail } from '../types';

export const retrievedCocktail = createAction(
    '[Cocktail List/API] Retrieve Cocktail Success',
    props<{ cocktail: Readonly<Cocktail> }>()
);

