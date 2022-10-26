export interface Cocktail {
    name: string;
    category: string;
    type: string;
    glass: string;
    ingredients: { name: string, measure: string }[];
    [key: string]: any;
}