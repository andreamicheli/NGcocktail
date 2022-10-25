import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CocktailComponent } from './pages/cocktail/cocktail.component';
import { FormComponent } from './pages/form/form.component';
import { IngredientComponent } from './pages/ingredient/ingredient.component';

const routes: Routes = [
  { path: 'form', component: FormComponent },
  { path: 'cocktail', component: CocktailComponent },
  { path: 'ingredient', component: IngredientComponent },
  { path: '', redirectTo: 'form', pathMatch: 'full' },
  { path: '**', redirectTo: 'form' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
