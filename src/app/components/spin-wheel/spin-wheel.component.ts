import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { faCaretDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: "app-spin-wheel",
  templateUrl: "./spin-wheel.component.html",
  styleUrls: ["./spin-wheel.component.scss"],
})
export class SpinWheelComponent implements OnInit {
  faCaretDown = faCaretDown;
  color: string;
  deg: number = 0;
  spins: number = 0;
  multiples:any = [1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 5, 5.5];

  constructor(readonly router: Router) {}

  ngOnInit() {}

  spin() {
    const element = document.getElementById("wheel");
    const x: number = 5004; //min value
    const y: number = 5364; //max value
    this.spins += 1;

    this.deg = Math.floor(Math.random() * (x - y)) + y;

    const multiples = this.getMultiplesOf(this.multiples, this.deg);

    if (multiples[0] <= 5075) {
      this.color = "red";
    } else if (multiples[0] >= 5076 && multiples[0] <= 5148) {
      this.color = "yellow";
    } else if (multiples[0] >= 5149 && multiples[0] <= 5220) {
      this.color = "blue";
    } else if (multiples[0] >= 5221 && multiples[0] <= 5292) {
      this.color = "white";
    } else if (multiples[0] >= 5293) {
      this.color = "green";
    }

    console.log(multiples);

    for (var i = 0; i < multiples.length; i++) {
      if (this.spins === 1) {
        element.style.transform = "rotate(" + multiples[0] + "deg)";
      } else if (this.spins === 2) {
        element.style.transform = "rotate(" + multiples[1] + "deg)";
      } else if (this.spins === 3) {
        element.style.transform = "rotate(" + multiples[2] + "deg)";
      } else if (this.spins === 4) {
        element.style.transform = "rotate(" + multiples[3] + "deg)";
      } else if (this.spins === 5) {
        element.style.transform = "rotate(" + multiples[4] + "deg)";
      } else if (this.spins === 6) {
        element.style.transform = "rotate(" + multiples[5] + "deg)";
      } else if (this.spins === 7) {
        element.style.transform = "rotate(" + multiples[6] + "deg)";
      } else if (this.spins === 8) {
        element.style.transform = "rotate(" + multiples[7] + "deg)";
      } else if (this.spins === 9) {
        element.style.transform = "rotate(" + multiples[8] + "deg)";
      }
    }

  }

  getMultiplesOf(numbers, number) {
    const multiples = [];
    for (var i = 0; i < numbers.length; i++) {
      let multiple = numbers[i] * number;
      multiples.push(multiple);
    }
    return multiples;
  }
}
