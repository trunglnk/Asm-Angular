import { Component, OnInit } from '@angular/core';
import{ Data } from '../MockData';
import { Dish } from '../Dish';
import { DishService} from '../dish.service';
@Component({
  selector: 'app-dish-list',
  templateUrl: './dish-list.component.html',
  styleUrls: ['./dish-list.component.scss']
})
export class DishListComponent implements OnInit {
      selected: Dish;
      dishs: Dish[];
  constructor(
    private dishService: DishService
  ) { }

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
