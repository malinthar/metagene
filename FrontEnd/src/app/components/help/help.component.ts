import { Component, OnInit } from '@angular/core';
import {SupTicket, AuthenticationService } from '../../services/authentication.service'
import { Router } from '@angular/router';
import { NgFlashMessageService } from 'ng-flash-messages';
@Component({
  selector: 'app-help',
  templateUrl: './help.component.html',
  styleUrls: ['./help.component.css']
})
export class HelpComponent implements OnInit{
  ticket:SupTicket={
    title:'',
    description:'',
    email:''
  }
  constructor(private auth:AuthenticationService,private router:Router,private flash:NgFlashMessageService) { }
  ngOnInit() {
  }
  onSupportSubmit(){
    this.auth.support(this.ticket).subscribe(
      (data)=>{
       if(data['result']=='success'){ 
        this.flash.showFlashMessage({messages:['Your Support tciket Was Submitted Successfuly! An email will be sent with in 24 hours'],
        dismissible:true,
        timeout:10000,
        type:'success'});
        this.router.navigateByUrl('')

       }
       else{  
        this.flash.showFlashMessage({messages:['oops!Some thing Went Wrong.'],
        dismissible:true,
        timeout:10000,
        type:'danger'});
       }
       }
    );
  }

}
