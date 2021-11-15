import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuadratoComponent } from './quadrato/quadrato.component';
import { GrigliaComponent } from './griglia/griglia.component';

@NgModule({
  declarations: [
    AppComponent,
    QuadratoComponent,
    GrigliaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
