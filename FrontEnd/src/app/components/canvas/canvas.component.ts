import { Component, OnInit,OnDestroy} from '@angular/core'
import {AuthenticationService} from '../../services/authentication.service'
import { NgFlashMessageService } from 'ng-flash-messages'
import { DomSanitizer } from '@angular/platform-browser'
import { NgxSpinnerService} from 'ngx-spinner';
import {ScriptLoaderService} from '../../services/script-loader.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-canvas',
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
 
export class CanvasComponent implements OnInit,OnDestroy{
  message=""
  color = 'primary';
  mode = 'determinate';
  loading=false;
  value = 50;
  bufferValue = 75;
  graph:String='';
  description={}
  aquired:Boolean=false;
  keys:string[];
  title=''
  add=false
  constructor(private router:Router,private dynamicScriptLoader: ScriptLoaderService,private auth:AuthenticationService,private flash:NgFlashMessageService,protected _sanitizer: DomSanitizer,private spinner: NgxSpinnerService) { }
  ngOnInit() {
    this.aquired=false
    this.graph=this.auth.getPlotDOM();
    this.description=JSON.parse(this.auth.getDescription());
    this.keys=Object.keys(this.description);
    this.loadScripts();
  }
  safeHtml(html) {
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }
  private loadScripts() {
    // You can load multiple scripts by just providing the key as argument into load method of the service
    this.dynamicScriptLoader.load('graph').then(data => {
      // Script Loaded Successfully
    }).catch(error => console.log(error));
  }
  ngOnDestroy(){
  }
  gettitle(){
    this.add=true
  }
  addfav(){
    this.add=false
    if(this.auth.isLoggedIn()){
      var params={
         'accession':this.description[this.keys[0]],
         'title':this.title
      }
      this.auth.savetofav(params).subscribe(
        (data)=>{
          if(data='success'){
            this.flash.showFlashMessage({messages:["Added to favourites successfully!"],
            dismissible:true,
            timeout:10000,
            type:'success'});
            this.router.navigateByUrl('dashboard')
          }
          else{
            this.flash.showFlashMessage({messages:["OOPS! Something went wrong"],
            dismissible:true,
            timeout:10000,
            type:'danger'});
          }
        }
      )
    }
    else{
      this.flash.showFlashMessage({messages:["To use this feature you have to Signin First!"],
      dismissible:true,
      timeout:10000,
      type:'danger'});
    }

  }
}
