import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {

  constructor(private router:Router){}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      let token = localStorage.getItem('isAuthenticated')? localStorage.getItem('isAuthenticated') : null;
   
      if(token=='true'){
         return true;
      }
      else{
        this.router.navigate(['login']);
        // console.log("inauthenticated");
        return false;
      }

    
      return true;
  }
  
}
