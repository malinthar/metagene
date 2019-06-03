import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import {AuthenticationService,TokenPayload} from '../../services/authentication.service'
import {Router} from '@angular/router'



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  credentials:TokenPayload={
    _id:'',
    name:'',
    email:'',
    password:''
  }
  constructor(private auth:AuthenticationService,private validate:ValidateService,private router:Router,
    private flash:NgFlashMessageService) { }


  ngOnInit() {
  }

  onLoginSubmit(){
    this.auth.login(this.credentials).subscribe(
      (data)=>{
        if(data.token){
        this.flash.showFlashMessage({messages:['LogIn Sucessfull!!'],
        dismissible:true,
        timeout:10000,
        type:'success'});
        this.router.navigateByUrl('dashboard');
       }
       else{
        this.flash.showFlashMessage({messages:["Invalid Email or Password"],
        dismissible:true,
        timeout:10000,
        type:'danger'});
        this.router.navigateByUrl('login');
       }
      },
      err=>{
        this.flash.showFlashMessage({messages:["Error Logging In"],
        dismissible:true,
        timeout:10000,
        type:'danger'});
        this.router.navigateByUrl('login');
      }
    )
  }

}
