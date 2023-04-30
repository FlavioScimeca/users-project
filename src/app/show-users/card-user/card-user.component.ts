import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { UserServiceService } from 'src/app/services/user-service.service';
import { User } from 'src/assets/models/user.model';

@Component({
  selector: 'app-card-user',
  templateUrl: './card-user.component.html',
  styleUrls: ['./card-user.component.sass'],
})
export class CardUserComponent {
  @Input() user: User;

  constructor(private userService: UserServiceService) {}

  onChangeStatus() {
    this.userService.changeStatus(this.user);
  }
}
