import { Component, Input, OnInit } from '@angular/core';
import { initIProfile, IProfile } from 'src/types';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss'],
})
export class LayoutComponent implements OnInit {
  @Input() title: string = 'test';

  public isLoggedIn: boolean = false;

  public profile: IProfile;

  constructor(){
    this.profile = { isLoggedIn: true }
  }

  ngOnInit() { }
}
