import { Component, ElementRef, ViewChild } from '@angular/core';
import { UserServiceService } from '../services/user-service.service';
import { User } from 'src/assets/models/user.model';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.sass'],
})
export class FormLoginComponent {
  @ViewChild('mycheckbox') mycheckbox: ElementRef;
  constructor(private userService: UserServiceService) {}

  email: string;

  error: boolean = false;

  addUser() {
    if (this.email == null) {
      this.error = true;
      return;
    }
    let user: User = {
      email: this.email,
      status: this.mycheckbox.nativeElement.checked,
      changes: 0,
    };
    this.userService.pushUser(user);
    this.email = null;
    this.mycheckbox.nativeElement.checked = null;
    this.error = false;
    return;
  }
}
