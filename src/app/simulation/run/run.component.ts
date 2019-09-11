import { DataService } from './../data.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'nd-run',
  templateUrl: './run.component.html',
  styleUrls: ['./run.component.scss']
})
export class RunComponent implements OnInit {
    runForm: FormGroup;
    datePipe = new DatePipe('en-US');

    constructor(private fb: FormBuilder, private ds: DataService) {
        this.runForm = this.fb.group({
            strokes_per_year: [14239],
            start_date: [this.datePipe.transform('01/01/19', 'yyyy-MM-dd')],
            simulation_runtime: [5],
            burn_in: [0.5]
        });

        this.updateData();
        this.runForm.valueChanges.subscribe(val => {
            this.updateData();
        });
    }

    ngOnInit() {

    }

    updateData() {
        let data = this.runForm.getRawValue();
        data.start_date = this.datePipe.transform(data.start_date, 'dd-MM-yyyy');
        this.ds.updateSim(data);
    }
}
