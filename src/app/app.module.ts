import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppComponent } from './app.component';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RxjsWayComponent } from './rxjs-way/rxjs-way.component';
import { NgrxWayComponent } from './ngrx-way/ngrx-way.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CustomMaterialModule } from './material-module/material-module.module';
import { IronService } from './services/ironman.service';
import { HttpClientModule } from '@angular/common/http';
import { reducers, metaReducers } from './reducers';
import { environment } from 'src/environments/environment';
import { EffectsModule } from '@ngrx/effects';
import { ConfigEffects } from './state/Effects/config.effects';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SubscribeComponent,
    RxjsWayComponent,
    NgrxWayComponent,
    PageNotFoundComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CustomMaterialModule,
    StoreModule.forRoot(reducers, { metaReducers }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    EffectsModule.forRoot([ConfigEffects]),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [IronService],
  bootstrap: [AppComponent]
})
export class AppModule { }
