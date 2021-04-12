import { Component, OnInit } from '@angular/core';
import { Dish } from '../Dish';
import { DishService } from '../dish.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-dish-detail',
  templateUrl: './dish-detail.component.html',
  styleUrls: ['./dish-detail.component.scss']
})
export class DishDetailComponent implements OnInit {
  dish: Dish;
  constructor(
    private dishService: DishService,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {

    this.getDish();
  }
getDish(){
this.route.params.subscribe(param => {
  console.log(param);
  this.dishService.getDish(param.dishID).subscribe(data => {
    this.dish = data;
  })
})
}
}
