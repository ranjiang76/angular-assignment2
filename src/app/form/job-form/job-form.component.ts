import { Component, OnInit } from '@angular/core';
// import { ModalDialogService } from 'ngx-modal-dialog';
import { SimpleModalService } from 'ngx-simple-modal';
import { HttpClient } from '@angular/common/http';
import { homeService } from 'src/app/home.service';
import { deleteService } from './../../deleteservice';
import { job } from 'src/app/pages/home/jobinfo';
import { Observable, EMPTY, catchError } from 'rxjs';
import { CreateeditjobComponent } from 'src/app/components/createeditjob/createeditjob.component';

export interface Jobs{
     id:number,
     jobname:string,
     jobdescripton:string,
}

@Component({
  selector: 'app-job-form',
  templateUrl: './job-form.component.html',
  styleUrls: ['./job-form.component.css']
})
export class JobFormComponent implements OnInit {

  data:any[]=[]
  constructor(private _homeService:homeService,private http: HttpClient,
    private _deleteService:deleteService,private readonly _modalSimpleService:SimpleModalService) { }

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


  public createJob():void{
    this._modalSimpleService.addModal(CreateeditjobComponent,{
      id: 0,
      jobname: ' ',
      jobdescripton:''})
      .subscribe((message) => {
        //deposit data into database
      });
  }

  public editJob(job:Jobs):void{
    this._modalSimpleService.addModal(CreateeditjobComponent,{
      id: job.id,
      jobname: job.jobname,
      jobdescripton:job.jobdescripton})
      .subscribe((message) => {


      });
  }

  public deleteJob(job:Jobs):void{
    this._deleteService.deleteData(job.id).subscribe(
      (response)=>{
  });

 };


}
