import {Component, OnInit} from '@angular/core';
import {animate, state, style, transition, trigger} from '@angular/animations';
import {MatSnackBar} from '@angular/material/snack-bar';
import {MessageService} from '../../services/socketnotification.service';

@Component({
  selector: 'app-socketnotification-management',
  templateUrl: './socketnotification-management.component.html',
  styleUrls: ['./socketnotification-management.component.scss'],
  animations: [
    trigger('openClose', [
      // ...
      state('open',
        style({
          height: '50%',
          opacity: 1,
          backgroundColor: '#B3E5FC'
        })),
      state('closed',
        style({
          height: '0px',
          opacity: 0.8,
          backgroundColor: '#000000'
        })),
      transition('open => closed', [
        animate('1s')
      ]),
      transition('closed => open', [
        animate('0.5s')
      ]),
    ]),
  ]
})
export class SocketnotificationManagementComponent implements OnInit {
  title = 'websocket-frontend';
  input = '';
  showCard = false;
  msg: any;
  isOpen = true;
  action: string = "cerrar";
  durationInSeconds = 5;

  constructor(public messageService: MessageService, private _snackBar: MatSnackBar) {
  }

  ngOnInit(): void {
  }


  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this.msg = this.input;
      this.showCard = true;
      this.input = '';
    }
  }

  toggle() {
    this.isOpen = !this.isOpen;
    this.messageService.msg = [];
  }

  close() {
    this.showCard = false;
  }

  openSnackBar(message: string) {
    this.action = "cerrar";
    this._snackBar.open(message, this.action);
  }

}
