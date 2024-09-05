import { Component, Input, OnInit } from '@angular/core';
import { IError, initIError } from 'src/types';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  @Input() error: IError;

  constructor() {
    this.error = initIError;
  }
}
