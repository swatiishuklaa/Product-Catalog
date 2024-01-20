import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RegisterUserService } from '../services/register-user.service';
import { User } from '../user';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  user:User=new User();
  pass2:any;

  constructor(private registerUser:RegisterUserService,private router:Router) { }

  ngOnInit(): void {
  }

  signUp(){
    console.log("hellloo");
      this.registerUser.registerUser(this.user).subscribe(data=>{
        alert("Account Created Successfully");
        this.router.navigate(['login']);
      },error=>{
        alert("Some error occured!");
      });

    }

}
