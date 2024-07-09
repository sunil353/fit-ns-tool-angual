import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './Product';
import { User } from './User';


@Injectable({
  providedIn: 'root'
})
export class FitNSToolService {

  
  private productUrl = "http://localhost:7171/getProducts";

  private userUrl = "http://localhost:9191/rest/getAllEmps";

  private createUserUrl = "http://localhost:9191/rest/addEmployee";

  constructor(private http: HttpClient) { }

  public getProducts(): Observable<Product[]> {
      return this.http.get<Product[]>(this.productUrl);
  }

  public getUsers(): Observable<User[]>{
      return this.http.get<User[]>(this.userUrl);
  }

  // public registerUser(user) {
  //    return this.http.post("http://localhost:9191/rest/addEmployee", user, {responseType : 'text' as 'json'});
  // }
 
  getProdNames() {
    //return this.http.get(`${this.api}`);
    [{ 
      prodId : 1051,
      prodName : "KELVIN",
      prodPrice : 100000,
      prodDelivery  : "Bangalore"
    },
    {
      prodId: 1123,
      prodName : "STOKE",
      prodPrice : 200000,
      prodDelivery : "Hyderbad"
    }
    ];
  }
}
