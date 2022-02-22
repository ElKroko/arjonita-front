import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent} from '../app/home/home.component';
import { GestComComponent} from '../app/gest-com/gest-com.component';
import { EvEcoComponent} from '../app/ev-eco/ev-eco.component';
import { GestPagoComponent} from '../app/gest-pago/gest-pago.component'; 
import { LandingPageComponent } from './components/landing-page/landing-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'login', component: LandingPageComponent},
  { path:'home', component:HomeComponent },
  { path:'gest-com', component:GestComComponent },
  { path:'ev-eco', component:EvEcoComponent },
  { path:'gest-pago', component:GestPagoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
