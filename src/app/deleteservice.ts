import { job } from './pages/home/jobinfo';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {HttpClient} from  '@angular/common/http';



@Injectable({ providedIn: 'root' })
export class deleteService {

     url= 'https://humber-demo-2c2da-default-rtdb.firebaseio.com/job.json';

     constructor(private http: HttpClient){}
     deleteData(id:number):Observable<any>{
      const deleteUrl='${this.url}/$id'
       return this.http.delete(deleteUrl);
     }

}
