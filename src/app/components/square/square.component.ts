import { Component, OnInit, Input, Injectable } from '@angular/core';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})


@Injectable({
  providedIn: 'root'
})

export class SquareComponent {

  @Input() value: 'X' | 'O';

}
