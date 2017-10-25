import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-modal-alert',
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.css']
})
export class ModalAlertComponent implements OnInit {
  @Input() message: string;
  @Input() id: string;
  constructor() { }

  ngOnInit() {
  }

}
