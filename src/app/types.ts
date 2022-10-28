export interface Cocktail {
    name: string;
    category: string;
    type: string;
    glass: string;
    ingredients: { name: string, measure: string }[];
    [key: string]: any;
}

export interface Ingredient {
    name: string;
    description: string;
    alcoholgraduation: string;
    [key: string]: any;
}

export interface API {
    drinks: Cocktail[]
}

export interface category {
    name: string;
}