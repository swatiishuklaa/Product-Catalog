import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginUserService } from '../services/login-user.service';
import { User } from '../user';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user:User=new User();
  public noti:any;
  constructor(private loginUserService:LoginUserService, private router:Router) { }

  ngOnInit(): void {
  }
  
  userLogin(){
    this.loginUserService.loginUser(this.user).subscribe(data=>{
      localStorage.setItem('isAuthenticated','true');
      this.router.navigate(['home'],{
        state:{}
      });

    } ,error=>{
      this.noti=document.getElementById("noti");
      this.noti.innerHTML="Incorrect Username or password !";
    });
    console.log("from login : ",this.user);
  }
 
}
