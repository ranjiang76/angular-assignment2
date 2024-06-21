import { homeService } from './../../../home.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { job } from 'src/app/pages/home/jobinfo';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit{
  id:number=0;
  jobname:string='';
  jobdescripton:string='';

  data:any[]=[];

  constructor(private _homeService:homeService,private http: HttpClient, private router: Router) {}

  ngOnInit(): void {
    this._homeService.getdata().subscribe(
      (response)=>{
          this.data = response;
          console.log('Raw data from API:', response);

      },
      (error) => {
        console.error('Error fetching records:', error);
        // Handle errors appropriately
      }
    );
  }




}
