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
  color:string;

  constructor( readonly router: Router ) {}

  ngOnInit() {}

  spin() {
    const x:number = 5004; //min value
    const y:number = 5364; //max value

    const deg:number = Math.floor(Math.random() * (x - y)) + y;

    if ( deg <= 5075 ) {
      this.color = 'red';
    } else if ( deg >= 5076 && deg <= 5148 ) {
      this.color = 'yellow';
    } else if ( deg >= 5149 && deg <= 5220 ) {
      this.color = 'blue';
    } else if ( deg >= 5221 && deg <= 5292 ) {
      this.color = 'white';
    } else if ( deg >= 5293 ) {
      this.color = 'green';
    }

    document.getElementById("wheel").style.transform = "rotate(" + deg + "deg)";
  };
}
