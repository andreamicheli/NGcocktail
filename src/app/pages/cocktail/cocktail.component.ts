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
  }

}
