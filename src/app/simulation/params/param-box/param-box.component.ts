import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nd-param-box',
  templateUrl: './param-box.component.html',
  styleUrls: ['./param-box.component.scss']
})
export class ParamBoxComponent implements OnInit {
    @Input() data;

    constructor() { }

    ngOnInit() {
        console.log(this.data);
    }

    getTypeIcon() {
        switch (this.data.type) {
            default:
                return 'fa-chart-line';
        }
    }

    getTypeInfo() {
        switch (this.data.type) {
            case 'binomial':
                return 'Binomial distribution - Define Mean and Standard Deviation';
            case 'geometric':
                return 'Geometric distribution - Define Quartile 1, Median, and Quartile 3';
            default:
                return 'It\'s a distribution' ;
        }
    }

}
