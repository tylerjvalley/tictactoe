import { Component, OnInit, Input } from '@angular/core';
import { SquareComponent } from '../square/square.component';

@Component({
  selector: 'app-x-square',
  templateUrl: './x-square.component.html',
  styleUrls: ['./x-square.component.scss']
})
export class XSquareComponent {

  @Input() value: 'X';

  constructor() {
  
   }

  ngOnInit() {
  }

}
