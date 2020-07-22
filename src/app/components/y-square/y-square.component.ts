import { Component, OnInit } from '@angular/core';
import { SquareComponent } from '../square/square.component'

@Component({
  selector: 'app-y-square',
  templateUrl: './y-square.component.html',
  styleUrls: ['./y-square.component.scss']
})
export class YSquareComponent extends SquareComponent {

  constructor() {
    super();
  }

  ngOnInit() {
  }

}
