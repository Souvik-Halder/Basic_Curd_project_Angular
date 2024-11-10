import { HttpClient, HttpClientModule } from '@angular/common/http';
import { UserService } from './../../services/user.service';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-create',
  templateUrl: './user-create.component.html',
  styleUrls: ['./user-create.component.css'],
  standalone: true,
  imports: [HttpClientModule, CommonModule, FormsModule],
})
export class UserCreateComponent {
  user = { name: '', course: '' };

  constructor(private userService: UserService) {}

  createUser(): void {
    this.userService.createUser(this.user).subscribe(() => {
      alert('User created successfully');
    });
  }
}
