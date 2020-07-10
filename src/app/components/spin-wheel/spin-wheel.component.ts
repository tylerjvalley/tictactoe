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
      const randomNumber = Math.random();
      const totalDegrees = (baseRotations + randomNumber) * 360;
      let prize:string;
      this.spins += 1;

      console.log(totalDegrees)
      const rotation = totalDegrees;

      box.style.transform = "rotate(" + (totalDegrees * this.spins) + "deg)";


      if (rotation >= 1800 && rotation <= 1836) { //.036
        prize = "Silver Coins";
      } else if (rotation >= 1837 && rotation <= 1873) { //.035
        prize = "Gold Coins";
      } else if (rotation >= 1874 && rotation <= 1910) { //.034
        prize = "Chest";
      } else if (rotation >= 1911 && rotation <= 1947) { //.033
        prize = "Re-Spin";
      } else if (rotation >= 1948 && rotation <= 1984) { //.032
        prize = "Chest";
      } else if (rotation >= 1985 && rotation <= 2021) { //.031
         prize = "Silver Coins";
      } else if (rotation >= 2022 && rotation <= 2058) { //.030
        prize = "Gold Coins";
      } else if (rotation >= 2059 && rotation <= 2095) { //.029
        prize = "Bronze Coin";
      } else if (randomNumber >= 2096 && rotation <= 2132) { //.028
        prize = "Big Chest";
      } else if (rotation >= 2133 && rotation <= 2160) { //.027
        prize = "Bronze Coin";
      }

      setTimeout(function() {
        alert(prize);
      }, 4000);

   }
}
