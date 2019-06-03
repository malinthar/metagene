import { Component, OnInit } from '@angular/core';
import {AuthenticationService} from '../../services/authentication.service'
import { NgFlashMessageService } from 'ng-flash-messages'
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private auth:AuthenticationService, private flash:NgFlashMessageService,private router:Router ) { }

  ngOnInit() {
  }
  logout(){
    this.auth.logout();
    this.flash.showFlashMessage({messages:['Logged out!'],
      dismissible:true,
      timeout:4000,
     type:'success'});
    this.router.navigateByUrl('/');
    return false;
  }

}
