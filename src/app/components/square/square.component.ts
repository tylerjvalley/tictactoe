import { Component, OnInit, Input } from '@angular/core';
import { ChildActivationStart } from '@angular/router';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  @Input() value;
  @Input() position;
  @Input() winners;
  @Input() isWinningSquare;
  @Input() endGame;

  positionsArray = new Array;
 

  
  constructor() { }

  ngOnInit() {
   console.log(this.winners);
  }

}
