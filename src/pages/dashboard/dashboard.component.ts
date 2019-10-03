import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IUser } from 'src/interfaces/user.interface';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
})
export class DashboardComponent implements OnInit {
  currentUser: IUser;

  constructor(private route: ActivatedRoute) {}
  ngOnInit() {
    this.currentUser = this.route.snapshot.data.user;
    console.log(this.currentUser);
  }
}
