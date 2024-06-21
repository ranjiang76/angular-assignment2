import { Component, OnInit } from '@angular/core';
import { SimpleModalComponent } from 'ngx-simple-modal';
import { SimpleModalService } from 'ngx-simple-modal';

export interface AlertModel {
  title?: string;
  message: string;
}

@Component({
  selector: 'app-manageform',
  template: `
  <div class="modal-content">
    <div class="modal-header">
      <h4>{{title || 'Alert!'}}</h4>
    </div>
    <div class="modal-body">
      <p>{{message || 'TADAA-AM!'}}</p>
    </div>
    <div class="modal-footer">
      <button type="button" class="btn btn-primary" (click)="close()">OK</button>
    </div>
  </div>
  `
})
export class LogindialogComponent extends SimpleModalComponent<AlertModel, null> implements
AlertModel {
    title:string;
    message: string;
    constructor() {
      super();
      this.title='';
      this.message='';
  }
}

