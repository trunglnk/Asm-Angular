import { Component, OnInit } from '@angular/core';
import { Dish } from '../Dish';
import { DishService } from '../dish.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dish-menu',
  templateUrl: './dish-menu.component.html',
  styleUrls: ['./dish-menu.component.scss']
})
export class DishMenuComponent implements OnInit {
  selected: Dish;
  dishs: Dish[];
  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.getDishs();
  }
  showDetail(dish){
    this.selected = dish;
    
  }

  getDishs(){
    this.dishService.getDishs().subscribe(data => {
      this.dishs = data;
    })
  }
}
