import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-edit',
  templateUrl: './user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
  standalone: true,
  imports: [CommonModule, HttpClientModule, FormsModule],
})
export class UserEditComponent implements OnInit {
  user = { id: null, name: '', course: '' };

  constructor(
    private userService: UserService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.userService.getAllUsers().subscribe((response) => {
      if (response.status === 'success') {
        this.user = response.data.find((user: any) => user.id === id);
      }
    });
  }

  updateUser(): void {
    this.userService.updateUser(this.user).subscribe(() => {
      alert('User updated successfully');
    });
  }
}
