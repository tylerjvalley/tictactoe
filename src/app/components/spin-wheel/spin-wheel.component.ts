import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { faCaretDown, faThermometerThreeQuarters } from '@fortawesome/free-solid-svg-icons';
import { resetFakeAsyncZone } from '@angular/core/testing';

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
  showPrize: boolean = false;


  constructor(readonly router: Router) {}

  ngOnInit() {

  }

  spin() {
      const box = document.getElementById("main-box");
      const baseRotations = 5;
      const randomNumber = Math.random();
      const totalDegrees = Math.floor((baseRotations + randomNumber) * 360);
      let prize:string;
      this.spins += 1440;


      if (this.spins < 2880) {
        box.style.transform = "rotate(" + totalDegrees + "deg)";
      } else {
        box.style.transform = "rotate(" + (totalDegrees + this.spins) + "deg)";
      }


      if (totalDegrees >= 1800 && totalDegrees <= 1817) { //.036
        prize = "Bronze Coin";
      } else if (totalDegrees >= 1818 && totalDegrees <= 1854) { //.035
        prize = "Silver Coins";
      } else if (totalDegrees >= 1855 && totalDegrees <= 1890) { //.034
        prize = "Gold Coins";
      } else if (totalDegrees >= 1891 && totalDegrees <= 1927) { //.033
        prize = "Chest";
      } else if (totalDegrees >= 1928 && totalDegrees <= 1963) { //.032
        prize = "Re-Spin";
      } else if (totalDegrees >= 1964 && totalDegrees <= 1999) { //.031
         prize = "Chest";
      } else if (totalDegrees >= 2000 && totalDegrees <= 2034) { //.030
        prize = "Silver Coins";
      } else if (totalDegrees >= 2035 && totalDegrees <= 2069) { //.029
        prize = "Gold Coins";
      } else if (totalDegrees >= 2070 && totalDegrees <= 2104) { //.028
        prize = "Bronze Coin";
      } else if (totalDegrees >= 2105 && totalDegrees <= 2141) { //.027
        prize = "Big Chest";
      } else if (totalDegrees >= 2142 && totalDegrees <= 2160) {
        prize = "Bronze Coin";
      }

      setTimeout(() => {
        this.prize = prize;
        this.showPrize = true;
      }, 5500)
   }

}
