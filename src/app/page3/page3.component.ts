import { Component, OnInit } from '@angular/core';
import { flyInOut, expand } from '../animations/app.animation';

import { PROJECTS } from '../shared/projects';

@Component({
  selector: 'app-page3',
  templateUrl: './page3.component.html',
  styleUrls: ['./page3.component.scss'],
  host: {
    '[@flyInOut]': 'true',
    'style': 'display: block;'
  },
  animations: [
      flyInOut(),
      //expand()
  ]
})
export class Page3Component implements OnInit {

  projects = PROJECTS;

  constructor() { }

  ngOnInit(): void {
  }

}
