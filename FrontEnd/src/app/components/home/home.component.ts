import { Component, OnInit} from '@angular/core'
import {AuthenticationService,Details} from '../../services/authentication.service'
import { NgFlashMessageService } from 'ng-flash-messages'
import { DomSanitizer } from '@angular/platform-browser'
import { NgxSpinnerService} from 'ngx-spinner';
import {Router} from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{
  //spinner attributes
  message=""
  color = 'primary';
  mode = 'determinate';
  loading=false;
  value = 50;
  bufferValue = 75;
  //metadata attribites and plot attributes
  metadata:Boolean;
  description:Object;
  aquired:Boolean=false;
  keys:string[];
  sample='';
  gene1:string;
  gene2:string;
  genes:string[];
  values:string[];
  details:Details={
    accnum:'',
    gtype:'',
    genes:[],
    number:[],
    sample:''

  }
  constructor(private router:Router,private auth:AuthenticationService,private flash:NgFlashMessageService,protected _sanitizer: DomSanitizer,private spinner: NgxSpinnerService) { }
  ngOnInit() {
    
  }
  getData(){
    this.message="Querying Data!Please Wait"
    this.spinner.show();
    this.auth.getMeta(this.details.accnum).subscribe((data)=>{
      this.genes=data.genes
      this.aquired=true
      this.spinner.hide();
    })
    return false;  
  }
  visualize(){
    this.message="Generating Visualization!Please Wait"
    this.spinner.show();
    this.details.genes=this.genes
    this.details.sample=this.sample
    this.auth.plot(this.details).subscribe((data)=>{
      this.spinner.hide();
      this.router.navigate(['canvas']);
    })
    return false;  
    
  }
  safeHtml(html) {
    return this._sanitizer.bypassSecurityTrustHtml(html);
  }

}

