import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('Turos retes', 'Ropogos turos retes', 'https://lipotipekseg.hu/uploads/product/small-turos-hazi-retes-1528788198148.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
