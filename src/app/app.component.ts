import {AfterViewInit, Component, ViewEncapsulation} from '@angular/core';
import {MessageService} from './mod-socketnotification/services/socketnotification.service';
import {MatSnackBar} from '@angular/material/snack-bar';

declare var UnityLoader: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AppComponent implements AfterViewInit {
  unityInstance: any;
  input = '';
  action: string = "cerrar";
  durationInSeconds = 5;


  constructor(public messageService: MessageService, private _snackBar: MatSnackBar) {
  }

  ngAfterViewInit() {
    this.unityInstance = UnityLoader.instantiate("unityContainer", "assets/unity/Build/WebGL.json")
  }

  sendMessage() {
    if (this.input) {
      this.messageService.sendMessage(this.input);
      this._snackBar.open(this.input, this.action,
        {duration: this.durationInSeconds * 1000});
      this.input = '';
    }
  }

  onCloseMessage() {
    this.messageService.msg = [];
  }
}
