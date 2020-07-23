import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardComponent } from './components/board/board.component';
import { SpinWheelComponent } from './components/spin-wheel/spin-wheel.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ChestComponent } from './components/chest/chest.component';
import { SquareComponent } from './components/square/square.component';

@NgModule({
  declarations: [
    AppComponent,
    BoardComponent,
    SpinWheelComponent,
    ChestComponent,
    SquareComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
