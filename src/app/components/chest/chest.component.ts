import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chest',
  templateUrl: './chest.component.html',
  styleUrls: ['./chest.component.scss']
})
export class ChestComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  modal:boolean = false;
  chestClosed:boolean = true;
  chestOpen:boolean = false;

  openModal() {
    this.modal = !this.modal;
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
  }

}
