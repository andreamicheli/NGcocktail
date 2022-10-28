import { Component, OnInit } from '@angular/core';
import { DatakeepService } from 'src/app/services/datakeep.service';
import { Ingredient } from 'src/app/types';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  constructor(private datakeep: DatakeepService) { }

  ingredientname = this.datakeep.ingredientname;
  ingredient = this.datakeep.ingredient;

  ngOnInit(): void {
  }

}
