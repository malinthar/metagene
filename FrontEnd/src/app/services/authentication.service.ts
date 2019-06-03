import { Injectable } from '@angular/core';
import {HttpClient,HttpHeaders} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import {Router} from '@angular/router'

export interface UserDetails{
    _id:string
    name:string
    email:string
    password:string
    exp:number
    iat:number
}
export interface Ticket{
  title:string
  description:string
}
export interface SupTicket{
  title:string
  description:string
  email:string
}

export interface Details{
  accnum:string,
  gtype:string,
  genes:string[],
  number:Number[],
  sample:string
}

interface TokenResponse{
  token:string
  email:string
}
export interface TokenPayload{
  _id:string
  name:string
  email:string
  password:string
}

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private token:string;
  constructor(private http:HttpClient,private router:Router) { }

  private saveToken(token:string):void{
    localStorage.setItem('usertoken',token);
    this.token=token;
  }
  private getToken():string{
     if(!this.token){
       this.token=localStorage.getItem('usertoken');
     }
     return this.token;
  }
  public getPlotDOM():string{
    return localStorage.getItem('plotdiv');
  }
  public setPlotDOM(div:string):void{
      localStorage.setItem('plotdiv',div);
  }
  public setPlotScript(script:string):void{
    localStorage.setItem('plotscript',script);
  }
  public getPlotScript():string{
    return localStorage.getItem('plotscript');
  }

  public setDescription(desc:string){
    localStorage.setItem('desc',desc);
  }
  private getUser():string{
    return localStorage.getItem('user');
  }
  public destroyPlot():void{
    window.localStorage.removeItem('desc');
    window.localStorage.removeItem('plotdiv');
  }
  public getDescription():string{
    return localStorage.getItem('desc');
  }
  private saveUser(email:string):void{
    localStorage.setItem('user',email);
  }
  public getUserDetails():UserDetails{
     const token=this.token;
     let payload;
     if(token){
       payload=token.split('.')[1];
       payload=window.atob(payload);
       return JSON.parse(payload);
     }else{
       return null;
     }
  }
  public isLoggedIn():boolean{
      const user=this.getUserDetails();
      if(user){
        return user.exp> Date.now()/1000;
      }else{
        return false;
      }
  }
  public register(user:TokenPayload):Observable<any>{
       const base=this.http.post('users/register',user) 
       const request= base.pipe(
         map((data:TokenResponse)=>{
           if(data.token){
             this.saveToken(data.token)
           }
           return data;
         })
       )
       return request;

  }
  public login(user:TokenPayload):Observable<any>{
    const base=this.http.post('users/login',user)
    const request=base.pipe(
      map((data: TokenResponse)=>{
        if(data.token){
          this.saveToken(data.token);
          this.saveUser(data.email);
        }
        return data;
      })
    )
    return request;

}
  public getMeta(accnum:string):Observable<any>{
    let headers=new HttpHeaders();
    var accnumm={
      'accnum':accnum
    }
    headers.append('Content-Type','application/json'); 
    const base=this.http.post('users/meta',accnumm,{headers:headers});
    const request=base.pipe(map((res:any)=>{
      if(res.description){
        this.setDescription(JSON.stringify(res.description));
        return res;
      }
      else{
        return false;
      }
    }));
    return request;
  }
  public plot(details:Details):Observable<any>{
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json'); 
    const base=this.http.post('users/plot',details,{headers:headers});
    const request=base.pipe(map((res:any)=>{
      if(res){
        this.setPlotDOM(String(res.div));
        this.setPlotScript(String(res.script));
        return true;
      }
      else{
        return false;
      }
    }));
    return request;
  
    
  }
 
  public logout():void{
    this.token='';
    window.localStorage.removeItem('usertoken');
  }
  public feedback(ticket:Ticket):Observable<any>{
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json'); 
    return this.http.post('users/feedback',ticket,{headers:headers}).pipe(map((res:any)=>res));
  }
  public support(ticket:SupTicket):Observable<any>{
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json'); 
    return this.http.post('users/support',ticket,{headers:headers}).pipe(map((res:any)=>res));
  }
  public savetofav(params):Observable<any>{
    var desc=this.getDescription()
    var div=this.getPlotDOM()
    var script=this.getPlotScript()
    var token=this.getToken()
    var user=this.getUser()
    var title=params['title']
    var accession=params['accession']
    var data={
      'desc':desc,
      'div':div,
      'script':script,
      'email':user,
      'title':title,
      'accession':accession
    }
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json'); 
    return this.http.post('users/savetofav',data,{headers:headers}).pipe(map((res:any)=>res));

  }
  public getFavs():Observable<any>{
    var user=this.getUser()
    var data={
      'user':user
    }
    let headers=new HttpHeaders();
    headers.append('Content-Type','application/json'); 
    return this.http.post('users/getfavs',data,{headers:headers}).pipe(map((res:any)=>res));
  }
  public viewFav(_id):Observable<any>{
    let headers=new HttpHeaders();
    var data={
      '_id':_id
    }
    headers.append('Content-Type','application/json'); 
    const base=this.http.post('users/viewfav',data,{headers:headers});
    const request=base.pipe(map((res:any)=>{
      if(res){
        this.setDescription(String(res.description));
        console.log(res.div)
        this.setPlotDOM(String(res.div));
        this.setPlotScript(String(res.script));
        return res;
      }
      else{
        return false;
      }
    }));
    return request;
  }

}
