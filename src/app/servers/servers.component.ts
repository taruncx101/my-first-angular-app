import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  serverCreationStatus = 'No server was created';
  serverName = 'testServer';
  allowNewServer = false;
  serverCreated = false;
  servers = ['Testserver1', 'Testserver2'];
  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server was created ' + this.serverName;
  }
  onUpdateServerName(event) {
    // console.log(event.target.value);
    this.serverName = event.target.value;
  }

}
