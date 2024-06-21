import { Component } from '@angular/core';
import { SimpleModalService } from 'ngx-simple-modal';
import { LogindialogComponent } from './components/logindialog/logindialog.component';
import { SimpleModalModule } from 'ngx-simple-modal';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // handleClick() {}
  constructor(private SimpleModalService: SimpleModalService) {}

  showAlert() {
    this.SimpleModalService.addModal(LogindialogComponent, {title: 'Alert title!', message: 'Alert message!!!'});
  }
}
