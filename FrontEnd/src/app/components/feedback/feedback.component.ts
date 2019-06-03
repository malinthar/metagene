import { Component, OnInit } from '@angular/core';
import {Ticket,AuthenticationService} from '../../services/authentication.service'
import {NgFlashMessageService} from 'ng-flash-messages'
import {Router} from '@angular/router'

@Component({
  selector: 'app-feedback',
  templateUrl: './feedback.component.html',
  styleUrls: ['./feedback.component.css']
})
export class FeedbackComponent implements OnInit {
  ticket:Ticket={
    title:'',
    description:''
  }
  constructor(private auth:AuthenticationService,private flash:NgFlashMessageService,private router:Router) { }

  ngOnInit() {
  }
  onFeedBackSubmit(){
    this.auth.feedback(this.ticket).subscribe(
      (data)=>{
       if(data['result']=='success'){ 
        this.flash.showFlashMessage({messages:['Thank you! Your Feed Back Was Submitted Successfuly.'],
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