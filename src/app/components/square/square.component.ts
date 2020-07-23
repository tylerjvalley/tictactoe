import { Component, OnInit, Input, Injectable } from '@angular/core';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})


<<<<<<< HEAD
=======
@Injectable({
  providedIn: 'root'
})

>>>>>>> 7547a90ee8c8a868106119db33172dfddd904db4
export class SquareComponent {

  public selected:boolean = false;
  public winning:boolean = false;

}
