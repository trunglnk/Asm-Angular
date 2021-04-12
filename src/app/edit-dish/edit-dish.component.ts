import { Component, OnInit } from '@angular/core';
import { DishService } from '../dish.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Dish } from '../Dish';

@Component({
  selector: 'app-edit-dish',
  templateUrl: './edit-dish.component.html',
  styleUrls: ['./edit-dish.component.scss']
})
export class EditDishComponent implements OnInit {
      dish: Dish;
  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.getDish();
  }

  getDish(){
      this.route.params.subscribe(param => {
        this.dishService.getDish(param.dishID).subscribe(data =>{
          this.dish = data;
        })
      })
  }

  updateDish(){
    this.dishService.updateDish(this.dish).subscribe(data =>{
      this.router.navigateByUrl('/admin/dish');
      alert("Cập nhật thành công");
    })
  }
}
