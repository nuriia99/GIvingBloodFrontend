import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CanGiveComponent } from './components/can-give/can-give.component';
import { WantGiveComponent } from './components/want-give/want-give.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'can-give',
    component: CanGiveComponent
  },
  {
    path: 'want-give',
    component: WantGiveComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }