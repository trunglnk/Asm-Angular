import { Component, OnInit, PipeTransform } from '@angular/core';
import{ Data } from '../MockData';
import { Dish } from '../Dish';
import { DishService} from '../dish.service';
@Component({
  selector: 'app-dish-manager',
  templateUrl: './dish-manager.component.html',
  styleUrls: ['./dish-manager.component.scss']
})
export class DishManagerComponent implements OnInit {
  items = Data;
  page = 1;
  pageSize = 5; 
  dishs: Dish[];
  name:String;
  constructor(private dishService: DishService) { }

  ngOnInit(): void {
    this.getDishs();
  }
  getDishs(){
    this.dishService.getDishs().subscribe(data => {
      this.dishs = data;
      
    })
  }

  removeDish(id){
    this.dishService.removeDish(id).subscribe(response =>{
      this.dishs = this.dishs.filter(dish => dish.id !==response.id);
      alert("Xóa thành công");
    })
  }

  // search(){
  //   if(this.name !=""){
  //     this.dishs=this.dishs.filter(data =>{
  //       return data.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
  //     });
  //   }else if(this.name == ""){
  //     this.ngOnInit();
  //   }
    
  // }

  
}
