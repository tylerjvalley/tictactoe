import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SpinWheelComponent } from './components/spin-wheel/spin-wheel.component';
import { BoardComponent } from './components/board/board.component';
import { ChestComponent } from './components/chest/chest.component';


const routes: Routes = [
   { path: '', component: BoardComponent },
   { path: 'board', component: BoardComponent },
   { path: 'spin', component: SpinWheelComponent },
   { path: 'chest', component: ChestComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
