import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TablaComponent } from './tabla/tabla.component';
import { CuadroComponent } from './cuadro/cuadro.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    TablaComponent,
    CuadroComponent
  ],
  bootstrap: [AppComponent],
  providers: [],
})
export class AppModule { }
