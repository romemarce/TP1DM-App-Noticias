import { Component, OnInit } from '@angular/core';
import { IError, initIError } from 'src/types';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit{

  public isError:boolean = false;
  public error: IError = initIError;

  constructor() {}

  ngOnInit(){
    this.error = {
      isError: true,
      title: "Desconocido",
      code: 400,
      message: "Se produjo un error desconocido"
    }
  }

}