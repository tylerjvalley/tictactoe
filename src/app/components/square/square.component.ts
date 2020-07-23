import { Component, OnInit, Input, Injectable } from '@angular/core';
import { BoardComponent } from '../board/board.component';

@Component({
  selector: 'square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})


@Injectable({
  providedIn: 'root'
})

export class SquareComponent extends BoardComponent implements OnInit {

  @Input() value: 'X' | 'O';

 
  ngOnInit() {
  
  }

}
