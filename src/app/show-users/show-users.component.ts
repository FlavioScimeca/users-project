import { Component, OnInit } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from 'src/assets/models/user.model';

@Component({
  selector: 'app-show-users',
  templateUrl: './show-users.component.html',
  styleUrls: ['./show-users.component.sass'],
})
export class ShowUsersComponent implements OnInit {
  constructor(private userService: UserServiceService) {}

  userListTrue: User[] = [];
  userListFalse: User[] = [];

  ngOnInit(): void {
    this.userListTrue = this.userService.userListTrue;
    this.userListFalse = this.userService.userListFalse;
  }
}
