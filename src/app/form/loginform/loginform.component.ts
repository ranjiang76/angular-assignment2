import { LoginService } from './../../login.service';
import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { SimpleModalService } from 'ngx-simple-modal';
import { LogindialogComponent } from 'src/app/components/logindialog/logindialog.component';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-loginform',
  templateUrl: './loginform.component.html',
  styleUrls: ['./loginform.component.css']
})
export class LoginformComponent  {

  users$!:Observable<any>
  constructor(private http: HttpClient,private LoginService:LoginService,private router:Router,private SimpleModalService: SimpleModalService)
  {

  }

  onSubmit(form: NgForm) {

    let user={
      username:form.value.username,
      password:form.value.password,
    }

    this.LoginService.login(user).subscribe(
      (data)=>{
        if((data["user"]==user.username)&&(data["passord"]==user.password))
        {
          // this.iflogin=true;
          this.router.navigate(['home'])
        }
        else
        {
          this.SimpleModalService.addModal(LogindialogComponent, {title: 'Alert !', message: 'Login fail!!!'});
        }
      }
    )

  }

}
