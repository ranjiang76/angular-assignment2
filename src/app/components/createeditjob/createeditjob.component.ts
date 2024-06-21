import { postService } from './../../postservice';
import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent, SimpleModalService } from 'ngx-simple-modal';
import { Jobs } from 'src/app/form/job-form/job-form.component';
import { HttpClient } from '@angular/common/http';
// import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-createeditjob',
  templateUrl: './createeditjob.component.html',
  styleUrls: ['./createeditjob.component.css']
})
export class CreateeditjobComponent  extends SimpleModalComponent<any,any> implements
Jobs
{
    id:number=1;
    jobname:string='';
    jobdescripton:string='';
    constructor(private _postService:postService,private http: HttpClient) {
    super();
    };



  public cancel():void{
    // this._modalReference.cancel();
       this.close();
  }

  public saveData():void{
    let job:Jobs={
      id:this.id,
      jobname:this.jobname,
      jobdescripton:this.jobdescripton,
    }

    this._postService.postdata(job).subscribe(
      (response)=>{
      })
    this.close();
  }
}

