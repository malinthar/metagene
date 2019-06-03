import { Component, OnInit } from '@angular/core';
import {ValidateService} from '../../services/validate.service';
import { NgFlashMessageService } from 'ng-flash-messages';
import {AuthenticationService,TokenPayload} from '../../services/authentication.service'
import {Router} from '@angular/router'


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  name:String;
  email:String;
  password:String;

  credentials:TokenPayload={
    _id:'',
    name:'',
    email:'',
    password:''
  }
  constructor(private auth:AuthenticationService,private router:Router,private flash:NgFlashMessageService,
    private validate:ValidateService) { }

  ngOnInit() {
  }
  onRegisterSubmit(){
   
    alert(this.credentials.name)
    if(!this.validate.validateRegister(this.credentials)){
      this.flash.showFlashMessage({messages:['please fill in all fields'],
        dismissible:true,
        timeout:10000,
       type:'danger'});
       return false;
    }
    if(!this.validate.validateEmail(this.credentials.email)){
      this.flash.showFlashMessage({messages:['Please Enter a correct Email'],
      dismissible:true,
      timeout:10000,
     type:'danger'});
     return false;

    }
    this.auth.register(this.credentials).subscribe(
       ()=>{
          this.flash.showFlashMessage({messages:['Registration Successful'],
          dismissible:true,
          timeout:10000,
           type:'success'});
         this.router.navigateByUrl('/login')
       },
       err=>{
        this.flash.showFlashMessage({messages:['Registration Unsuccssful'],
        dismissible:true,
        timeout:10000,
        type:'danger'});
        this.router.navigateByUrl('/register');
         console.log(err)
       }

    )
  }

}
