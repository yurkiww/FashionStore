import { Component, OnInit } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { Router } from '@angular/router';
import { UserService } from 'src/services/user.service';
import { IUser } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent implements OnInit {
  user = {};
  constructor(
    private storageService: StorageService,
    private router: Router,
    private userService: UserService
  ) {}
  signOut() {
    this.storageService.deleteToken();
    this.router.navigateByUrl('/login');
  }
  private getCurrentUser() {
    this.userService.getMe().subscribe((res) => {
      this.user = res;
    });
  }
  ngOnInit() {
    this.getCurrentUser();
  }
}
