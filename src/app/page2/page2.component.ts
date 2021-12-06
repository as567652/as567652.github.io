import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../animations/app.animation';

import { LOGOS } from '../shared/logos';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
      flyInOut(),
      //expand()
  ]
})
export class Page2Component implements OnInit {
  //    'MongoDB',

  constructor() { }

  ll1 = LOGOS;

  ngOnInit(): void {
  }

}
