import { Component, OnInit } from '@angular/core';
import { catchError, map, throwError } from 'rxjs';
import { CocktailapiService } from 'src/app/services/cocktailapi.service';
import { DatakeepService } from 'src/app/services/datakeep.service';
import { Ingredient } from 'src/app/types';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  constructor(private datakeep: DatakeepService, private cocktailapi: CocktailapiService) { }

  ingredientname = this.datakeep.ingredientname;
  ingredient = this.datakeep.ingredient;

  ngOnInit(): void {

    console.log('name: ', this.ingredientname, ' object: ', this.ingredient);


    if (!!this.ingredientname && this.ingredient === null) {

      console.log('dentro');

      //fetch ingredient here
      this.datakeep.setIngredientname(this.ingredientname);
      this.cocktailapi.getHTTPIngredientname(this.ingredientname)
        .pipe(
          map((ingredients) => {
            return ingredients[0]
          }),
          catchError((e) => {
            return throwError(() => console.log('error in linking pages')
            )
          }))

        .subscribe((ingredient) => {
          this.datakeep.setIngredient({
            name: ingredient['strIngredient'],
            description: ingredient['strDescription'],
            alcoholgraduation: ingredient['strABV'],
          })
          this.ingredient = this.datakeep.ingredient;

        })

    }
  }

}
