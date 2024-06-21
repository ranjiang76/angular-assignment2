import { Sysuser } from './form/loginform/sysuser';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from  '@angular/common/http';


@Injectable({ providedIn: 'root' })
export class LoginService {

     constructor(private http: HttpClient){}

     urL= 'https://humber-demo-2c2da-default-rtdb.firebaseio.com/username.json';
     login(sysuser:Sysuser):Observable<any>{
      //  return this.http.post(this.urL,sysuser);
      return this.http.get(this.urL);
     }
}
