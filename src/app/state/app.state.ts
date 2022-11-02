import { Cocktail } from '../types';

export interface AppState {
    cocktails: Readonly<Cocktail>;
}
