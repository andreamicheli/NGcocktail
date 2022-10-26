import { Component, OnInit } from '@angular/core';
import { CocktailapiService } from 'src/app/services/cocktailapi.service';
import { DatakeepService } from 'src/app/services/datakeep.service';
import { Cocktail } from 'src/app/types';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  constructor(private datakeep: DatakeepService, private cocktailapi: CocktailapiService) { }

  cocktailname: string = this.datakeep.cocktailname;
  cocktail: Cocktail | null = this.datakeep.cocktail;

  ngOnInit(): void {
    if (!(!!this.cocktail)) {
      this.cocktailapi.getCocktailname(this.cocktailname).subscribe((response: { drinks: Cocktail[] }) => {
        let drink = response.drinks[0];
        this.cocktail =
        {
          name: drink['strDrink'],
          category: drink['strCategory'],
          type: drink['strAlcoholic'],
          glass: drink['strGlass'],
          ingredients: [
            {
              name: drink['strIngredient1'],
              measure: drink['strMeasure1'],
            },
            {
              name: drink['strIngredient2'],
              measure: drink['strMeasure2'],
            },
            {
              name: drink['strIngredient3'],
              measure: drink['strMeasure3'],
            },
            {
              name: drink['strIngredient4'],
              measure: drink['strMeasure4'],
            },
            {
              name: drink['strIngredient5'],
              measure: drink['strMeasure5'],
            },
            {
              name: drink['strIngredient6'],
              measure: drink['strMeasure6'],
            },
            {
              name: drink['strIngredient7'],
              measure: drink['strMeasure7'],
            },
            {
              name: drink['strIngredient8'],
              measure: drink['strMeasure8'],
            },
            {
              name: drink['strIngredient9'],
              measure: drink['strMeasure9'],
            },
            {
              name: drink['strIngredient9'],
              measure: drink['strMeasure9'],
            },
            {
              name: drink['strIngredient9'],
              measure: drink['strMeasure9'],
            },
            {
              name: drink['strIngredient10'],
              measure: drink['strMeasure10'],
            },
            {
              name: drink['strIngredient11'],
              measure: drink['strMeasure11'],
            },
            {
              name: drink['strIngredient12'],
              measure: drink['strMeasure12'],
            },


          ],
          image: drink['strDrinkThumb']
        }
        console.log(this.cocktail)
      }
      )
    }
  }

}
