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

  constructor(readonly router: Router) {}

  ngOnInit() {}

  spin() {
      const box = document.getElementById("main-box");
      const x: number = 1004; //min value
      const y: number = 1364; //max value
      this.spins += 1;

      this.deg = Math.floor(Math.random() * (x - y)) + y;

      if (this.spins === 1) {
        box.style.transform = "rotate(" + this.deg + "deg)";
      } else if (this.spins >= 2) {
        box.style.transform = "rotate(" + (this.deg * (this.spins)) + "deg)";
      }
   }
}
