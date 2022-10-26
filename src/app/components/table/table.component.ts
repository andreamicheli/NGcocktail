import { Component, Input, OnInit } from '@angular/core';
import { CocktailapiService } from 'src/app/services/cocktailapi.service';
import { DatakeepService } from 'src/app/services/datakeep.service';
import { Cocktail } from 'src/app/types';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() letter: string;

  entries: Cocktail[] = [];

  constructor(private cocktailapi: CocktailapiService, private datakeep: DatakeepService) { }

  setcocktail = (item: Cocktail) => {
    this.datakeep.setCocktail(item);
  }

  ngOnInit(): void {
    this.cocktailapi.getCocktailletter(this.letter).subscribe((response: { drinks: Cocktail[] }) => {
      response.drinks.forEach(drink => {
        this.entries!.push(
          {
            name: drink['strDrink'],
            category: drink['strCategory'],
            type: drink['strAlcoholic'],
            glass: drink['strGlass'],
            ingredients: [{ name: drink['strIngredient1'], measure: drink['strMeasure1'] }],
          }
        )
      })
    }
    )
  }
}
