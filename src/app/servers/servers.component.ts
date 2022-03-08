import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  allowServerButton: boolean = false;
  serverCreationStatus = 'No server was created';
  serverName: string = '';
  serverCreated = false;
  servers = ['Test Server 1', 'Test Server 2'];

  constructor() {
    setTimeout(() => {
      this.allowServerButton = true;
    }, 2000);
  }

  ngOnInit(): void {}

  onServerCreation() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    return (this.serverCreationStatus = 'Server is created ' + this.serverName);
  }

  onUpdateServerName(event: Event) {
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
