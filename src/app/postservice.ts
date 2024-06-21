import { job } from './pages/home/jobinfo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from  '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class postService {

     urL= 'https://humber-demo-2c2da-default-rtdb.firebaseio.com/job.json';

     constructor(private http: HttpClient){}
     postdata(data:job):Observable<any>{
       return this.http.post(this.urL,data);
     }

}
