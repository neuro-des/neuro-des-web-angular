import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { APP_ROUTES } from './app.routes';
import { AboutComponent } from './about.component';
import { SimComponent } from './simulation/sim.component';
import { MapComponent } from './simulation/map/map.component';
import { LoadComponent } from './simulation/load/load.component';
import { ParamsComponent } from './simulation/params/params.component';


@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    SimComponent,
    MapComponent,
    LoadComponent,
    ParamsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(APP_ROUTES,{ enableTracing: false }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
