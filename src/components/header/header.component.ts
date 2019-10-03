import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { UserService } from 'src/services/user.service';
import { IUser } from 'src/interfaces/user.interface';
interface IHeader {
  logoUrl: string;
  userName: string;
  userLastName: string;
  userImg: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user = {};

  @Output() OnOpen = new EventEmitter();
  @Output() OnClose = new EventEmitter();
  visible = false;
  @Input() header: IHeader = {
    logoUrl: 'assets/header/logo-myshop.png',
    userName: 'Ivan',
    userLastName: 'Ivanov',
    userImg: 'assets/header/user_male.png'
  } as IHeader;

  private getCurrentUser() {
    this.userService.getMe().subscribe((res) => {
      this.user = res;
    });
  }

  openModal = () => {
    this.visible = !this.visible;
    this.visible ? this.OnOpen.emit() : this.OnClose.emit();
  };
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getCurrentUser();
  }
}
