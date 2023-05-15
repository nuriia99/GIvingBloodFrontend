import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { CanGiveComponent } from './components/can-give/can-give.component';
import { WantGiveComponent } from './components/want-give/want-give.component';
import { CilindreComponent } from './components/cilindre/cilindre.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RedButtonComponent } from './components/red-button/red-button.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CanGiveComponent,
    WantGiveComponent,
    CilindreComponent,
    NavbarComponent,
    RedButtonComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
