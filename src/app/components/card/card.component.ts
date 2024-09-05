import { Component, Input, OnInit } from '@angular/core';
import { IPost } from 'src/types';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent implements OnInit {
  @Input() post: IPost | undefined;
  constructor() {}

  ngOnInit() {}
}
