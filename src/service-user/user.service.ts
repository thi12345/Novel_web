import { Injectable } from '@angular/core';
import { User } from './auth';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private users: User[] = [
    { username: 'user1', email: 'abcxyz1@gmail.com', password: 'abc123' },
    { username: 'user2', email: 'abcxyz2@gmail.com', password: 'abc123' }
  ];
  constructor() { }
  getUser(): User[] {
    return this.users;
  }
  addUser(user: User): void {
    this.users.push(user);
  }
  updateUser(user: User): void {
    this.users[this.users.indexOf(user)] = user;
  }
  getUserbyUsername(username: string): User | undefined {
    return this.users.find(user => user.username === username);
  }

}
