import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
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
  @Output() open: EventEmitter<any> = new EventEmitter();
  @Output() close: EventEmitter<any> = new EventEmitter();
  visible: boolean = false;

  @Input() header: IHeader = {
    logoUrl: 'assets/header/logo-myshop.png',
    userName: 'Ivan',
    userLastName: 'Ivanov',
    userImg: 'assets/header/user_male.png',
  } as IHeader;
  openModal = () => {
    this.visible = !this.visible;
    this.visible ? this.open.emit(null) : this.close.emit(null);
  };
  constructor() {}

  ngOnInit() {}
}
