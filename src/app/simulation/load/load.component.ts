import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nd-load',
  templateUrl: './load.component.html',
  styleUrls: ['./load.component.scss']
})
export class LoadComponent implements OnInit {
    load : boolean = false;

    constructor(private ds : DataService) { }

    ngOnInit() {
    }

    onLoad() {
        this.load = !this.load;
    }

    onStart() {
        this.ds.reset();
        this.ds.completeStart();
    }
}
