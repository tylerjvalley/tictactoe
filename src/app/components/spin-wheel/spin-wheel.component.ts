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

  constructor( readonly router: Router ) {}

  ngOnInit() {}

  spin() {
    const x:number = 1024; //min value
    const y:number = 9999; //max value

    const deg:number = Math.floor(Math.random() * (x - y)) + y;

    document.getElementById("wheel").style.transform = "rotate(" + deg + "deg)";
  };
}
