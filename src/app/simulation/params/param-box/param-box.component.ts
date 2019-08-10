import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, Form, FormGroup } from '@angular/forms';
import { DataService } from '../../data.service';

@Component({
  selector: 'nd-param-box',
  templateUrl: './param-box.component.html',
  styleUrls: ['./param-box.component.scss']
})
export class ParamBoxComponent implements OnInit {
    @Input() data;
    outputForm : FormGroup;

    constructor(private fb : FormBuilder, private ds : DataService) {

    }

    ngOnInit() {
        this.createForm();
        this.updateOutput();
        this.outputForm.valueChanges.subscribe(val => {
            this.updateOutput();
        });
    }

    createForm() {
        switch(this.data.type) {
            case 'binomial':
                this.outputForm = this.fb.group({
                    median: [this.data.data[2][0]],
                    sd: [this.data.data[3][0]]
                });
                break;
            case 'geometric':
                this.outputForm = this.fb.group({
                    q1: [this.data.data[2][0]],
                    median: [this.data.data[3][0]],
                    q3: [this.data.data[4][0]]
                });
                break;
            default:
                let tempForm = {};
                for (let [key,value] of Object.entries(this.data.data)) {
                    tempForm[key] = [value[1]];
                }
                this.outputForm = this.fb.group(tempForm);
                break;
        }
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
            case 'proportion':
                return 'Proportion - Define the likelihood of the event between 0 and 1';
            default:
                return 'It\'s a distribution' ;
        }
    }

    updateOutput() {
        let output = {};
        switch (this.data.type) {
            case 'binomial':
                output[this.data.data[0]] = {
                    median: this.outputForm.get('median').value,
                    sd: this.outputForm.get('sd').value
                };
                break;
            case 'geometric':
                output[this.data.data[0]] = {
                    q1: this.outputForm.get('q1').value,
                    median: this.outputForm.get('median').value,
                    q3: this.outputForm.get('q3').value
                };
                break;
            default:
                for (let key of Object.keys(this.data.data)) {
                    output[key] = this.outputForm.get(key).value
                };
        }
        this.ds.updateParams(output);
    }

}
