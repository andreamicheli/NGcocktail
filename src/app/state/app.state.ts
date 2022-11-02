import { Cocktail } from '../types';

export interface AppState {
    cocktails: ReadonlyArray<Cocktail>;
}
