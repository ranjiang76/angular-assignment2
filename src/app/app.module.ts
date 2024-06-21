import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';

import { HomeComponent } from './pages/home/home/home.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ManageComponent } from './pages/manage/manage.component';
import { LoginformComponent } from './form/loginform/loginform.component';
import {HttpClientModule} from '@angular/common/http';

import { LogindialogComponent } from './components/logindialog/logindialog.component';
import { SimpleModalModule } from 'ngx-simple-modal';
import { ModalDialogModule } from 'ngx-modal-dialog';
import { JobFormComponent } from './form/job-form/job-form.component';
import { CreateeditjobComponent } from './components/createeditjob/createeditjob.component';



@NgModule({
  imports: [
    BrowserModule,
    ModalDialogModule.forRoot(),
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    SimpleModalModule.forRoot({container: "modal-container"})
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ManageComponent,
    LoginformComponent,
    JobFormComponent,
    CreateeditjobComponent,
  ],
  entryComponents: [
    LogindialogComponent,
  ],
  providers:[
      // provideFirebaseApp(()=>initializeApp(environment.firebaseConfig))
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
