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
  prize: string;

  constructor(readonly router: Router) {}

  ngOnInit() {}

  spin() {
      const box = document.getElementById("main-box");
      const baseRotations = 5;
      const x: number = 1; //min value
      const y: number = 1.360; //max value
      const randomNumber = Math.random() * (x - y) + y
      const totalDegrees = (baseRotations + randomNumber) * 360;
      let prize:string;
      this.spins += 1;

      console.log(randomNumber);
      box.style.transform = "rotate(" + (totalDegrees * this.spins) + "deg)";


      if (randomNumber >= 1.00 && randomNumber <= 1.075) {
        prize = "Silver Coins";
      } else if (randomNumber >= 1.076 && randomNumber <= 1.086) {
        prize = "Gold Coins";
      } else if (randomNumber >= 1.087 && randomNumber <= 1.097) {
        prize = "A Chest";
      } else if (randomNumber >= 1.098 && randomNumber <= 1.198) {
        prize = "Re-Spin";
      } else if (randomNumber >= 1.199 && randomNumber <= 1.209) {
        prize = "A Chest";
      } else if (randomNumber >= 1.210 && randomNumber <= 1.220) {
        prize = "Silver Coins";
      } else if (randomNumber >= 1.221 && randomNumber <= 1.231) {
        prize = "Gold Coins";
      } else if (randomNumber >= 1.232 && randomNumber <= 1.242) {
        prize = "A Bronze Coin";
      } else if (randomNumber >= 1.243 && randomNumber <= 1.253) {
        prize = "A big chest";
      } else if (randomNumber >= 1.254 && randomNumber <= 1.360) {
        prize = "A Bronze Coin";
      }

      setTimeout(function() {
        alert(prize);
      }, 4000);

   }
}
