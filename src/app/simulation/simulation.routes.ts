import { Routes } from '@angular/router';

import { LoadComponent } from './load/load.component';
import { MapComponent } from './map/map.component';
import { ParamsComponent } from './params/params.component';
import { RunComponent } from './run/run.component';

export const SIM_ROUTES: Routes = [
    { path: '', redirectTo: '1', pathMatch: 'full' },
    { path: '1', component: LoadComponent },
    { path: '2', component: MapComponent },
    { path: '3', component: ParamsComponent },
    { path: '4', component: RunComponent }
];
