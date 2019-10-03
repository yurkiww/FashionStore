import { Component, OnInit, Input } from '@angular/core';
import { StorageService } from 'src/services/storage.service';
import { Router } from '@angular/router';
import { HeaderComponent } from '../header/header.component';
import { IUser } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {
  @Input() user: IUser;
  constructor(
    private storageService: StorageService,
    private router: Router,
    private headerComponent: HeaderComponent
  ) {}
  signOut() {
    this.storageService.deleteToken();
    this.router.navigateByUrl('/login');
  }
  closeModal = () => {
    this.headerComponent.closeModal();
  };
  ngOnInit() {}
}
