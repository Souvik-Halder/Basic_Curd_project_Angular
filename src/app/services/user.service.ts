import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private apiUrl = 'http://localhost:8080/user';

  constructor(private http: HttpClient) {}

  getAllUsers(): Observable<any> {
    return this.http.get(`${this.apiUrl}/allUsers`);
  }

  createUser(user: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/create`, user);
  }

  updateUser(user: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/update`, user);
  }

  deleteUser(userId: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/delete/${userId}`);
  }
}
