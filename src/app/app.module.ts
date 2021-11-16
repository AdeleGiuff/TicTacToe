import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuadratoComponent } from './quadrato/quadrato.component';
import { GrigliaComponent } from './griglia/griglia.component';
import { HomeComponent } from './home/home.component';
import { PaginaGiocoComponent } from './pagina-gioco/pagina-gioco.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    QuadratoComponent,
    GrigliaComponent,
    HomeComponent,
    PaginaGiocoComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
