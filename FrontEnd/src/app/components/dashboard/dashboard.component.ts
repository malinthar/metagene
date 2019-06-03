import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { Router } from '@angular/router';

import { NgFlashMessageService } from 'ng-flash-messages';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  favs=[]
  constructor(private auth:AuthenticationService,private flash:NgFlashMessageService,private router:Router) { }
  ngOnInit() {
    this.loadFavs()
  }
  loadFavs(){
    this.auth.getFavs().subscribe(
      (data)=>{
        if(data['result']=='success'){
          this.favs=data['data'];
        }
      }
    )
  }
  viewfav(_id){
    this.auth.viewFav(_id).subscribe(
      (data)=>{
        if(data['result']=='success'){
         this.router.navigateByUrl('canvas');
       }
       else{
        this.flash.showFlashMessage({messages:["Could not generate the plot! Try again"],
        dismissible:true,
        timeout:10000,
        type:'danger'});
       }
      }
    )
  }

}
