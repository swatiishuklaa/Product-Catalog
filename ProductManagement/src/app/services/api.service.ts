import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {HttpParams} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http:HttpClient) { }

  getData(){
    return this.http.get<any>("http://localhost:8081/product");
  }

  getDataByName(productName:string){
    return this.http.get<any>("http://localhost:8081/name/"+productName);
  }

  getDataByBrand(brandName:string){
      return this.http.get<any>("http://localhost:8081/brand/"+brandName);
  }

  getDataByProductCode(code:number){
      return this.http.get<any>("http://localhost:8081/id/"+code);
  }

  getDetails(id:number){
    return this.http.get<any>("http://localhost:8081/details/"+id);
  }

  search(searchText:string){
    return this.http.get<any>("http://localhost:8081/search/"+searchText);
  }

  check(pincode:number,id:number){
    let queryParams = new HttpParams();
    queryParams = queryParams.append("pincode",pincode);
    queryParams = queryParams.append("productCode",id);
    // console.log("helllooo");
    return this.http.get<any>("http://localhost:8081/availability",{params:queryParams});
  }

  
}

