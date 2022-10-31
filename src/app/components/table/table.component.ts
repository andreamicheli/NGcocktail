import { Component, Input, OnInit } from '@angular/core';
import { CocktailapiService } from 'src/app/services/cocktailapi.service';
import { DatakeepService } from 'src/app/services/datakeep.service';
import { Cocktail } from 'src/app/types';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit {

  @Input() letter: string;

  entries = this.datakeep.cocktails;
  paginated: Cocktail[][] = [[]];
  index: number = 1;

  constructor(private datakeep: DatakeepService, private router: Router, private route: ActivatedRoute) { }

  setcocktail = (item: Cocktail) => {
    this.datakeep.setCocktail(item);
  }

  formatdata = (cocktails: Cocktail[]) => {
    let paginated: Cocktail[][] = [[]]
    for (let i = 0; i < cocktails.length; i++) {
      if (paginated[Math.floor(i / 4)] === undefined) { paginated.push([]) }
      paginated[Math.floor(i / 4)].push(cocktails[i])
    }
    this.paginated = paginated;
  }

  ordertable = () => {
    this.formatdata(this.entries.sort((a, b) => (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0)))
  }

  ingredientclick = (iname: string) => {
    this.datakeep.ingredientname = iname;
    this.router.navigate([`/ingredient`], { relativeTo: this.route });
  }

  ngOnInit(): void {
    this.formatdata(this.entries)
  }
}
