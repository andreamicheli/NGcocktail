import { Component, OnInit } from '@angular/core';
import { DatakeepService } from 'src/app/services/datakeep.service';

@Component({
  selector: 'app-ingredient',
  templateUrl: './ingredient.component.html',
  styleUrls: ['./ingredient.component.scss']
})
export class IngredientComponent implements OnInit {

  constructor(private datakeep: DatakeepService) { }

  ingredient = this.datakeep.ingredientname;

  ngOnInit(): void {
  }

}
