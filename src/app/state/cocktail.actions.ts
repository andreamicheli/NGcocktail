import { createAction, props } from '@ngrx/store';
import { Cocktail } from '../types';

export const retrievedCocktailList = createAction(
    '[Cocktail List/API] Retrieve Cocktail Success',
    props<{ cocktails: ReadonlyArray<Cocktail> }>()
);

