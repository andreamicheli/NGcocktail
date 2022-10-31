import { HttpErrorResponse } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable, catchError, throwError, of, map, tap } from 'rxjs';
import { CocktailapiService } from 'src/app/services/cocktailapi.service';
import { DatakeepService } from 'src/app/services/datakeep.service';
import { category, Cocktail } from 'src/app/types';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute,
    private datakeep: DatakeepService, private cocktailapi: CocktailapiService) { }

  alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
  plus: boolean = true;
  plusc: boolean = true;
  table: boolean = false;
  error: string = '';
  showerror: string = '';
  dbutton: boolean = true;
  categories: category[] = [];




  formdata = new FormGroup({
    cocktailname: new FormControl(""),
    cocktailletter: new FormControl(""),
    ingredientname: new FormControl(""),
    categoryname: new FormControl("")
  })

  onSubmit = () => {
    if (!!this.formdata.get('cocktailletter')?.value) {
      this.cocktailapi.getHTTPCocktailletter(this.formdata.get('cocktailletter')?.value!)
        //ritorna un Observable di tipo API (guardare nel browser la formattazione della response)
        .pipe( //esegue in ordine una serie di operazioni
          map((drinks) => {//ritorna una versione modificata della risposta
            return drinks.map(drink => {//formatto ogni elemento dell'array
              return ({
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
              } as Cocktail)
            })
          }),
          catchError((e) => {//in caso di errore
            //throwError se non voglio andare nel subscribe (non ho un valore di default)
            //handleError se voglio andare nel subscribe (ho un valore di default)
            return throwError(() => this.changeshow('ATTENTION! we have not found any cocktail with this letter', 'cocktailletter'))
          })
        )
        .subscribe((drinks) => {//'apro' il pacchetto
          this.datakeep.setCocktails(drinks);
          this.table = true;
          this.dbutton = true;
        })
    }
    if (!!this.formdata.get('cocktailname')?.value) {
      let cocktail: Cocktail;
      this.datakeep.setCocktailname(this.formdata.get('cocktailname')?.value!);
      this.cocktailapi.getHTTPCocktailname(this.formdata.get('cocktailname')?.value!)
        .pipe(
          map((drinks) => {
            return drinks[0]
          }),
          catchError((e) => {
            return throwError(() => this.changeshow('ATTENTION! we have not found a cocktail with this name', 'cocktailname'))
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
          this.datakeep.setCocktail(cocktail);
          this.router.navigate([`/cocktail`], { relativeTo: this.route });
        })

    }
    if (!!this.formdata.get('ingredientname')?.value) {
      this.datakeep.setIngredientname(this.formdata.get('ingredientname')?.value!);
      this.cocktailapi.getHTTPIngredientname(this.formdata.get('ingredientname')?.value!)
        .pipe(
          map((ingredients) => {
            return ingredients[0]
          }),
          catchError((e) => {
            return throwError(() => this.changeshow('ATTENTION! we have not found an ingredient with this name', 'ingredientname'))
          }))

        .subscribe((ingredient) => {
          this.datakeep.setIngredient({
            name: ingredient['strIngredient'],
            description: ingredient['strDescription'],
            alcoholgraduation: ingredient['strABV'],
          })
          this.router.navigate([`/ingredient`], { relativeTo: this.route });
        })

    }
    if (!!this.formdata.get('categoryname')?.value) {
      this.datakeep.categoryname = this.formdata.get('categoryname')?.value!;
      this.cocktailapi.getHTTPCategory(this.formdata.get('categoryname')?.value!)
        .pipe( //esegue in ordine una serie di operazioni
          map((drinks) => {//ritorna una versione modificata della risposta
            return drinks.map(drink => {//formatto ogni elemento dell'array
              return ({
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
              } as Cocktail)
            })
          }),
          catchError(() => { return throwError(() => this.changeshow('ATTENTION! we have not found any cocktail with this category', 'categoryname')) })
        )
        .subscribe((drinks) => {//'apro' il pacchetto
          this.datakeep.setCocktails(drinks);
          this.table = true;
          this.dbutton = true;
        })

    }
  }

  disable = (form: string) => {
    for (let control of Object.keys(this.formdata.controls)) {
      if (form !== control) {
        this.formdata.get(control)?.disable()
      }
    }
    this.disableButton()
  }

  enable = (form: string) => {
    if (!(!!this.formdata.get(form)?.value)) {
      for (let control of Object.keys(this.formdata.controls)) {
        this.formdata.get(control)?.enable()
      }
    }
    this.disableButton()
  }

  disableButton = () => {
    for (let control of Object.keys(this.formdata.controls)) {
      if (!!this.formdata.get(control)?.value) {
        this.dbutton = false;
      }
    }
    if (!(!!this.formdata.get('cocktailname')?.value) &&
      !(!!this.formdata.get('cocktailletter')?.value) &&
      !(!!this.formdata.get('categoryname')?.value) &&
      !(!!this.formdata.get('ingredientname')?.value)) this.dbutton = true;
  }

  clicktag = (letter: string) => {
    if (this.formdata.get('cocktailletter')?.value === letter) {
      this.formdata.get('cocktailletter')?.setValue('')
      this.enable('cocktailletter')

    }
    else this.formdata.get('cocktailletter')?.setValue(letter);
    this.plus = true;
    this.disableButton();
  }
  clicktagc = (name: string) => {
    if (this.formdata.get('categoryname')?.value === name) {
      this.formdata.get('categoryname')?.setValue('');
      this.enable('categoryname')
    }
    else this.formdata.get('categoryname')?.setValue(name);
    this.plusc = true;
    this.disableButton();
  }

  changeshow = (serror: string, terror: 'cocktailname' | 'cocktailletter' | 'ingredientname' | 'categoryname' | '') => {
    this.showerror = terror;
    this.error = serror;

    setTimeout(() => {
      this.showerror = '';
      this.error = '';
    }, 2000);
  }

  getcategories = () => {
    this.cocktailapi.getHTTPCategories()
      .pipe(
        map((categories) => {
          return categories.map((item) => {
            return ({
              name: item['strCategory']
            } as category)
          })
        }))

      .subscribe((categories) => {
        this.datakeep.categories = categories;
        this.categories = categories;
      })
  }


  ngOnInit(): void {
    this.datakeep.cocktail = null;
    this.datakeep.ingredient = null;
    this.getcategories()

    // this.datakeep.categories  = 
  }

}
