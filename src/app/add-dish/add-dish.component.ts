import { Component, OnInit } from '@angular/core';
import { Dish } from '../Dish';
import { DishService } from '../dish.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup,FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-dish',
  templateUrl: './add-dish.component.html',
  styleUrls: ['./add-dish.component.scss']
})
export class AddDishComponent implements OnInit {
    form = new FormGroup({
      name: new FormControl('', Validators.required),
      price: new FormControl('', Validators.required),
      img: new FormControl('', Validators.required),
      desc: new FormControl('', Validators.required),

    })


    dish: Dish = new Dish();
  constructor(
    private dishService: DishService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit(): void {
  }
addDish(){
  this.dishService.addDish(this.dish).subscribe(data => 
    this.router.navigateByUrl('/admin/dish-manager'));
    alert("Thêm thành công");
}

clear(){

  var name = <HTMLInputElement>document.getElementById("name");
  name.value = null;
  var price = <HTMLInputElement>document.getElementById("price");
  price.value = null;
  var img = <HTMLInputElement>document.getElementById("img");
  img.value = null;
  var desc = <HTMLInputElement>document.getElementById("desc");
  desc.value = null;
  
}
}
