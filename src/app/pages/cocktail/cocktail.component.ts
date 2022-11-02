import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Store } from '@ngrx/store';
import { catchError, map, throwError } from 'rxjs';
import { CocktailapiService } from 'src/app/services/cocktailapi.service';
import { DatakeepService } from 'src/app/services/datakeep.service';
import { retrievedCocktail } from 'src/app/state/cocktail.actions';
import { selectCocktails } from 'src/app/state/cocktail.selector';
import { Cocktail } from 'src/app/types';

@Component({
  selector: 'app-cocktail',
  templateUrl: './cocktail.component.html',
  styleUrls: ['./cocktail.component.scss']
})
export class CocktailComponent implements OnInit {

  constructor(private datakeep: DatakeepService, private cocktailapi: CocktailapiService,
    private store: Store, private titleService: Title) { }

  cocktailname: string = this.datakeep.cocktailname;
  cocktail: Cocktail | null = this.datakeep.cocktail;
  cocktails$ = this.store.select(selectCocktails);


  getTitle = () => {
    let title = 'cocktail'
    this.cocktails$.subscribe((res) => {
      if (res.name !== '') {
        title = res.name
      }
    })
    return title
  }

  ngOnInit(): void {
    if (!!this.cocktail && !(!!this.cocktail?.category)) {
      let cocktail: Cocktail;
      this.cocktailapi.getHTTPCocktailname(this.cocktail.name)
        .pipe(
          map((drinks) => {
            return drinks[0]
          }),
          catchError((e) => {
            return throwError(() => console.log('ATTENTION! we have not found a cocktail with this name', 'cocktailname'))
          }))

        .subscribe((drink) => {
          cocktail = {
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
          this.store.dispatch(retrievedCocktail({ cocktail }))
          this.datakeep.setCocktail(cocktail);
          this.cocktail = cocktail;
        })



    }

    this.titleService.setTitle(this.getTitle());




  }

}
