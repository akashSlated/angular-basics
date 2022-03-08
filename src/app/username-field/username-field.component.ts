import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-username-field',
  templateUrl: './username-field.component.html',
  styleUrls: ['./username-field.component.css'],
})
export class UsernameFieldComponent implements OnInit {
  userName: string = '';
  addUser: any = [];
  showSecret = true;

  logClicks: any = [];
  constructor() {}

  ngOnInit(): void {}

  resetInput(event: any) {
    this.addUser.push(this.userName);
  }

  togglePassword() {
    this.showSecret = !this.showSecret;
    this.logClicks.push(this.logClicks.length + 1);
  }

  fifthLogTerm() {
    // let t;
    // let element = t > 5;

    this.logClicks.findIndex;
  }
}
