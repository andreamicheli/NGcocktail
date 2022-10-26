import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { DatakeepService } from 'src/app/services/datakeep.service';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor(private router: Router, private route: ActivatedRoute, private datakeep: DatakeepService) { }

  alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
  plus: boolean = true;
  table: boolean = false;


  formdata = new FormGroup({
    cocktailname: new FormControl(""),
    cocktailletter: new FormControl(""),
    ingredientname: new FormControl("")
  })

  onSubmit = () => {
    if (!!this.formdata.get('cocktailletter')?.value) {
      this.table = true;
    }
    if (!!this.formdata.get('cocktailname')?.value) {
      this.datakeep.setCocktailname(this.formdata.get('cocktailname')?.value!);
      this.datakeep.setCocktail(null);
      this.router.navigate([`/cocktail`], { relativeTo: this.route });
    }
    if (!!this.formdata.get('ingredientname')?.value) {
      this.datakeep.setIngredientname(this.formdata.get('ingredientname')?.value!);
      this.router.navigate([`/ingredient`], { relativeTo: this.route });
    }
  }

  disable = (form: string) => {
    for (let control of Object.keys(this.formdata.controls)) {
      if (form !== control) {
        this.formdata.get(control)?.disable()
      }
    }
  }

  enable = (form: string) => {
    if (!(!!this.formdata.get(form)?.value)) {
      for (let control of Object.keys(this.formdata.controls)) {
        this.formdata.get(control)?.enable()
      }
    }
  }

  ngOnInit(): void {
  }

}
