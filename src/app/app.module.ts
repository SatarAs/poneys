import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { PoniesComponent } from './ponies-component/ponies-component';
import { PonyDetailsComponent } from './pony-details/pony-details.component';
import { NameRacePipe } from './name-race.pipe';
import { MenuComponent } from './menu/menu.component';
import { AddPonyComponent } from './add-pony/add-pony.component';
import { AddPonyReactiveComponent } from './add-pony-reactive/add-pony-reactive.component';
import { PonyService } from './pony.service';
import { ConnexionGuardGuard } from './connexion-guard.guard';
import {RaceDetailComponent} from "./race-detail/race-detail.component";
import {AddRaceComponent} from "./add-race/add-race.component";
import {LocationRacePipe} from "./location-race.pipe";
import {AddRaceReactiveComponent} from "./add-race-reactive/add-race-reactive.component";
import {ErrorsComponent} from "./errors/errors.component";

const ROUTES : Routes = [
  {path: '', component: PoniesComponent},
  {path: 'add-pony', component: AddPonyComponent, canActivate : [ConnexionGuardGuard]},
  {path: 'add-pony2', component: AddPonyReactiveComponent},
  {path: 'add-race', component: AddRaceComponent, canActivate: [ConnexionGuardGuard]},
  {path: 'add-pony2', component: AddPonyReactiveComponent},
  {path: 'add-race2', component: AddRaceReactiveComponent},
  {path: '**', component: ErrorsComponent}

];
@NgModule({
  declarations: [
    AppComponent,
    PoniesComponent,
    PonyDetailsComponent,
    NameRacePipe,
    MenuComponent,
    AddPonyComponent,
    AddPonyReactiveComponent,
    AddRaceComponent,
    RaceDetailComponent,
    LocationRacePipe
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    PonyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
