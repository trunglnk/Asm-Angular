import { Injectable } from '@angular/core';
import { Data } from './MockData';
import { Dish } from './Dish';
import{ HttpClient} from '@angular/common/http';
import{ Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
  })

  export class DishService {
    api = 'https://5e79b9de17314d001613350f.mockapi.io/Dish'
    // products=Data;
    constructor(
      private http: HttpClient,
    ) { }
   
  
    getDishs(): Observable<Dish[]>{
      // return this.products;
      return this.http.get<Dish[]>(this.api);
    }
  
    getDish(id) : Observable<Dish> {
      return this.http.get<Dish> (`${this.api}/${id}`);
    }
    
  addDish(dish): Observable<Dish>{
      return this.http.post<Dish>(`${this.api}`, dish);
  }

  updateDish(dish): Observable<Dish>{
    return this.http.put<Dish>(`${this.api}/${dish.id}`, dish);
  }
  removeDish(id): Observable<Dish>{
    return this.http.delete<Dish>(`${this.api}/${id}`);
  }
  }