import { Component, OnInit, Input } from '@angular/core';
import { IUser } from 'src/interfaces/user.interface';
import { UserService } from 'src/services/user.service';

interface ISidebar {
  userName: string;
  userLastName: string;
  userImg: string;
  userStatus: string;
}
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  user = {};
  @Input() sidebar: ISidebar = {
    userName: 'IVAN',
    userLastName: 'IVANOV',
    userImg: 'assets/sidebar/boy.png',
    userStatus: 'admin'
  } as ISidebar;

  private getCurrentUser() {
    this.userService.getMe().subscribe((res) => {
      this.user = res;
    });
  }
  constructor(private userService: UserService) {}

  ngOnInit() {
    this.getCurrentUser();
  }
}
