import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {

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
     }, 2000);
  }

  closeModal() {
    this.modal = !this.modal;
    this.chestClosed = !this.chestClosed;
    this.chestOpen = !this.chestOpen;
  }

}
