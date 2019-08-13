import { Component, OnInit, Input } from '@angular/core';

interface IHeader {
  logoUrl: string;
  userName: string;
  userLastName: string;
  userImg: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() header: IHeader = {
    logoUrl: 'http://topscripts.in/wp-content/uploads/2017/12/logo-myshop.png',
    userName: 'Ivan',
    userLastName: 'Ivanov',
    userImg:
      'https://cdn2.iconfinder.com/data/icons/ios-7-icons/50/user_male2-512.png',
  } as IHeader;
  constructor() {}

  ngOnInit() {}
}
