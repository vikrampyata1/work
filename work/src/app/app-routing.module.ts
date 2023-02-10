import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { DonateComponent } from './donate/donate.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    component:HomeComponent,path:'home'
  },
  {
    component:ContactComponent,path:'contact'
  },
  {
    component:AboutComponent,path:'about'
  },
  {
    component:DonateComponent,path:'donate'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
