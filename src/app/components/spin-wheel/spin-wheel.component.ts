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
      const wheel = document.getElementById("wheel");
      const prizes = document.getElementById("prizes");
      const x: number = 1004; //min value
      const y: number = 1364; //max value
      this.spins += 1;

      this.deg = Math.floor(Math.random() * (x - y)) + y;

      if (this.spins === 1) {
        wheel.style.transform = "rotate(" + this.deg + "deg)";
        prizes.style.transform = "rotate(" + this.deg + "deg)";
      } else if (this.spins === 2) {
        wheel.style.transform = "rotate(" + (this.deg + 1400) + "deg)";
        prizes.style.transform = "rotate(" + (this.deg + 1400) + "deg)";
      } else if (this.spins === 3) {
        wheel.style.transform = "rotate(" + (this.deg + 2800) + "deg)";
        prizes.style.transform = "rotate(" + (this.deg + 2800) + "deg)";
      } else if (this.spins === 4) {
        wheel.style.transform = "rotate(" + (this.deg + 3600) + "deg)";
        prizes.style.transform = "rotate(" + (this.deg + 3600) + "deg)";
      } else if (this.spins === 5) {
        wheel.style.transform = "rotate(" + (this.deg + 4200) + "deg)";
        prizes.style.transform = "rotate(" + (this.deg + 4200) + "deg)";
      } else if (this.spins === 6) {
        wheel.style.transform = "rotate(" + (this.deg + 8400) + "deg)";
        prizes.style.transform = "rotate(" + (this.deg + 8400) + "deg)";
      } else if (this.spins === 7) {
        wheel.style.transform = "rotate(" + (this.deg + 16800) + "deg)";
        prizes.style.transform = "rotate(" + (this.deg + 16800) + "deg)";
      } else if (this.spins === 8) {
        wheel.style.transform = "rotate(" + (this.deg + 34600) + "deg)";
        prizes.style.transform = "rotate(" + (this.deg + 34600) + "deg)";
      } else if (this.spins === 9) {
        wheel.style.transform = "rotate(" + (this.deg + 691200) + "deg)";
        prizes.style.transform = "rotate(" + (this.deg + 691200) + "deg)";
      } else if (this.spins === 2) {
        wheel.style.transform = "rotate(" + (this.deg + 1382400) + "deg)";
        prizes.style.transform = "rotate(" + (this.deg + 1382400) + "deg)";
      }


   }
}
