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
    }

    public updateSim(obj) {
        for (let [key,value] of Object.entries(obj)) {
            this.sim[key] = value;
        }
        console.log(JSON.stringify(this.outputData(), null, 4));
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

    public outputData() {
        return {
            meta: this.sim,
            parameters: this.params
        }
    }
}
