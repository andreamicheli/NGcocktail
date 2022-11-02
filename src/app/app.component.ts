import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { tap } from 'rxjs';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private store: Store) { }

  title = 'cocktail';

}
