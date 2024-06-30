import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserService } from './user.service';
import { User } from './auth';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private currentUserSubject = new BehaviorSubject<User | null>(null);
  currentUser$ : Observable<User | null> = this.currentUserSubject.asObservable();
  constructor(private userService: UserService) { }

  private getuserFromLocalStorage(): User | null {
    const userJson = localStorage.getItem('currentUser');
    return userJson? JSON.parse(userJson) : null;
  }
  private setUserToLocalStorage(user: User | null) {
    if(user){
      localStorage.setItem('currentUser', JSON.stringify(user));
    }
    else{
      localStorage.removeItem('currentUser');
    }
  }
  login(username: string, password: string): boolean {
    const user = this.userService.getUserbyUsername(username);
    if (user && user.password === password) {
      this.currentUserSubject.next(user);
      this.setUserToLocalStorage(user);
      return true;
    }
    return false;
  }
  logout(): void{
   this.currentUserSubject.next(null);
   this.setUserToLocalStorage(null);
  }
  register(user:User):boolean{
    const existingUser = this.userService.getUserbyUsername(user.username);
    if (existingUser) {
      return false; // User already exists
    }
    this.userService.addUser(user);
    return true;
  }
  changePassword(username: string, newPassword: string):boolean{
    const user = this.userService.getUserbyUsername(username);
    if(user){
      user.password = newPassword;
      this.userService.updateUser(user);
      return true;
    }
    return false;
  }
  getCurrenUsername(): string|null{
    const currentUser = this.currentUserSubject.value;
    return currentUser? currentUser.username : null;
  }

}
