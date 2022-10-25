import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {

  constructor() { }

  alphabet: string[] = 'abcdefghijklmnopqrstuvwxyz'.split('')
  plus: boolean = true;


  formdata = new FormGroup({
    cocktailname: new FormControl(""),
    cocktailletter: new FormControl(""),
    ingredientname: new FormControl("")
  })

  ngOnInit(): void {
  }

}
