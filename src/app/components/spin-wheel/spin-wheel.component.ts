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

  constructor(readonly router: Router) {}

  ngOnInit() {}

  spin() {
      const box = document.getElementById("main-box");
      const baseRotations = 5;
      const randomNumber = Math.random();
      const totalDegrees = Math.floor((baseRotations + randomNumber) * 360);
      let prize:string;
      this.spins += 1;


      box.style.transform = "rotate(" + totalDegrees * this.spins + "deg)";

      console.log(totalDegrees);

      if (totalDegrees >= 1800 && totalDegrees <= 1836) { //.036
        prize = "Silver Coins";
      } else if (totalDegrees >= 1837 && totalDegrees <= 1873) { //.035
        prize = "Gold Coins";
      } else if (totalDegrees >= 1874 && totalDegrees <= 1910) { //.034
        prize = "Chest";
      } else if (totalDegrees >= 1911 && totalDegrees <= 1947) { //.033
        prize = "Re-Spin";
      } else if (totalDegrees >= 1948 && totalDegrees <= 1984) { //.032
        prize = "Chest";
      } else if (totalDegrees >= 1985 && totalDegrees <= 2021) { //.031
         prize = "Silver Coins";
      } else if (totalDegrees >= 2022 && totalDegrees <= 2058) { //.030
        prize = "Gold Coins";
      } else if (totalDegrees >= 2059 && totalDegrees <= 2095) { //.029
        prize = "Bronze Coin";
      } else if (totalDegrees >= 2096 && totalDegrees <= 2132) { //.028
        prize = "Big Chest";
      } else if (totalDegrees >= 2133 && totalDegrees <= 2160) { //.027
        prize = "Bronze Coin";
      }

      setTimeout(function() {
        alert(prize);
      }, 4000);


   }

}
