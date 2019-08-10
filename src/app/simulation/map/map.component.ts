import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nd-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
    prebuilt : boolean = false;

    constructor(private ds : DataService) { }

    ngOnInit() {
    }

    onContinue() {
        this.ds.completeMap();
    }

}
