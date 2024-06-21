import { job } from './pages/home/jobinfo';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import {HttpClient} from  '@angular/common/http';
import { catchError, map } from 'rxjs/operators';



@Injectable({ providedIn: 'root' })
export class homeService {

     apiUrl= 'https://humber-demo-2c2da-default-rtdb.firebaseio.com/job.json';

     constructor(private http: HttpClient){}
     getdata():Observable<any[]>{
      const url = `${this.apiUrl}`; // Replace with your actual API endpoint
      return this.http.get<any[]>(url);
    }
    //   return this.http.get(this.url,{
    //     headers: {
    //       'Content-Type': 'application/json',
    //       token: '1234',
    //     },
    //  }).pipe(
    //     map((res: any) => res.data),
    //     catchError(() => {
    //       console.log('handle error in service');
    //       return throwError(() => new Error('Some api error'));
    //     })
    //   );

}
