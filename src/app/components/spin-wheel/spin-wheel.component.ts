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
      const baseRotations = 5;
      const x: number = 1; //min value
      const y: number = 1.360; //max value
      const totalDegrees = (baseRotations + Math.floor(Math.random() * (x - y)) + y) * 360
      this.spins += 1;

      box.style.transform = "rotate(" + (totalDegrees * this.spins) + "deg)";

   }
}
