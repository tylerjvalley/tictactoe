import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})


export class SquareComponent {

  public selected:boolean = false;
  public winning:boolean = false;

}
