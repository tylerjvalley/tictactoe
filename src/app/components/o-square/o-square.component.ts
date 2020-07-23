import { Component, OnInit, Input } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-o-square',
  templateUrl: './o-square.component.html',
  styleUrls: ['./o-square.component.scss']
})
export class OSquareComponent {

  @Input() value: 'O';

  constructor() { 
   
  }

  ngOnInit() {
  }

}
