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
      const element = document.getElementById("wheel");
      const x: number = 5004; //min value
      const y: number = 5364; //max value
      this.spins += 1;

      this.deg = Math.floor(Math.random() * (x - y)) + y;



      if (this.deg <= 5075) {
        this.color = "red";
      } else if (this.deg >= 5076 && this.deg <= 5148) {
        this.color = "yellow";
      } else if (this.deg >= 5149 && this.deg <= 5220) {
        this.color = "blue";
      } else if (this.deg >= 5221 && this.deg <= 5292) {
        this.color = "white";
      } else if (this.deg >= 5293) {
        this.color = "green";
      }

      if (this.spins === 1) {
        element.style.transform = "rotate(" + this.deg + "deg)";
      } else if (this.spins === 2) {
        element.style.transform = "rotate(" + (this.deg + 5400) + "deg)";
      } else if (this.spins === 3) {
        element.style.transform = "rotate(" + (this.deg + 10800) + "deg)";
      } else if (this.spins === 4) {
        element.style.transform = "rotate(" + (this.deg + 21600) + "deg)";
      } else if (this.spins === 5) {
        element.style.transform = "rotate(" + (this.deg + 43200) + "deg)";
      } else if (this.spins === 6) {
        element.style.transform = "rotate(" + (this.deg + 86400) + "deg)";
      } else if (this.spins === 7) {
        element.style.transform = "rotate(" + (this.deg + 172800) + "deg)";
      } else if (this.spins === 8) {
        element.style.transform = "rotate(" + (this.deg + 345600) + "deg)";
      } else if (this.spins === 9) {
        element.style.transform = "rotate(" + (this.deg + 691200) + "deg)";
      } else if (this.spins === 2) {
        element.style.transform = "rotate(" + (this.deg + 1382400) + "deg)";
      }


   }
}
