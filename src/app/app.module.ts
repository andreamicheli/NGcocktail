import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './pages/form/form.component';
import { CocktailComponent } from './pages/cocktail/cocktail.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    CocktailComponent,
    IngredientComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
