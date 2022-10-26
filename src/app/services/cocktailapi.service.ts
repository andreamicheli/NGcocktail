import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class CocktailapiService {

  constructor(private http: HttpClient) { }

  private Url = 'www.thecocktaildb.com/api/json/v1/1/search.php';


  getCocktailname(letter: string): Observable<any> {
    return this.http.get<any>(`${this.Url}/?f=${letter}`)
  }

}

