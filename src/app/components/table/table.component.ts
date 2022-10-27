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

  entries = this.datakeep.cocktails;

  constructor(private datakeep: DatakeepService) { }

  setcocktail = (item: Cocktail) => {
    this.datakeep.setCocktail(item);
  }

  ngOnInit(): void {
  }
}
