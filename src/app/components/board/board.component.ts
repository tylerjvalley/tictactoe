import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  
  squares: any[];
  value: string = "X";
  playerX: boolean = true;
  position: number;
  winningLines: any[];
  endGame: boolean = false;
  isWinningSquare: boolean;
  winners = new Array;

  constructor( readonly router: Router ) { }

  ngOnInit() {
   
  }

  newGame() {
    this.squares = Array(9).fill(null);
    this.endGame = false;
  }

  makeMove(id: number) {
    this.position = id;
    let player
    if (this.playerX) {
      player = 'X';
    } else {
      player = 'O';
    }

    if (!this.squares[id]) {
      this.squares.splice(id, 1, player);
    }

    this.playerX = !this.playerX;

    this.calculateWinner();
    this.winners.push(id);
    if (this.winningLines) {
      let greenSquares = new Array;
      for (let i = 0; i < this.winners.length; i++) {
        if (
          this.winningLines[0] === this.winners[i] ||
          this.winningLines[1] === this.winners[i] ||
          this.winningLines[2] === this.winners[i]
        ) {
          greenSquares.push(this.winners[i]);
        }
      }
      this.winners = greenSquares;
      console.log(this.winners);
    }

    
  }

  calculateWinner() {
    const lines = [
      [0,1,2],
      [3,4,5],
      [6,7,8],
      [0,3,6],
      [1,4,7],
      [2,5,8],
      [0,4,8],
      [2,4,6]
    ];

    
    for (let i = 0; i < lines.length; i++) {
      const [a,b,c] = lines[i];
      if (
        this.squares[a] &&
        this.squares[a] === this.squares[b] &&
        this.squares[a] === this.squares[c]
      ) {
        this.winningLines = [a,b,c];
        this.endGame = true;
        return this.squares[a];
      }
    }
    return null;
  }
}
