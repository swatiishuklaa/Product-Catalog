import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiService } from '../services/api.service';
import {FormBuilder,FormGroup} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  productData:any;
  Searched:boolean=true;
  filterBox:boolean=false;
  searchText:any;
  searchBy:any;
  length:boolean=false;
  temp:any;
  selectedBrand:any;
  lowPrice:any;
  highPrice:any;

  constructor(private api:ApiService,private router:Router,private route:ActivatedRoute) { 
  }

  ngOnInit(): void {
     this.getAllProduct();
  }

  

  @ViewChild('brand') brand!: ElementRef;
  onSelected(){
    this.selectedBrand = this.brand.nativeElement.value;
  }

  getAllProduct(){
    this.api.getData().subscribe(res=>{
      this.productData=res;
    },err=>{

    })
  }

  search(){
    this.router.navigate(['/result',this.searchText]);

  }

  getDescription(data:any){
    this.router.navigate(['/details',data.id]);
  }

  logout(){
    localStorage.removeItem('isAuthenticated'); 
    localStorage.clear();
    this.router.navigate(['']);
  }

  backToHome(){
    // this.getAllProduct();
    this.productData=null;
    this.Searched=true;
    this.filterBox=false;
    this.length=false;
  }
}
