import { Component } from '@angular/core';
import {AuthenticationService} from './services/authentication.service'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(public auth:AuthenticationService){}
  title = 'MetaGene';
  message="Generating Visualization!Please Wait"
  visualize(){
    this.message="Generating Visualization!Please Wait"
  }
  meta(){
    this.message="Querying Data!Please Wait"
  }
  
  
}
