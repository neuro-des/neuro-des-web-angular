import { Component, OnInit } from '@angular/core';

import PARAMS from './params.json';

@Component({
  selector: 'nd-params',
  templateUrl: './params.component.html',
  styleUrls: ['./params.component.scss']
})
export class ParamsComponent implements OnInit {
    params = PARAMS;

    constructor() { }

    ngOnInit() {
    }

}
