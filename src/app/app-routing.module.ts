import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SubscribeComponent } from './subscribe/subscribe.component';
import { RxjsWayComponent } from './rxjs-way/rxjs-way.component';
import { NgrxWayComponent } from './ngrx-way/ngrx-way.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'subscribe', component: SubscribeComponent },
  { path: 'rxjs-way', component: RxjsWayComponent },
  { path: 'ngrx-way', component: NgrxWayComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
