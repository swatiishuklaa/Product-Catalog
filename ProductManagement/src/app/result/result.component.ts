import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../product';
import { ApiService } from '../services/api.service';


@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnInit {

  selectedBrand:any;
  lowPrice:any;
  highPrice:any;
  length:any;
  productData:any;
  showData:any;
  searchText:any;
  result:Product[]=[];

  constructor(private router:Router,private api:ApiService,private route:ActivatedRoute,) { }

  ngOnInit(): void {
    this.searchText = this.route.snapshot.paramMap.get('searchText');
    this.showProducts();
  }

  
  showProducts(){
    this.api.search(this.searchText).subscribe(res=>{
      this.showData=res;
      this.productData=this.showData;
        if(this.productData.length==0){
          this.length=true;
        }
      },err=>{

      })
  }

  @ViewChild('brand') brand!: ElementRef;
  onSelected(){
    this.selectedBrand = this.brand.nativeElement.value;
    if(this.selectedBrand=="Select"){
      this.selectedBrand=null;
    }
  }

  logout(){
    localStorage.removeItem('isAuthenticated'); 
    localStorage.clear();
    this.router.navigate(['']);
  }

  filter(){
    console.log(this.selectedBrand);
    this.result=[];
    for(let i=0;i<this.productData.length;i++){
      console.log(this.lowPrice);
      if((this.selectedBrand==this.productData[i].brand) && (this.lowPrice==undefined || this.highPrice==undefined)){
        this.result.push(this.productData[i]);
      }
      else if(this.productData[i].price > this.lowPrice && this.productData[i].price <this.highPrice && this.selectedBrand==undefined ){
        this.result.push(this.productData[i]);
      }
      else if(this.productData[i].price > this.lowPrice && this.productData[i].price <this.highPrice && this.selectedBrand==this.productData[i].brand ){
        this.result.push(this.productData[i]);
      }
      
     
    }
    this.showData=this.result;
  }

  
  getDescription(data:any){
    this.router.navigate(['/details',data.id],{
      state:{backToResult:"backToResult" ,
      search:this.searchText}
    });
  }
}
