import { Injectable } from '@angular/core';
import { User } from 'src/assets/models/user.model';

@Injectable({
  providedIn: 'root',
})
export class UserServiceService {
  constructor() {}

  userListTrue: User[] = [
    {
      email: 'test1@test.com',
      status: true,
      changes: 0,
    },
  ];
  userListFalse: User[] = [
    {
      email: 'test2@test.com',
      status: false,
      changes: 0,
    },
  ];

  pushUser(user: User) {
    if (user.status === true) {
      this.userListTrue.push(user);
    } else {
      this.userListFalse.push(user);
    }
  }

  changeStatus(user: User) {
    if (user.status === true) {
      let findUser = this.userListTrue.findIndex(
        (userT) => userT.email == user.email
      );
      user.status = false;
      this.userListTrue.splice(findUser, 1);
      this.userListFalse.push(user);
    } else {
      let findUser = this.userListFalse.findIndex(
        (userF) => userF.email == user.email
      );
      user.status = true;
      this.userListFalse.splice(findUser, 1);
      this.userListTrue.push(user);
    }
    user.changes++;
  }
}
