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
  deg:number = 0;
  spins:number = 1;

  constructor( readonly router: Router ) {}

  ngOnInit() {}

  spin() {

    const element = document.getElementById("wheel");
    const x:number = 5004; //min value
    const y:number = 5364; //max value


    if ( this.spins <= 1 ) {
     this.deg = Math.floor(Math.random() * (x - y)) + y;
    } else if ( this.spins > 1 ) {
      this.deg = this.deg * 2;
    }
    console.log(this.deg);

    if ( this.deg <= 5075 ) {
      this.color = 'red';
    } else if ( this.deg >= 5076 && this.deg <= 5148 ) {
      this.color = 'yellow';
    } else if ( this.deg >= 5149 && this.deg <= 5220 ) {
      this.color = 'blue';
    } else if ( this.deg >= 5221 && this.deg <= 5292 ) {
      this.color = 'white';
    } else if ( this.deg >= 5293 ) {
      this.color = 'green';
    }

    element.style.transform = "rotate(" + this.deg + "deg)";
    this.spins += 1;
    console.log(this.spins);

  };
}
