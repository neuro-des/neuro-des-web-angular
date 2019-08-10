import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class DataService {
    startCompleted = false;

    map = {};
    mapCompleted = false;

    params = {};
    paramsCompleted = false;

    sim  = {};
    simCompleted = false;

    constructor() { }

    public completeStart() {
        this.startCompleted = true;
    }

    public completeMap() {
        this.mapCompleted = true;
    }

    public completeParams() {
        this.paramsCompleted = true;
    }

    public updateParams(obj) {
        for (let [key,value] of Object.entries(obj)) {
            this.params[key] = value;
        }
        console.log(this.params);
    }

    public reset() {
        this.startCompleted = false;

        this.map = {};
        this.mapCompleted = false;

        this.params = {};
        this.paramsCompleted = false;

        this.sim = {};
        this.simCompleted = false;
    }
}
