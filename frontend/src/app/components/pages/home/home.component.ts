import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Food } from 'src/app/models/Food';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  foods: Food[] = [];
  constructor(private foodService: FoodService, activatedRoute:ActivatedRoute) {
    activatedRoute.params.subscribe((params) => {
      if (params.searchTerm) 
      this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if(params.tag)
      this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else
      this.foods = this.foodService.getAll();
    })
  }
  ngOnInit(): void {}
}
