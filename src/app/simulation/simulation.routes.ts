import { SimActivateGuard } from './sim-activate.guard';
import { Routes } from '@angular/router';

import { LoadComponent } from './load/load.component';
import { MapComponent } from './map/map.component';
import { ParamsComponent } from './params/params.component';
import { RunComponent } from './run/run.component';

export const SIM_ROUTES: Routes = [
    { path: '', redirectTo: '1', pathMatch: 'full', canActivate: [SimActivateGuard] },
    { path: '1', component: LoadComponent, canActivate: [SimActivateGuard]  },
    { path: '2', component: MapComponent, canActivate: [SimActivateGuard]  },
    { path: '3', component: ParamsComponent, canActivate: [SimActivateGuard]  },
    { path: '4', component: RunComponent, canActivate: [SimActivateGuard]  }
];
