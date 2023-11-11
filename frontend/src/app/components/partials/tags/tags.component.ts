import { Component, OnInit } from '@angular/core';
import { Tag } from 'src/app/shared/models/Tag';
import { FoodService } from 'src/app/services/food.service';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.css'],
})
export class TagsComponent {
  tags?: Tag[];
  constructor(foodService: FoodService) {
    foodService.getAllTags().subscribe((serverTags) => {
      this.tags = serverTags;
    });
  }
  ngOnInit(): void {}
}
