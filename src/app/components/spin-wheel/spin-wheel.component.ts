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
      const box = document.getElementById("main-box");
      const x: number = 2004; //min value
      const y: number = 2364; //max value
      this.spins += 1;

      this.deg = Math.floor(Math.random() * (x - y)) + y;

      if (this.spins === 1) {
        box.style.transform = "rotate(" + this.deg + "deg)";
      } else if (this.spins === 2) {
        box.style.transform = "rotate(" + (this.deg + 2400) + "deg)";
      } else if (this.spins === 3) {
        box.style.transform = "rotate(" + (this.deg + 3800) + "deg)";
      } else if (this.spins === 4) {
        box.style.transform = "rotate(" + (this.deg + 4600) + "deg)";
      } else if (this.spins === 5) {
        box.style.transform = "rotate(" + (this.deg + 5200) + "deg)";
      } else if (this.spins === 6) {
        box.style.transform = "rotate(" + (this.deg + 9400) + "deg)";
      } else if (this.spins === 7) {
        box.style.transform = "rotate(" + (this.deg + 17800) + "deg)";
      } else if (this.spins === 8) {
        box.style.transform = "rotate(" + (this.deg + 44600) + "deg)";
      } else if (this.spins === 9) {
        box.style.transform = "rotate(" + (this.deg + 791200) + "deg)";
      } else if (this.spins === 2) {
        box.style.transform = "rotate(" + (this.deg + 1382400) + "deg)";
      }


   }
}
