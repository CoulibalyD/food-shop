import { Injectable } from '@angular/core';
import { Food } from '../models/Food';
import { sample_foods, sample_tags } from 'src/data';
import { Tag } from '../models/Tag';

@Injectable({
  providedIn: 'root',
})
export class FoodService {
  constructor() {}
  //recuperer toute la liste de food
  getAll(): Food[] {
    return sample_foods;
  }
  
  //recherche un food par son nom
  getAllFoodsBySearchTerm(searchTerm: string) {
    return this.getAll().filter((food) =>
      food.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  //recuperer toute la liste des tags
  getAllTags(): Tag[] {
    return sample_tags;
  }

  //rechercher un tag par nom
  getAllFoodsByTag(tag: string): Food[] {
    return tag === 'All'
      ? this.getAll()
      : this.getAll().filter((food) => food.tags?.includes(tag));
  }

  //recuperer un food par son nom 
  getFoodById(foodId: string): Food {
    return this.getAll().find((food) => food.id == foodId) ?? new Food();
  }
}
