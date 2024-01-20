import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import * as e from 'cors';
import { Subscribable, Subscription } from 'rxjs';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  id:any;
  data:any;
  pincode:any;
  noti:any;
  backToResult:any;
  searchText:any;
  constructor(private route:ActivatedRoute,private api:ApiService,private router:Router) {
    this.backToResult=this.router.getCurrentNavigation()?.extras?.state?.["backToResult"];
    this.searchText=this.router.getCurrentNavigation()?.extras?.state?.["search"];
   }

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.showProduct()
  }

  showProduct(){
    this.api.getDetails(this.id).subscribe(res=>{
      this.data=res;
    })
  }

  backToHome(){
    if(this.backToResult=="backToResult"){
      this.router.navigate(['/result',this.searchText]);
    }
    else
    this.router.navigate(['home']);
  }

  checkAvailability(){
    this.api.check(this.pincode,this.id).subscribe(res=>{
     
     if(res.length==0){
      this.noti= document.getElementById("status");
      this.noti.innerHTML="The product is not available at your location.Please try once it is available in your area.";
     }
     
     if(res.length!=0){
      this.noti= document.getElementById("status");
      this.noti.innerHTML="The product is available and can be delivered at your location in 5 days";
     
     }
     
   
    })
  }
}
