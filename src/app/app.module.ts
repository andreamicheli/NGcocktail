import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { CocktailComponent } from './pages/cocktail/cocktail.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TableComponent } from './components/table/table.component';
import { MatIconModule } from '@angular/material/icon';
import { StoreModule } from '@ngrx/store';
import { cocktailsReducer } from './state/cocktail.reducer';



@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CocktailComponent,
    IngredientComponent,
    TableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    MatIconModule,
    StoreModule.forRoot({ reducer: cocktailsReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
