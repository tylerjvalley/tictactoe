import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.scss']
})
export class ChestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    document.getElementById("modal").style.visibility = "hidden";
  }

  modal:boolean = false;
  chestClosed:boolean = true;
  chestOpen:boolean = false;

  openModal() {
    this.modal = !this.modal;
    document.getElementById("closed").style.visibility = "visible";
    document.getElementById("modal").style.visibility = "visible";
    document.getElementById("openButton").style.visibility = "hidden";
     setTimeout(() => {
       this.chestClosed = false;
       this.chestOpen = true;
       document.getElementById("closed").style.visibility = "hidden";
       document.getElementById("open").style.visibility = "visible";
       document.getElementById("cards").style.visibility = "visible";
     }, 2000);
  }

  closeModal() {
    this.modal = !this.modal;
    this.chestClosed = !this.chestClosed;
    this.chestOpen = !this.chestOpen;
    document.getElementById("modal").style.visibility = "hidden";
    document.getElementById("openButton").style.visibility = "visible";
    document.getElementById("open").style.visibility = "hidden";
    document.getElementById("cards").style.visibility = "hidden";
  }

}
