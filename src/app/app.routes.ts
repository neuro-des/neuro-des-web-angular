import { Routes } from '@angular/router';

import { SIM_ROUTES } from './simulation/simulation.routes';
import { AboutComponent } from './about.component';
import { SimComponent } from './simulation/sim.component';

export const APP_ROUTES : Routes = [
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'sim',
        component: SimComponent,
        children: SIM_ROUTES
    },
    { path: '**', redirectTo: '/about'}
];
