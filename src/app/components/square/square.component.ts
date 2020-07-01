import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})

//simple UI component
export class SquareComponent {

  @Input() value: 'X' | 'O';

}
